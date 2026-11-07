#!/usr/bin/env node
/* CI-only desktop/mobile visual smoke test. Never publishes or deploys media. */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const BASE = "http://127.0.0.1:8765";
const routes = [
  "/", "/about/", "/coaches/", "/founder/", "/our-story/",
  "/gyms-and-corners/", "/gyms-and-corners/summers-boxing-club/",
  "/gyms-and-corners/barrons-boxing/", "/gyms-and-corners/nomad-boxing-club/",
  "/watch/", "/fighters/", "/blog/", "/get-involved/", "/review/",
];
const sizes = [
  {width: 320, height: 740}, {width: 390, height: 844},
  {width: 768, height: 1024}, {width: 1440, height: 900},
];
const screenshots = new Set([
  "/coaches/", "/our-story/", "/founder/", "/gyms-and-corners/",
  "/gyms-and-corners/nomad-boxing-club/", "/review/",
]);
(async () => {
  fs.mkdirSync(path.join(process.cwd(), "browser-evidence"), {recursive: true});
  const browser = await chromium.launch({headless: true});
  const failures = [], results = [];
  for (const viewport of sizes) {
    const context = await browser.newContext({viewport, reducedMotion: "reduce"});
    for (const route of routes) {
      const page = await context.newPage();
      const localErrors = [];
      page.on("response", res => {
        if (res.url().startsWith(BASE) && res.status() >= 400)
          localErrors.push(res.status() + " " + res.url());
      });
      try {
        const response = await page.goto(BASE + route, {waitUntil: "domcontentloaded", timeout: 20000});
        await page.waitForTimeout(180);
        if (!response || response.status() !== 200)
          failures.push(route + " @" + viewport.width + ": page HTTP " + response?.status());
        const stats = await page.evaluate(() => ({
          viewport: document.documentElement.clientWidth,
          scroll: document.documentElement.scrollWidth,
          h1: document.querySelectorAll("h1").length,
          title: document.title.trim(),
          main: !!document.querySelector("main"),
          fonts: document.fonts?.status || "unknown",
        }));
        if (stats.scroll > stats.viewport + 1) {
          const offenders = await page.evaluate(() => [...document.querySelectorAll("body *")].filter(el => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.right > document.documentElement.clientWidth + 1 && getComputedStyle(el).position !== "fixed";
          }).slice(0, 12).map(el => ({
            tag: el.tagName.toLowerCase(), cls: String(el.className).slice(0, 65),
            text: (el.textContent || "").trim().slice(0, 45),
            right: Math.round(el.getBoundingClientRect().right)
          })));
          failures.push(route + " @" + viewport.width + ": horizontal overflow " + stats.scroll + " > " + stats.viewport + "; offenders " + JSON.stringify(offenders));
        }
        if (stats.h1 !== 1 || !stats.main || !stats.title)
          failures.push(route + " @" + viewport.width + ": invalid page semantics " + JSON.stringify(stats));
        if (route === "/review/") {
          await page.waitForSelector("#items .item:nth-child(16)", {timeout: 5000});
          const catalog = await page.evaluate(() => ({
            count: document.querySelectorAll("#items .item").length,
            source: document.querySelector("#source")?.getAttribute("href") || "",
            selection: document.querySelector("#title")?.textContent || ""
          }));
          if (catalog.count !== 16 || !catalog.source.startsWith("https://drive.google.com/file/d/"))
            failures.push(route + " @" + viewport.width + ": review catalog mismatch " + JSON.stringify(catalog));
          await page.locator("#items .item").nth(1).click();
          const selected = await page.locator("#title").textContent();
          if (!selected.includes("FULL PLAY"))
            failures.push(route + " @" + viewport.width + ": selecting second cut failed");
          const iframeSrc = await page.locator("#screen iframe").getAttribute("src");
          if (!iframeSrc?.startsWith("https://drive.google.com/file/d/"))
            failures.push(route + " @" + viewport.width + ": missing real Drive playback embed");
          await page.locator("#reset").click();
          if (await page.locator("#screen iframe").count())
            failures.push(route + " @" + viewport.width + ": stop left player active");
        }
        for (const err of localErrors) failures.push(route + " @" + viewport.width + ": " + err);
        results.push({route, width: viewport.width, ...stats, localErrors});
        if (screenshots.has(route) && (viewport.width === 390 || viewport.width === 1440)) {
          const slug = route.replace(/\W+/g, "-").replace(/^-|-$/g, "");
          await page.screenshot({path: path.join("browser-evidence", slug + "-" + viewport.width + ".png"), fullPage: true, animations: "disabled", timeout: 20000});
        }
      } catch (e) {
        failures.push(route + " @" + viewport.width + ": browser exception " + e.message);
      } finally {
        await page.close();
      }
    }
    await context.close();
  }
  await browser.close();
  fs.writeFileSync("browser-evidence/results.json", JSON.stringify({results, failures, caveats: [
    "Screenshots rendered in CI, not production",
    "No media rights or external API availability established",
    "Reduced-motion mode only; manual visual and keyboard review still required"
  ]}, null, 2));
  console.log("Browser review:", results.length, "route-width checks,", failures.length, "failures");
  failures.forEach(x => console.error("FAIL", x));
  if (failures.length) process.exitCode = 1;
})().catch(e => {console.error(e); process.exitCode = 1;});
