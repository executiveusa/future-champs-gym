# Publication cover review — 2026-11-06

**Branch:** `design/gyms-editorial-partner-first-2026-10-13`
**Pull request:** #26 — draft; NO merge or deployment.
**Status:** READY FOR PREVIEW. This is not a browser-verified or independently approved release.

## Contract
Mode: brownfield, one bounded section.
Target: the first screen after the Future Champs intro, not the live Coming Soon holding page.
Outcome: give independent gyms visible owner attribution and direct outbound destinations in a recognizable boxing publication cover.
Commercial goal: real discovery and site visits for gym owners, not Future Champs intake.
Constraints: preserve intro, keep original media held, retain all full-site sections beneath opening for later review.

## Extractor R0 to R4
| Original (R0) | Reduction / change | R4 result |
| --- | --- | --- |
| Generic “Behind the gyms. Beside the fighters.” supporting line | Remove repeated slogan without concrete content | One governing H1 retained: “Every fighter starts somewhere.” |
| Three-part “OWNERS / COACHES / FIGHTERS” proof panel | Remove abstract claim panel that proves nothing | Actual gym names, named owners, cities, direct official links |
| Homepage nav: 5 links + “Suggest a story” CTA | Remove competing CTA; footer retains About and submissions | Four task-led links: Gyms, The Corner, Watch, Fighters |
| Placeholder-driven hero affordance | No invented documentary image, episode or film | Deliberate typographic cover with genuine directory facts |
| Warm-cream/Georgia inherited stylesheet defaults | Override for publication cover and scoped sections | Direction 02 charcoal/cool-white; Archivo Narrow + IBM Plex Sans |

**What cannot be removed:** Round 8 brand, plain explanation, name and owner of each gym, source-backed official links, status of unpublished interviews, accessible navigation.

## Static readback (GitHub on branch)
16/16 targeted source assertions passed:
- `designrules.md` exists and `AGENTS.md` references it.
- Homepage has exactly one H1 and Round 8 wordmark path.
- Summers and Barron's official outbound links, names and owners are present.
- First screen does not embed an unapproved photo, fake episode or additional script.
- Intro retained unchanged in first-screen patch.
- Existing lower homepage sections and directory still present.
- New page-specific stylesheet contains 1150/940/699/360px breakpoints and reduced-motion rule.
- No new dependency or GSAP script.
- Primary CTA goes to the gym directory.
- Homepage masthead reduced from six actions to four destinations.

## Local design study
A **separate simplified layout study**, not the exact branch render, used Chromium with system fallback type and a textual logo stand-in. It measured:
| Viewport | Document scroll width | Horizontal overflow |
| --- | --- | --- |
| 1440 | 1440 | none |
| 768 | 768 | none |
| 390 | 390 | none |
| 320 | 320 | none |

The real Round 8 SVG, Google Fonts, branch-level interactive controls and cinematic film playback have NOT been visually inspected by this study. Do not call the production site or PR preview verified from this evidence.

## Required independent review (gate)
1. Render exact PR SHA with Archivo Narrow and IBM Plex Sans loaded; compare optical spacing and heading clipping at 320/390/768/1440.
2. Keyboard tab, focus state, skip intro and primary navigation with the actual film transition.
3. Check external links and gym owner spellings with primary official source/owner.
4. Confirm no accidental publication of Doc/Bret images, videos or unapproved minors.
5. Test the publication route build separately from the live Coming Soon build.
6. Review remaining lower homepage sections for inherited wireframe slop before full-site release.

## Release coordination risk
PR #26 predates `main`'s cinematic Coming Soon release. A future merge must explicitly preserve the temporary public holding page until the full publication is approved; do not blindly merge/auto-deploy this PR into production.

## Rollback / next action
All changes are isolated to PR #26. Restore previous `index.html` hero and `assets/future-champs-home-direction02.css` using Git revert on this branch, retaining the governance document if accepted.
Next: owner visual review of the cover and type at desktop/mobile; then individually redesign The Corner and remaining sections with approved source media.
