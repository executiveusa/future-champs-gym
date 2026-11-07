# Future Champs — review gate and footage intake
Date: 2026-11-06
Branch: `design/gyms-editorial-partner-first-2026-10-13`
PR: https://github.com/executiveusa/future-champs-gym/pull/26
Mode: DRAFT / NO MERGE / NO DEPLOY

## Deliverables and correction
- Added three gym-specific routes; a coaches index; separate Our Story and Founder pages.
- Added shared editorial styling, Round 8 mark, and changed the About route from an anonymous placeholder to an editorial gateway.
- Updated directory, opening cover and preview build to include the three gyms.
- Aligned Nomad's homepage link with other gyms: direct official outbound website link, not only an internal profile.
- Added a dependency-free `scripts/check-editorial.py` and a read-only GitHub Actions workflow `.github/workflows/editorial-checks.yml`. Both are **unverified until CI completes**. The workflow builds local preview output but does not upload or deploy it.

## Factual source evidence checked 2026-11-06
| Page/person | Supporting source | Caution |
| --- | --- | --- |
| Bret Summers | https://snocosports.org/project/bret-summers/ and https://summersboxingclub.com/about-boxing-coach-brett-summers | Coach's public given-name spelling alternates Bret/Brett; do not infer medical outcomes from Parkinson's fitness claims |
| Sylvester “Doc” Barron / Michelle Damrill | https://www.barronsboxingllc.com/ and https://www.barronsboxingllc.com/about-1 | These are public owner claims, not proof of documentary release or partnership |
| Manny Dunham | https://nomadboxingclub.com/about/ | Nomad reports establishment in 2019, 27 years boxing; verify individual coach permissions |
| Nomad coaching team | https://nomadboxingclub.com/about/ | Gato, Isaiah, Matt have published bios; Billie, David, George have names/photos but no full bios |
| Glenn Singleton and Muhammad Ali | https://www.heraldguide.com/wp-content/uploads/2026/01/HeraldGuide_20260108.pdf | Published archival claims support the Ali relationship, not independently a family relationship to Glen Jr. The external spelling is **Glenn**; user refers to **Glen**. Founder needs to approve naming, family links, memorial tone and assets |

## The Extractor R0–R4
- **R0 inspect:** original About page had generic `Name`, `Short biography placeholder`, and arbitrary empty imagery; directory contained only two gyms.
- **R1 remove:** generic About placeholders and unearned identity/film claims.
- **R2 human specificity:** named coaches, owner credits, cities, primary gym websites and source disclosures.
- **R3 compose:** one consistent documentary page family (ink + cool paper + signal red; Archivo Narrow / IBM Plex Sans; structured H1 / body / outbound links).
- **R4 stop:** retained source references, contact/rights route, independent business status and permissions messaging rather than removing legally salient truth.

## Source-level gates
1. **Route integrity:** nine targeted routes in `scripts/check-editorial.py`; read-back confirms new files exist; actual CI pass **PENDING**.
2. **Build:** `scripts/build-preview.sh` updated to include new routes; execution in a checkout **PENDING**.
3. **Real browser renders:** 320, 390, 768, 1440 widths **PENDING**. Do not claim screenshots from branch. Browser connector was unavailable outside its originating browser context; no preview deploy authorized.
4. **Keyboard / screen reader / contrast:** **PENDING** independent review. Static structure contains landmarks/skip links on new pages, not a replacement for testing.
5. **External link integrity:** public source pages reviewed, but automated crawl and click-through in exact rendered build **PENDING**.
6. **Visual taste and typography:** Direction 02 implemented; craft score **UNRATED** without exact rendering and independent reviewer.
7. **Rights:** **BLOCKED** pending footage triage and subject/location/guardian permissions.
8. **Founder approval:** **BLOCKED** pending Glen Jr.'s confirmation; no invented firsthand quote.
9. **Production / merge:** **NOT AUTHORIZED**. Main and Coming Soon remain untouched. Current PR metadata `mergeable=false` (also requires reconciling diverged main holding page).

## Original media inventory
Read-only Google Drive folder: https://drive.google.com/drive/folders/1G3MUd8wWztOefuJex32AFnMe46IyJpR_
Source listing contains **19 MP4 files**, but filenames and file metadata do not establish which gym, coach, location or minor is depicted. All **UNASSIGNED; NOT APPROVED FOR PUBLICATION**.

