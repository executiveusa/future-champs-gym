# Future Champs — StageShow audit and design-plan upgrade

**Date:** 2026-11-07  
**Mode:** Brownfield design research and specification; **no site or media runtime change in this slice**.  
**Target:** Future Champs editorial publication, mobile Watch interface, authenticated /review demo hub, and Future Champs boxing-bell video identity.  
**Measurable outcome:** Reframe the next smallest design slice around a true-to-source video and an accessible, intentional review screen; 14 site routes × 4 widths plus media-specific sign-in and playback proof.  
**Constraints:** Existing static website/Vercel, owner-controlled Drive footage, private review access, draft PR #26, no new public claims, no new frontend runtime, no merge/publish.  
**Required proof:** upstream source/commit and license readback; current repo diff; preview frames at 390 and 1440; tests and independent critic; real authorized-mobile video playback is a separate gate.  
**Commercial value:** An impressive, reliable documentary demo for potential gyms/sponsors and a reusable MACS-produced proof piece, without diverting toward another software platform.  
**Classification:** USE (design and film-review method); **do not SELL StageShow as a product**. No new workstream. Replaces the planned generic bento/cursor-demo embellishment and the unstructured static screenshot-only design review. 

## 1. Audited source and scope

- Original: https://github.com/benjitaylor/skills/tree/main/stageshow
- Upstream `main` commit inspected: `299140fafd08df55a9c234e610c3f64af3f45531` (2026-11-05).
- Read: `SKILL.md`, `README.md`, `package.json`, `LICENSE`, `NOTICE.md`; `references/craft.md`, `framing.md`, `motion.md`, `rehearse.md`, `verify.md`, `review.md`, `bento.md`; reviewed `scripts/film.mjs` and `scripts/browser.mjs` source.
- Metadata inconsistency: `SKILL.md` identifies **1.1.1**, but package manifest identifies **0.1.0**; pin an audited commit, not either version label.
- License: upstream source is MIT; retain copyright and license if code is copied. NOTICE explicitly excludes certain third-party app artwork from its MIT grant. Do not copy product marks, app icons or photos blindly.
- Runtime: React 18+, Vite/TypeScript playground, local browser capture through Playwright/Chrome; Node 20.19+. Some resources are designed for local development. This audit is **static source review**, not execution of upstream tests or a security guarantee.
- **True purpose:** handcrafted *faux product-UI illustrations* and short scripted cursor walkthroughs, not live web/product automation and **not** a documentary video editor. StageShow's `a.click()` animates a fictional cursor and `a.set()` an authored scene; these do not prove the live product works.

### Direct applicability matrix

| StageShow principle (source) | Future Champs adaptation | Decision |
|---|---|---|
| One focal result, real words, deliberate hierarchy (`SKILL.md`, `craft.md`) | Hero identifies a real gym/fighter and leads straight to the actual film or official gym destination | ADOPT |
| Design at shown size, **compact 358px is a redesign** (`SKILL.md`, `framing.md`) | Mobile Watch and Review Room use a one-column **video-first** layout, not a scaled desktop dashboard | ADOPT |
| Crop filler; never crop the action/payoff (`framing.md`) | Documentary video is **never physically cropped to hide a punch or participant**; use aspect-ratio-preserving fit + letterbox as needed. Crop only decoration around a video thumbnail | ADOPT with documentary constraint |
| Meaningful 3–5 beats, visible cause, stable payoff (`motion.md`) | For a **UI explainer only**, show `choose a film → load → watch → mark moment → copy review note` in 10–16 s; cursor stands for an authored illustration, never a real browser test | ADOPT conditionally |
| Poster is first-class, works as still/reduced motion (`rehearse.md`) | Every film has a real still/poster from owner footage. No fake boxers or generated documentary stills | ADOPT |
| Film at wide + 390, state captures, `--gate` and independent fresh-eye review (`rehearse.md`, `verify.md`, `review.md`) | Add evidence-driven frame review alongside current Chromium 14-route×4-viewport suite; actual playback checks remain separate | ADOPT method |
| Bento: one hero, contrasting content kinds, one visual lead (`bento.md`) | Optional editorial strip: one large actual film still, two quiet supporting factual items; **no boxed grid of mini player screens** | OPTIONAL |
| Copy `kit/`, React playground, Stage/Act and CSS parts (`SKILL.md`) | Static Future Champs does not need another rendering library. Only use in an isolated future illustration experiment once a justified demo exists | DEFER |
| Product-demo cursor animation and fictional UI | Never put faux customer behavior, fighter stats or claimed production playback on the public documentary website | REJECT for public proof |
| Copy app logos/studies intact | Trademark and source license are separate; use only Future Champs SVG and real cleared media | REJECT |

