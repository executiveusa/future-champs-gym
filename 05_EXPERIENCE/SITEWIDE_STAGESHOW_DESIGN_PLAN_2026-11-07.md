# Future Champs — site-wide StageShow-informed redesign plan
Date: 2026-11-07 | Status: SPECIFIED, NOT IMPLEMENTED | Draft PR #26 only

## Mode and measurable target
Brownfield: improve the existing static Future Champs documentary publication, not create a second website. Outcome: 14 public/internal editorial routes appear as one coherent brand, with working real links, 320/390/768/1440 responsive QA, independently reviewed screenshots, and no unapproved media release. Commercial value: credible source-backed gym discovery and a repeatable MACS media-site case study. Replace Review Room polish as the first design priority; park simulated UI demos.

## What was inspected
- index.html + assets/future-champs-home-direction02.css: strongest existing first-screen editorial cover and actual three-gym directory. Preserve governing headline Every fighter starts somewhere and the official Summers, Barron's and Nomad URLs. Homepage also loads three remote cinematic MP4s, two sound effects and an Enter/Skip intro; the eager autoplay and its provenance need a separate review.
- assets/future-champs.css: old site-wide cream #f1ece4, Georgia serif, blurred sticky nav, media-placeholder shapes. Later pages still inherit this legacy style. The new publication direction uses cool paper #F0F2F1, charcoal #111419 and red #BE303D with Archivo Narrow and IBM Plex Sans.
- /watch/: honest unpublished state but almost entirely text and no real public film player. Do not invent published media or embed owner-only Drive files to make it seem done.
- /fighters/: fictional-numbered Fighter 01/02/03 profile placeholders and dummy biographies. Convert to truthful editorial pending state without inventing young people.
- /blog/: live read-only article fetch exists, but its serif feature and placeholder media conflict with current brand. Preserve existing API and link escaping; do not add a CMS.
- /gyms-and-corners/ and Nomad profile: useful sources and direct gym links, newer editorial styles, but obsolete former-logo asset references and a held player. Preserve factual evidence and official links.
- /review/: owner-authenticated, real Google Drive footage, full-source chapter controls and copyable timecode notes. It is a production review tool, not the public landing page.

## What we learned from StageShow
Source: benjitaylor/skills/stageshow at upstream SHA 299140fafd08df55a9c234e610c3f64af3f45531. Read SKILL.md and craft, framing, motion, rehearsal, verify and review guidance. Adopt: one clear focal subject and meaningful action, actual-content-first framing, mobile compositions designed separately rather than desktop scaled down, one meaningful motion story, poster-first/reduced-motion fallback, and frame-by-frame review at shipped widths. Not applicable: its faux UI cursor is not documentary footage; its React kit and Vite playground are not needed in the static site's runtime. No code or third-party artwork copied.

## Visual standard across ALL public pages
- Only FUTURE CHAMPS branding with actual assets/future-champs-wordmark.svg (not the retired wordmark path).
- Headlines: Archivo Narrow; body/UI: IBM Plex Sans; ink #111419, paper #F0F2F1, red #BE303D sparingly, slate #52606A.
- Documentary not boxing-event hype: actual approved images and footage, verified coaches/gyms/credits, no fake fighters, fake photo placeholders or unearned statistics.
- One masthead/nav pattern across all routes: skip link, visible focus, touch targets >=44px, no horizontally overflowing nav, official gym sites directly accessible.
- Video: actual approved poster and clip, manual mobile inline play, captions when approved, meaningful static fallback. Future Champs intro + one boxing bell at beginning of published videos. The website's separate intro must not demand autoplay sound or obstruct reading; review upstream video provenance before replacing.
- No creative cut may eliminate original boxing action without owner-selected timecodes; the v4 private full-play masters and nine originals remain preserved.

## Route-by-route priority and measurable acceptance
| Priority | Route | Design decision | Proof |
|---|---|---|---|
| P0 | Homepage / | Preserve the editorial cover, three real gym roster and direct destinations. Reduce the six-scene entry friction; prove optional motion and quiet static entry, after media review. | First-time visitor can identify purpose within 5s; three official gym links reachable in <=2 actions; no forced sound or incorrect claims. |
| P0 | Shared navigation | Make all routes use canonical Future Champs mark and coherent active/compact nav. Fix obsolete public image paths. | 14 routes × 4 viewport checks, 0 broken assets or mobile overflow; keyboard controls work. |
| P1 | Watch / | Poster-led cinematic desk, one real release-ready hero only after approval, truthful pending state otherwise. No faux videos. | Real authorized mobile Safari + Android start/seek/pause/caption/audio proof before public release. |
| P1 | Gyms + Corners / | Editorial directory: real gym owner, location, source attribution and outbound site link. Support one visual hero, not duplicated cards. | All three gym destinations and identities verifiably accurate; mobile owner/CTA visible. |
| P1 | Nomad and other gym profiles | Consistent profile hierarchy, documentary image only with rights, provenance, and real media gate. | Source-backed claims, real links, approved playback when connected. |
| P2 | Fighters / | Remove dummy Fighter 01/02/03 cards and placeholder people; leave dignified truthful editorial intake explanation. | No fictional profile or youth data form. |
| P2 | The Corner /blog/ | Harmonize typography and featured-story layout, keep published data API, support honest empty state. | Real slug links and no fake featured media; source data remains escaped and safe. |
| P3 | Coaches, Founder, Our Story, About, Get Involved | Apply shared masthead, type and direct next-step pattern, preserve approval/identity rules. | Truthful claims, no unsupported family/founder associations, navigation consistency. |
| Later | Private Review Room /review/ | Preserve real media and copyable notes; further visual polish after P0/P1. | Correct 16-item catalog, actual owner sign-in and playback validation separately. |

## Ordered implementation slices
0. Baseline: save current PR SHA, rendered 390/1440 shots, direct destinations, CI and current intro state. Label external generated film assets until visually/rights verified.
1. Slice A (FIRST): exact canonical wordmark on active public routes, shared nav styling and mobile editorial typography; leave intro/films unchanged. Add test that active public pages never reference retired mark. Review real screenshots.
2. Slice B: homepage entry film / sound / performance cleanup. No non-consensual sound, no preloading full videos ahead of readable content, reduced-motion and Skip always work; only edit after verifying the third-party film sources.
3. Slice C: Watch and Nomad media template with real posters and permission-backed public delivery, not a fake demo player.
4. Slice D: honest Fighters empty state and real The Corner editorial layout while preserving its live data read path.
5. Slice E: supporting editorial pages. Do not let secondary polish delay the first media story.

## Review/quality gates
Every slice: source baseline -> isolated reversible code diff -> static/build checks -> existing 14-route x 4-size Chromium suite -> exact screenshot critique at 390/1440 -> keyboard/reduced motion/contrast -> independent reviewer -> owner approval -> preview verification. StageShow film.mjs --gate applies ONLY to an authored StageShow UI illustration, not actual filmed boxers or site video playback. Do not claim a real video plays because a Drive iframe exists.

## Safety, release and rollback
PR #26 remains draft; no merge or public media publication. Preserve owner-controlled original Drive footage, private Vercel review access, R2 isolation, and current production Coming Soon. Revert each bounded design commit to roll back without affecting media. Do not install StageShow/React/Vite or copy trademarked study artwork. No public site change executed by this plan-only commit.

## Decision
Make the PUBLIC SITE the lead workstream: header/wordmark + homepage first, Watch and gym profiles second, Fighters/The Corner third, Review Room polish last. Use StageShow as critique method, not a product dependency.