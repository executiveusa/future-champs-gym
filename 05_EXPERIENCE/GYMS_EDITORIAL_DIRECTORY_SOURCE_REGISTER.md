# Future Champs — Gyms + Corners editorial source register
Date: 2026-10-13
State: READY FOR PREVIEW (source-level only); not approved for publication.
Scope: `gyms-and-corners/index.html` and `assets/future-champs-directory.css`.

## Intent and commercial boundaries
- Future Champs is a media platform for the people and places behind boxing. It does **not** operate or represent these gyms.
- Give gym owners and coaches primary name recognition and a prominent website link; send prospective members directly to the gym.
- Do not claim that a gym is a contracted partner, that Future Champs interviewed its owner, or that youth/media permissions are granted.
- No affiliate links, copied images, scraped photos or client data collection. Do not imply Parkinson's fitness exercises cure or treat Parkinson's disease.
- Future Champs interviews, stills, photography, quotes, and behind-the-scenes edits require owner, subject and guardian approval where applicable.

## Public source records (verified from official sites; recheck before publication)

### Summers Boxing Club
- Homepage: https://summersboxingclub.com/
- Parkinson's boxing program: https://summersboxingclub.com/boxing-for-parkinsons-arlington-washington
- Primary coach named on program page: **Bret Summers**. (Main site alternates Brett; verify preferred spelling directly before using in a recorded profile or signed agreement.)
- Address as stated: 14215 101st Ave NE, Arlington WA 98223.
- Phone as stated: 425-760-0742.
- Programs: general boxing training plus an explicitly non-contact Parkinson's fitness program.
- Accuracy boundary: The American Parkinson Disease Association listed the offering as virtual-only in April 2024. Do not promise in-person Parkinson's sessions without direct confirmation.
- Interview: NOT VERIFIED. Partnership: NOT VERIFIED. Permission to use gym imagery: NOT VERIFIED.
- Official photographs: NOT mirrored or embedded, rights not verified.

### Barron's Boxing
- Homepage: https://www.barronsboxingllc.com/
- Owner story: https://www.barronsboxingllc.com/about-1
- Owner and coach named: **Sylvester “Doc” Barron**.
- Co-owner named on homepage: **Michelle Damrill**.
- Address as stated: 468 Fashion Way, Burlington WA 98233.
- Phone as stated: 360-996-1317.
- Programs listed: junior/adult training, open gym and private sessions.
- Interview: NOT VERIFIED. Partnership: NOT VERIFIED. Permission to use gym imagery: NOT VERIFIED.
- Official photographs: NOT mirrored or embedded, rights not verified.

## Approved use of Google Drive material
Canonical Future Champs source archive: https://drive.google.com/drive/folders/1G3MUd8wWztOefuJex32AFnMe46IyJpR_
- 19 MP4s previously confirmed in the folder.
- Drive image searches for "boxing" and "Barron" did not surface reliably identified approved photos; "Summers" returned an unrelated-looking generically named PNG, not verified as gym media.
- No image in that archive may be attributed to either gym without subject/location verification, ownership/guardian rights checks, and editorial approval.
- Do not copy other gyms' website images without permission.

## Design contract — Direction 02
- Round 8 SVG remains the brand wordmark.
- Archivo Narrow 700 for condensed journalism-style display.
- IBM Plex Sans 400 / 600 for body, actions and factual detail.
- Charcoal #111419, cool paper #F0F2F1, signal red #BE303D; no legacy cream/Georgia default.
- Typography and large ruled editorial features rather than rounded cards, generic gradients or AI sports imagery.
- Must remain accessible on narrow mobile and usable without web-font delivery.

## Extractor pass
R0: Generic "Gym name / Coach name / Mentor name", placeholder media grids, an implied gym walkthrough.
R1 remove: unnamed cards, fabricated profile and gallery previews, nonexistent filming claims, duplicate CTA paths.
R2 preserve: owners' names, official websites, city, gym offerings, accurate publication status.
R3: gym-led title -> owner and mission -> prominent official outbound link -> concise facts.
R4 stop: removing the external gym link, owner, address, or distinction between directory listing and interview would harm the visitor.

## QA still required before merge
- Actual browser rendering at 1440 / 768 / 390 / 320 widths and keyboard-only navigation.
- Screen-reader accessibility, tap targets, focus indication, contrast.
- Independently verify owner spellings and official website URLs prior to publishing.
- Check current gym availability and factual changes; do not mirror schedules/prices.
- Obtain independent design and editorial review; no builder self-approval.
- Confirm that draft PR updates do not incur automatic Vercel previews.
- Merge once after human review. No production release triggered by this batch.