| File | Gym/subject | Rights / editorial status |
| --- | --- | --- |
| `7e9334fa233135d3bcc115f01d3e93a5.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260913_052146_481.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_153741642.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_124302410.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260913_052218_615.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_101459339.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `FB_VID_447384573257519331.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_123038488.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260913_021749_700.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_155315753.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_124211984.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_155147366.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_123201506.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `cad195eb4a2d82e3e13035d4977ed7b5.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `watermark-2026-09-13-051702948.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_1424150842.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_1241142992.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `VID_20260912_1213031802.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |
| `FB_VID_4213978428419504448.mp4` | UNIDENTIFIED | HOLD — visual review, owner/guardian approval |

**Clip-by-clip acceptance checklist:** visual thumbnail/still, exact source file ID, film date, location, identities of everyone identifiable, original recording author, license/release, guardian consent if a minor is present, allowed context/crop, captions and alt text, editorial sign-off. Keep any uncertain clip offline.

## Gate decision
**READY FOR CONTINUED DRAFT REVIEW; NOT READY TO MERGE.** No production changes or deployment were performed under this gate. The owner must review actual mobile/desktop renders and approve story/subject rights. Revert PR branch changes to roll back; do not revert main.


## Follow-up release check — 2026-11-06 07:xx Mexico City
- **Read-only review of current draft branch**: PR #26 still draft, unmerged, nonmergeable. No push to `main` was made.
- **13/13 route source audits pass**: checked `<main>`, `<nav>`, skip-to-content, one H1, page title and image alt attributes for Home, About, Coaches, Founder, Our Story, Gym Directory, three gym profiles, Watch, Fighters, Blog, Get Involved.
- **Sitemap**: fixed six missing entries for Coaches, Founder, Our Story and all three gym profiles. Readback confirms all 13 audited routes now present; sitemap includes one separate blog article URL (14 entries total).
- **Internal links**: regex-level audit parsed 170 anchors on the 13 page files: 135 internal, 35 external / other; no empty href; 2 blog hrefs contain intentional JavaScript interpolation for post slug and are not static dead links.
- **Review automation**: enlarged `scripts/check-editorial.py` to audit all 13 page routes + sitemap; preserved no-placeholder checks on new editorial pages (legacy Watch/Fighters/Blog intentionally retain media placeholders pending permissions). Workflow is a no-deploy source/build check. GitHub connector had not reported a CI run for the latest draft commits; **CI cannot be counted as passing**.
- **Exact visual verification**: blocked. Connected browser requires an originating connected browser context; the local container cannot resolve github.com to clone the private branch. Do not substitute a mockup for exact-render screenshots.
- **External live links / sources**: not counted as audited by static regex checks. Validate in a real browser before release.
- **Rights & founder gate**: unchanged, BLOCKED pending clearances. None of 19 archived MP4s assigned without viewing and source proof.
- **Production**: no merge, no deployment, no preview service created.


## Follow-up — Actual screenshot review and mobile correction, 2026-11-06
Commit evaluated: `89874b7c7e95bc5782172d6684b879d6e273838d`.
GitHub workflow: https://github.com/executiveusa/future-champs-gym/actions/runs/42322614904
Visual evidence: GitHub Actions artifact `future-champs-browser-evidence` (artifact ID `13554150116`), with 390px and 1440px captures of Coaches, Our Story, Founder, Gym Directory and Nomad.

**Verified:**
- Read actual screenshots from previous green run `42316934184` and current run `42322614904`.
- 13 routes × 4 viewport widths = 52 visual-smoke checks. Current run completed successfully with **zero reported failures**.
- Static/editorial checks and local preview build both successful.
- Mobile gym-directory header reduced from seven to five routes, using consistent editorial navigation.
- Promoted official gym links ahead of internal profiles for Summers and Barron's; Nomad already used the official gym as primary action.
- Increased mobile body and footnote readability; secondary links and directory navigation have >=44px minimum interaction height.
- Original hero and gym page types remain intact; no content, family or footage approvals inferred.

**Visual critique:** Magazine hierarchy and charcoal / cool-white palette render consistently. Mobile directory remains intentionally long-form; photographs, individual coach interviews and documentary media have not been invented or backfilled from stock content. Screen captures do NOT prove consent or a working user-submission flow. Visual inspection by the builder is **not independent review**.

**Remaining stop conditions:** independent design/accessibility reviewer, verified identity and rights for 19 archived MP4s (including minors), Glen Singleton Jr.'s approval of family history and Muhammad Ali lineage wording, external-link freshness before publication, explicit human release authorization, and reconciliation against the live Coming Soon branch. No merge/deploy was performed.
