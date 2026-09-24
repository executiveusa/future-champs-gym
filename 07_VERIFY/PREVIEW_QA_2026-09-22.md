# Future Champs Preview QA — 2026-09-22

## Scope

Vercel project ID: `prj_64aqc4YySJFafloSfK0MSJUWDo1R`

Preview branch: `preview/media-first-visual-qa-2026-09-22`

This checklist verifies the media-first Future Champs shell before any production cutover.

## Routes

- `/`
- `/watch/`
- `/fighters/`
- `/gyms-and-corners/`
- `/blog/`
- `/about/`
- `/get-involved/`

## Visual checks

- [ ] Hero hierarchy reads clearly at desktop width.
- [ ] Hero hierarchy reads clearly at 390px mobile width.
- [ ] Navigation wraps without horizontal scrolling.
- [ ] No fundraiser-era copy appears anywhere in the seven primary routes.
- [ ] No internal product/CMS/process language appears in public copy.
- [ ] The Watch page does not expose the private 19-source working archive.
- [ ] Anchor 001 remains clearly on HOLD / coming soon.
- [ ] The Corner index and reader share the same editorial shell.
- [ ] Fighters and Gyms + Corners do not invent people, records, affiliations, or claims.
- [ ] Get Involved clearly states that public submissions are not open.
- [ ] Skip links and visible keyboard focus work.
- [ ] No broken internal links.
- [ ] No mobile overflow.
- [ ] No youth footage or approval-gated media is published.

## Release rule

Preview verification does not authorize publication of youth media. Production cutover remains separate and must preserve rollback to the current live Hostinger site.

## Private path checks

These must return 404 in the Vercel preview:

- `/00_CONTEXT/PROJECT_STATE.md`
- `/00_CONTEXT/VIDEO_CATALOG.md`
- `/00_CONTEXT/VIDEO_DRIVE_INTAKE_2026-09-16.md`
- `/content-studio/anchor-001/PRODUCTION_RECORD.md`
- `/wiki/AGENT_LOG.md`

The Vercel output directory must contain public site files only.


## Final cinematic hero — 2026-09-23

Exact hero branch: `feature/final-hero-round8-2026-09-23`

Locked sequence:
1. Seattle, Washington — 2026 establishing shot
2. black + three-strike boxing bell
3. controlled sparring
4. hard knockdown
5. charged look
6. realistic glove/forearm-assisted pickup
7. fade to black
8. Muhammad Ali quote
9. isolated heavy-bag impact
10. FUTURE CHAMPS Round 8 title on bell
11. fade to black
12. pulsing ENTER
13. ENTER reveals interactive site

Boundaries:
- no production cutover
- no youth archive footage
- no music or narration
- generated boxing remains atmospheric, not documentary evidence
- skip intro retained
- reduced-motion behavior retained