## 2. Updated design thesis

**The page is the publication. The real boxer and real gym are the subject. The film is the payoff. The browser's video controls are not a theater prop.**

Visual identity:
- Brand shows **FUTURE CHAMPS** only. Source-of-truth outlined vector: `assets/future-champs-wordmark.svg`. Retire former-wordmark paths from new plans and new UI. Do not type a look-alike.
- Existing editorial palette: charcoal `#111419`, cool white `#F0F2F1`, signal red `#BE303D`; typography Archivo Narrow + IBM Plex Sans, as already used by the site.
- Real boxing photography from authorized sources, full source clips, real owner/gym credits; avoid fabricated documentary scenes, fake posters or athlete biographies.
- Do not add slabs, gradients, arbitrary corner strokes, fake phone frames, decorative focus rings, boxed playlists or unnecessary animation just because a StageShow example illustrates one.

### Cover / homepage
- One meaningful above-fold choice: **Every fighter starts somewhere** + actual gym access. Preserve direct official outbound links.
- No faux dashboard or mouse-guided hero replacing the actual publication cover. A documentary poster can be the focal surface **only once approved footage and a verified player endpoint exist**.
- The primary target remains the gym discovery story, not an animated demo of software.

### Watch
- Video-led editorial hierarchy: one verified, owner-approved film as hero (clear poster and play affordance), real title/caption/venue/date/source rights, followed by source-backed collection.
- Mobile 390px: show poster/action/title first; second-order metadata comes after the player. No sideways overflowing carousels. A 358px StageShow compact demo is an **interaction-design analogue**, not a required toolkit.
- Poster loads immediately, media only on user play. `playsinline`, accessible controls, subtitles/transcript if warranted, aspect-ratio containment, playback fallback. Do not present pending footage as playable.
- **Future Champs identity intro with one boxing bell leads every finished video**, but the raw source archive is never altered by the brand sting. The currently featured `v4` full-play masters contain 3 complete source clips after intro (NOT all nine); keep that fact visible.

### Review Room / one-click demo page
- Retain the working **real** Drive video player + fallback; don't swap it for Stageshow faux windows. User authentication limitations are explicit.
- One dominant actual player. Catalog secondary. Chapter/timecode keep/trim UI supports choosing footage without losing scenes. Avoid dense multi-card grid; show real words on the current asset, compact metadata elsewhere.
- The **4-beat optional explanatory demo** is a separate *marked illustration*, never a substitute for the real 16-item review catalog or a promise that copy/submit saved anything remotely:
  1. Pick the actual Nomad full-play v4 item;
  2. Player loads owner-authorized Drive file (do not fake as a runtime proof);
  3. Four chapter landmarks show complete original clip boundaries;
  4. KEEP note copies to clipboard (explicitly not saved to server).
- Responsive review at <=390px: player first, then film title, then catalog, then chapter notes; a desktop two-column grid must not compress everything into unreadable phone-sized controls. Preserve keyboard focus and status announcements.
- A copy/notes operation must not claim persistence. Do not enable unauthenticated view/share by default.

## 3. Storyboard — documentary versus product-demo distinction

**A. Real video (public-facing only after media release)**

`Future Champs wordmark + boxing bell (2–3.5s) → uninterrupted, true-to-source footage → captions/credits with verified facts → documentary end`.

No StageShow fake interface inserted into the film; no artificial cursor; don't cut away from good boxing action to make room for brand effects. Human chooses trims via v4 timecoded review.

**B. Optional site capability illustration, held as experiment**

A short (10–16s) authored 3–5 beat *UI demonstration* of how the review workflow operates. Poster payoff: the **actual film selection and note** visible, few words, real product labels and authentic dimensions. Clearly label `Interface illustration`; never imply that a script actually uploaded, edited, reviewed or published a clip.

