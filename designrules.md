# FUTURE CHAMPS — designrules.md
Version: 1.0 | Status: design proposal, owner approval required | 2026-11-06
Applies to: the full documentary/publication site on PR #26. Does NOT replace the public Coming Soon holding page on main.

## 0. The contract
- **Mode:** Brownfield, bounded first-screen redesign; no new app, framework, or agency template.
- **Outcome:** A first-time visitor identifies Future Champs as an independent boxing publication within five seconds and reaches a gym's own website within two actions.
- **Audience:** Beginning fighters and families; gym owners and coaches; local boxing audiences and prospective members.
- **Owner of the story:** The gym and the person being documented. Future Champs receives editorial recognition, not their customers' payments or leads.
- **Evidence:** Existing source, verified public gym site, original Round 8 wordmark, approved first-party interview media only.
- **Constraints:** No invented interviews, partnerships, fighters, quotes, attendance, approvals, footage attribution, or owner biographies. Never collect sensitive youth data in public UI.
- **Commercial return:** Refer visitors to partner/featured gyms; establish an ethical repeatable media/property showcase that can attract additional independent gyms.
- **Release gate:** This file and its first-screen implementation stay on review PR #26. No merge, no deploy, no assumption that drafted interviews are published.

## 1. One design direction, not a menu of trends
**Direction:** **A boxing publication with documentary depth**. Think a disciplined, contemporary editorial cover: a strong masthead, one governing statement, tight typographic rhythm, properly credited gyms, and intentional white space. Visual ambition must come from composition and real material, not effect density.

**The site is NOT:** a boxing academy selling its own memberships; a SaaS template; a generic nonprofit; a fight-night promoter; a sports-betting page; a teaser claiming nonexistent episodes.

**Governing idea:** “Every fighter starts somewhere.” Retain exactly because it is already Future Champs language. The site should show *where* they start: real gyms and named owners.

**Collins / taste test:** One organizing idea; typography and composition that can be recognized after branding is removed; local specificity; extreme reduction; an unmistakable authorial point of view. This is a quality bar, not permission to copy another brand's layout.

**Protection list:** Round 8 SVG; site is a boxing *media* publication; gyms keep their names/URLs/intake; Glenn controls editorial approval; minors and sensitive details remain rights-gated; the Coming Soon page is production's current holding mode.

## 2. Precedence when sources conflict
1. User/Glenn approvals, `AGENTS.md`, `ICMR.yaml`, editorial rights, truthful claims.
2. This project's locked direction, actual Round 8 logo, typography tokens below, accessibility, performance, real gym destinations.
3. The Extractor reduction pass; `pauli-Uncodixfy` negative patterns; verified media ownership.
4. Context-specific recommendations from Taste Skill, Impeccable, Emil, cognitive clarity and layout systems.
5. Visual examples and motion libraries are **references only**. No automatic dependency, typeface, color, stock image, CSS framework, or ready-made animation adoption.

When two sources disagree, prefer the minimum change that improves the reader's real task, then document the tradeoff. Do not take React/Tailwind, spring effects, floating nav, bento, cream, serif, gradients, or infinite scroll as requirements because a skill uses them in an example.

## 3. Visual identity — locked for first-screen design review
- **Wordmark:** `assets/future-champs-round8.svg`. Never redraw it with a font, distort its aspect, or compete with it using a second invented logo.
- **Display:** Archivo Narrow 700, athletic/editorial rather than sports-logo imitation. Use at headlines, gym titles, editorial cover lines.
- **Text/UI:** IBM Plex Sans 400/500/600. Use for captions, credits, navigation, descriptive copy and links.
- **No fallback to Georgia as an intentional style.** Plain system sans only when web fonts are unavailable; no reliance on proprietary font files.
- **Palette:** ink `#111419`; cool paper `#F0F2F1` (not cream); signal red `#BE303D`; secondary slate `#52606A`; subtle rule `#C5CBCE`.
- Red is a rare information signal, never a wall of buttons and badges. Don't color-name editorial categories for decoration.
- Avoid sepia, desaturated fake film grain, random halftones, boxing silhouettes, gold-trimmed badges, glove icons, round-corner card farms, glass blur, violet gradients and pseudo-cinematic particles.
- Photography is documentary evidence, not page filler. If an approved gym/owner picture is absent, design a typographic composition that works without it. Never show stock people as those owners.

