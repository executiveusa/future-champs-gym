#!/usr/bin/env python3
"""Dependency-free static editorial release checks; never deploys."""
from __future__ import annotations
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1]
ROUTES = [
    "index.html", "about/index.html", "coaches/index.html",
    "founder/index.html", "our-story/index.html",
    "gyms-and-corners/index.html",
    "gyms-and-corners/summers-boxing-club/index.html",
    "gyms-and-corners/barrons-boxing/index.html",
    "gyms-and-corners/nomad-boxing-club/index.html",
    "watch/index.html", "fighters/index.html",
    "blog/index.html", "get-involved/index.html",
]
ASSETS = [
    "assets/future-champs-round8.svg",
    "assets/future-champs-editorial.css",
    "assets/future-champs-home-direction02.css",
    "assets/future-champs-directory.css",
]
REQUIRED = {
    "index.html": ["Nomad", "Summers", "Barron", "Every fighter"],
    "coaches/index.html": ["Bret Summers", "Barron", "Dunham"],
    "our-story/index.html": ["Glen Singleton", "Muhammad Ali", "independent"],
    "founder/index.html": ["Glen Singleton Jr.", "approved"],
    "gyms-and-corners/index.html": ["Nomad Boxing Club", "Barron", "Summers"],
}
class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.h1 = 0
        self.hrefs: list[str] = []
        self.imgs: list[dict[str, str]] = []
        self.head = False
        self.title = False
        self.title_text = ""
        self.has_main = False
        self.has_skip = False
        self.has_nav = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "h1":
            self.h1 += 1
        if tag == "main":
            self.has_main = True
        if tag == "nav":
            self.has_nav = True
        if tag == "a":
            self.hrefs.append(a.get("href", ""))
            if a.get("href") == "#main":
                self.has_skip = True
        if tag == "img":
            self.imgs.append(a)
        if tag == "title":
            self.title = True
    def handle_endtag(self, tag):
        if tag == "title":
            self.title = False
    def handle_data(self, data):
        if self.title:
            self.title_text += data

errors: list[str] = []
for path in ASSETS:
    if not (ROOT / path).is_file():
        errors.append(f"missing asset: {path}")
for path in ROUTES:
    f = ROOT / path
    if not f.is_file():
        errors.append(f"missing page: {path}")
        continue
    html = f.read_text(encoding="utf-8")
    p = Page()
    p.feed(html)
    if p.h1 != 1:
        errors.append(f"{path}: expected one H1, got {p.h1}")
    if not p.has_main or not p.has_skip or not p.has_nav or not p.title_text.strip():
        errors.append(f"{path}: missing landmark, skip navigation or page title")
    for term in REQUIRED.get(path, []):
        if term.casefold() not in html.casefold():
            errors.append(f"{path}: required source-backed term absent: {term}")
    if path in ("about/index.html", "coaches/index.html", "founder/index.html", "our-story/index.html") or path.startswith("gyms-and-corners/") and path != "gyms-and-corners/index.html":
        if "placeholder" in html.lower():
            errors.append(f"{path}: stale placeholder copy")
    for im in p.imgs:
        if not im.get("alt"):
            errors.append(f"{path}: image missing alt text")
    for href in p.hrefs:
        u = urlsplit(href)
        if u.scheme in ("mailto", "tel") or u.netloc or not u.path.startswith("/"):
            continue
        rel = u.path.lstrip("/")
        target = ROOT / rel
        if not target.is_file():
            target = target / "index.html"
        if not target.is_file():
            errors.append(f"{path}: broken internal destination: {href}")
sitemap_path = ROOT / "sitemap.xml"
if sitemap_path.is_file():
    sitemap = sitemap_path.read_text(encoding="utf-8")
    for path in ROUTES:
        url = "https://futurechampsgym.org/" + ("" if path == "index.html" else path.removesuffix("index.html"))
        if f"<loc>{url}</loc>" not in sitemap:
            errors.append(f"sitemap.xml: missing page entry: {url}")
else:
    errors.append("missing sitemap.xml")
if errors:
    print("EDITORIAL CHECK FAIL:", *errors, sep="\n - ")
    sys.exit(1)
print(f"EDITORIAL CHECK PASS: {len(ROUTES)} routes; shared assets, headings, landmarks, internal links and editorial terms.")
print("NOT verified: visual rendering, external URL live status, media rights, font layout, keyboard audit, subject/founder approvals.")