This is a **parked** capability until the review site is independently accepted. No React/Vite or copied third-party kit is now necessary.

## 4. Smallest prioritized implementation slices

| Order | Slice | Measurable acceptance | Release |
|---|---|---|---|
| 0 | Fix source-of-truth brand language | No forbidden prior-identity wording in new design plan; active mark resolves to `assets/future-champs-wordmark.svg`; previous legal/audit records may preserve historical mentions | This docs-only PR |
| 1 | Review Room visual reduction **without playback changes** | At 390 and 1440: one dominant player, readable real film name, chapter section visible for v4, no overflow or inaccessible button; source links stay reachable | Draft PR only |
| 2 | True mobile film experience | On signed-in iOS Safari + Android Chrome: select v4, playback starts, pause/resume works, full clip can seek/scrub, sound and boxing bell verified by ear, orientation safe | Protected preview; no public release |
| 3 | Reusable real poster and video template | Poster from approved actual frames, 16:9 + 9:16 design, captions and poster-first state; no extra React runtime | Draft PR only |
| 4 | Optional authored capability motion | If a customer need emerges: StageShow gold `hero-demo` or `phone-touch` fork in an isolated directory; 3–5 meaningful beats, poster, source pinned, MIT notice, no upstream brand assets | Separate isolated PR; not required for current site |

### Not in scope / deliberately omitted
- No cloning 70+ demos, React conversion of static site, Vite in production, generic dashboard, AI-fabricated content, StageShow dependency added to client runtime, Cloudflare billing change, public Drive sharing, production merge or new outreach.
- StageShow's 10–16s UI loop **must not** dictate the duration of genuine boxing footage; the owner requested full-play source screening.

## 5. Visual and media verification protocol

1. **Baseline:** record current PR SHA, protected preview alias and existing screenshot artifact; preserve original sources and last-good code.
2. **Still-frame test:** capture exact page at 390 and 1440 alongside an appropriate StageShow gold *only for composition critique*. Confirm one focus and visual hierarchy. Never substitute the example's fake data/content.
3. **State test:** initial poster, selected item, iframe loaded, login-blocked fallback, notes invalid, notes copied, no chapters for a single source, reduced motion, keyboard focus; capture screenshots. Test `320/390/768/1440` to preserve existing build gate.
4. **Motion test:** only if optional authored UI demo exists, run `node scripts/film.mjs ... --gate`, 390 width, and `--states --gate`. Store contact sheets and a local `REHEARSAL.md`. A green gate doesn't substitute for actually looking at frames.
5. **Real media proof:** actual authorized browser must play the original v4 masters end to end, check bell timing and camera audio, and verify all source links. A Google Drive iframe URL or HTTP 200 isn't evidence of sound, complete playthrough or subject rights.
6. **Independent critic:** another reviewer receives the brief, exact render screenshots and Frame/Verify rubric, not builder justification; priorities framing → hierarchy → motion → polish. Assign fixes only after the independent review.
7. **Release controls:** `PR #26` remains draft. Production publish is owner-gated with rollback; no merge on docs-only audit.

## 6. Audit risks, licenses and rollback

- **Scope mismatch:** Stageshow does not fix video audio, buffering, unreliable owner-authenticated Drive iframe or cinematic editing; those remain real-media engineering tasks.
- **License:** MIT source with notice; third-party artwork separately licensed. **No StageShow code, assets or dependencies are being vendored** in this slice, so no upstream code license need be added to shipped runtime.
- **Metadata vs implementation:** `SKILL.md` says version 1.1.1 vs `package.json` 0.1.0; use commit SHA as evidence.
- **Security:** local browser-capture scripts launch a browser; don't run upstream scripts with production sessions, tokens or private user media by default. This is a source audit, not a pentest.
- **Accessibility:** no autostart audio, avoid hover-only controls, honor reduced motion, labels/contrast and real touch target dimensions.
- **Rollback:** revert this document and its designrules addendum. Current player, original Drive videos, former short reviews and `main` remain untouched.

## 7. Decision

**USE StageShow's design/rehearsal method; PARK its runtime kit.** Upgrade our actual review and documentary visual system first. Next bounded build: **Review Room mobile editorial layout refinement**, with same Drive IDs and 14×4 smoke suite. Keep one-click real demos operational and footage uncut until owner timecode selection.