### First-screen measurements
| Element | Desktop >= 1100px | Tablet 700–1099px | Mobile <= 699px |
| --- | --- | --- | --- |
| Max editorial width | 1360px | fluid | fluid |
| Gutter | 48–72px | 28–36px | 18–22px |
| Primary masthead | Round 8 logo 225–265px | 200px | 158–190px |
| Cover H1 | clamp(74px, 8.1vw, 132px), 700, line-height .86–.91 | clamp(58px, 9vw, 84px) | clamp(49px, 12.4vw, 71px) |
| Feature title | clamp(28px, 3.1vw, 44px), line-height .95–1.05 | 31–38px | 28–34px |
| Cover dek | 17–19px, line-height 1.52 | 17px | 16px |
| UI and credits | 11–13px with uppercase used only for short labels | 12–13px | 12–13px |
| Section spacing | 70–108px | 56–78px | 40–58px |
| Interactive hit area | >=44px | >=44px | >=44px |

**Grid:** 12 conceptual columns. Lead statement occupies ~7–8; editorial gym index ~4–5. On mobile collapse to a single intentional reading order: logo > context > headline > explanation > gym names/owner credit > official links. Let headline break naturally at 320 CSS px; no clipped words or horizontal scrolling.

## 4. First screen / editorial contract
1. **Header:** original Round 8 wordmark plus restrained, discoverable primary navigation. Skip-link, focus and touch behavior intact.
2. **Section identification:** `THE CORNER / INDEPENDENT BOXING` as a kicker, not an invented issue number, season, award or headline byline.
3. **One H1:** “Every fighter starts somewhere.” This is the editorial premise.
4. **One specific dek:** actual gym owners and beginning fighters in Northwest Washington; clear that recorded interviews are *in preparation*, not published.
5. **Visible source-backed gym index:** Summers Boxing Club / Bret Summers; Barron's Boxing / Doc Barron and Michelle Damrill, with city and strong official outbound links. These are public directory mentions, **not** asserted partnerships or completed interviews.
6. **Primary action:** gym directory; secondary discovery comes from direct official gym links. Do not display a nonfunctional “Watch episode” button.
7. **No filler panels:** no photo pending box, imaginary testimonials, empty video players, three decorative cards, fake stats or auto-rotating carousel.
8. **Photo slots later:** when rights-cleared portraits arrive, replace a designated editorial panel without pushing the gym links out of the opening journey.

## 5. Content design + rights
- Use named people, cities, gym names, official source URLs, and direct plain-language actions. No portable “beyond the ring” boilerplate or invented impact.
- Every featured gym is visibly **independent**. Feature the gym owner's identity; do not style Future Champs as their parent company or booking agent.
- Visitor intent: learn who runs a gym -> see what it offers -> visit that business directly.
- Attribute owner names to public sources; confirm preferred spellings with owners before publishing personal interview stories.
- Don't embed unpublished Doc/Bret portraits or videos based on ambiguous filenames. Exact source, subject, place, permissions, guardian status where applicable, approved crop and caption are required.
- Interviews can only be called “Watch” or “Listen” when a working approved asset exists.
- Medical program wording must describe the gym's own stated program, without medical outcome claims.

## 6. The Extractor (mandatory, before compositional polish)
**R0 — Freeze:** record branch, commit, exact HTML/CSS, intended routes and sample screenshots.
**R1 — Remove:** generic opening phrases, duplicate mission statements, fake content tiles, unnecessary navigation actions and decorative labels.
**R2 — Human:** reinstate only specifics that earn trust: names, city, program, source, actual next action.
**R3 — Compose:** one big visual idea, one editorial reading sequence, strong title, gym index, direct links.
**R4 — Stop:** further deletion may not remove the owner, official link, rights status, accessible navigation or meaning.
For each disputed element, record ELEMENT / VERDICT / WHY / WHAT IS LOST IF REMOVED / MINIMUM REVERSIBLE ACTION.
Do not claim to detect AI authorship from visual style or copy patterns.

## 7. Composition, accessibility, and cognition
- Prefer sharp-edged publication systems, meaningful rules, baseline rhythm and uneven *editorial* proportions over identical cards.
- A heading, caption, number or accent must provide actual information or be deleted.
- Two levels of headline hierarchy on the cover: H1 and gym names. Avoid four competing “hero” sizes.
- Line length ~45–65 characters for body paragraphs; readable 16px baseline; avoid all-caps paragraphs.
- Headings and links must communicate meaning out of visual context.
- Only meaningful, semantically real buttons; navigation uses anchors. Keyboard navigation, visible focus, contrast >=4.5:1 for normal text; reduce motion correctly.
- No sticky scroll trap; no hover-only content; no auto-play audio. No heavy hero libraries for a static page.
- Show real gym links above the mobile fold *where possible without damaging readability*; judge on actual screens, not a guessed screenshot.

## 8. Motion doctrine
A cinematic opening already exists. **Do not add animation to prove the page is premium.**
- Default cover is static. Use motion only where it reveals a content relationship or eases focus change.
- CSS first for simple transitions. Keep user-reduced-motion behavior intact.
- Emil Kowalski: choose whether movement is necessary; avoid entry animation on every heading and repeated delays.
- GSAP is not a default. Only consider a pinned, reviewed version for an approved narrative transition after its value and performance are demonstrated; progressive enhancement only.
- The cinematic component repository is a pattern catalog, not a bag of effects. Most glitch, marquee, cursor-following, particle, card-stack and scroll-hijack examples are explicitly **rejected** for this page.

## 9. Sources and status (paraphrased principles; no source code or third-party skill text vendored)
The linked works are evidence and review references, not dependencies:
| Source | Extracted role | Application / caveat |
| --- | --- | --- |
| https://designspells.com/ | Interaction detail case library | Study a micro-interaction only if it reduces friction; no copied design |
| https://refero.design/ | Real interface/flow reference | Study editorial navigation and article hierarchy, not app dashboard templates |
| https://www.details.so/inspo | Curated page/section reference | Evaluate page rhythm; external paid code not imported |
| https://github.com/emilkowalski/skills | Animation and interaction critique | Motion economy and meaningful feedback |
| https://github.com/executiveusa/pauli-Uncodixfy | Negative default-pattern rules | No card farms, gradient glass, cutesy labels |
| https://github.com/executiveusa/pauli-taste-skill | Deliberate typographic/grid decisions | Use taste discipline, reject its universal React/Tailwind/premium defaults |
| https://github.com/pbakaus/impeccable | Visual audit and design vocabulary | Priority-ranked visual, usability, responsiveness critique |
| https://github.com/ayghri/i-have-adhd | Cognitive focus and action clarity | One next action, short meaningful labels; not a diagnostic claim |
| https://github.com/greensock/GSAP | Motion toolkit | NOT installed or required for this static first screen |
| https://github.com/ihlamury/design-skills | Comparative design systems | Study constraints, do not transplant another product's brand |
| https://github.com/ytx-readings/design-ui-ux | Design/UX reading bibliography | A reference catalog, **not a runnable design skill**; do not copy books |
| https://github.com/realrossmanngroup/no_ai_slop_writing_rules | Anti-formula copy editing | Reject hollow contrast, arbitrary dramatic headings and false claims |
| https://github.com/yetone/native-feel-skill | Native-app responsiveness audit | Applicability limited; this is a website, not Electron/Tauri |
| https://github.com/DietrichGebert/ponytail | Smaller reversible code changes | Reuse current static HTML/CSS; avoid dependencies |
| https://github.com/robonuggets/cinematic-site-components | Catalog of cinematic patterns | Adopt none by default; pattern license is not approval for usage |
| https://github.com/executiveusa/the-extractor | R0–R4 deletion and evidence protocol | Mandatory content/visual reduction test |

This file is an **original project-specific synthesis**. No third-party skill or component is installed, copied or vendored. Original licenses and author notices must be reviewed before any future implementation import. Linked reference websites are not licensed design assets.

## 10. Review gauntlet — stop on any critical fail
- **Identity (0–10):** looks like Future Champs with Round 8, typography, distinct editorial voice. No template feeling.
- **Truth (pass/fail):** all named gyms, owners, URLs and interview claims backed by real sources; no fabricated photo/content.
- **Reader journey (pass/fail):** visitor finds both official gym destinations in <=2 actions; no disabled pseudo-action.
- **Craft (0–10):** intentional proportions, hierarchy, contrast, editing, alignment and optical typography.
- **Mobile (pass/fail):** screenshots at 320 / 390 / 768 / 1440; no overflow, cover H1 legible, links reachable with touch and keyboard.
- **Access (pass/fail):** landmarks/H1, focus, 44px targets, readable contrast, reduced motion, meaningful anchor labels.
- **Performance (pass/fail):** no new frameworks, no render-blocking animation, no heavyweight asset without real image value.
- **Independent design review:** builder cannot certify own work. Reviewer flags ranked P0–P3; owner approves brand direction.
- **Threshold:** craft/identity overall >=8.5/10 and no critical failures. Code/source checks alone earn **READY FOR PREVIEW**, not PREVIEW VERIFIED.

## 11. Delivery and reversibility
Keep changes scoped to the homepage first-screen block and its separate CSS, and this rules file. Do not touch the existing intro code, film assets, unapproved media or the live Coming Soon page. The directory and remaining publication sections remain independently staged. Rollback = revert the first-screen HTML/CSS commits on PR #26; production unaffected. No merge/deploy until human approval and independent review.
