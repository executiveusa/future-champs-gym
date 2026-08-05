# Product Requirements Document — Future Champs V1

**Version:** 1.0 founder-review draft  
**Date:** 2026-08-04  
**Owner:** Future Champs / Glenn Singleton Jr.  
**Delivery:** Private founder review tonight  
**Public release:** Not approved

## 1. Product summary

Future Champs V1 is a mobile-first public website that introduces an early-stage youth boxing and mentorship initiative through its first practical fundraising engine, A Taste of Nawlins, and its first bounded program concept, The First Five.

The product must help a visitor answer five questions immediately:

1. What is Future Champs?
2. What is happening now?
3. How does the food fundraiser support the youth program?
4. How can I participate?
5. What is confirmed versus still being developed?

## 2. Problem

Future Champs currently has strong vision, multiple visual directions, several future-program ideas, and no single coherent public system. Without focus, visitors may confuse aspiration with current operations, fail to understand the first offer, or distrust the organization because the brand appears inconsistent or overpromising.

## 3. Product outcome

Create a founder-approved V1 that:

- makes the fundraiser-to-pilot model self-evident;
- captures qualified preorder and supporter interest;
- presents Glenn credibly;
- separates current facts from future vision;
- gives the team one brand and content direction;
- identifies all missing facts before public release.

## 4. Primary user

A resident, worker, parent, local business owner, or supporter between Mount Vernon and Seattle—especially Arlington, Marysville, Everett, and nearby communities—who encounters Future Champs through social media, a flyer, a referral, or an in-person food pop-up.

## 5. User job statement

When I hear about Future Champs or A Taste of Nawlins, I need to quickly understand what it is, whether the offer is real and relevant to me, how my participation helps, and what I should do next, so I can support it without uncertainty.

## 6. Primary action

**Join the next menu drop / preorder interest list.**

This is an interest action, not a completed paid order, until operational details are confirmed.

## 7. Secondary actions

- Learn how the fundraiser supports The First Five
- Express parent/guardian interest
- Express sponsor interest
- Volunteer or coach interest
- Join equipment-support updates
- Follow verified project updates

## 8. Scope for tonight

### Required

- Homepage
- A Taste of Nawlins menu/fundraiser section
- The First Five section
- Founder story section
- Current stage and future vision section
- Get involved pathways
- Transparency/milestone section
- Interest forms or clearly staged form placeholders
- Mobile navigation
- Privacy and terms placeholders
- Founding-stage disclaimer

### Optional only if already working cleanly

- Separate `/nawlins` route
- Separate `/first-five` route
- Separate `/about` route
- Public updates feed

### Out of scope tonight

- Live payments
- DoorDash or Uber Eats integration
- Amazon wish-list integration
- Admin dashboard
- Participant enrollment
- Youth medical or emergency data
- Fiscal-sponsor donation processing
- Confirmed production deployment
- Final logo system
- Merchandise store
- Large program-management system

## 9. Core product principles

- Strategy before styling
- Content before containers
- Distinction before decoration
- Self-evident before experimental
- Proof before claims
- Systems before isolated screens
- One primary action per page
- No builder self-approval

## 10. Information architecture

### Route: `/`

**Purpose:** Explain the complete founding model and capture primary interest.

**Primary question:** What is Future Champs doing now, and how can I support it?

**Primary action:** Join the next menu drop.

**Required sections:**

1. Header
2. Founding-stage hero
3. A Taste of Nawlins offer
4. Menu status
5. How purchases support The First Five
6. The First Five overview
7. Glenn's founder story
8. Current reality vs future vision
9. Get involved
10. Verified milestone tracker
11. Final signup
12. Footer and disclaimers

### Route: `/nawlins`

**Purpose:** Explain the portable fundraiser and collect menu demand.

**Primary action:** Join preorder interest.

**Required content:**

- What it is
- How portable menu drops work
- Current menu status
- Menu items with confirmed/pending labels
- Date/location status
- Order process
- Use of proceeds
- Food, allergen, pickup, refund, and permit notices

### Route: `/first-five`

**Purpose:** Explain the pilot responsibly.

**Primary action:** Parent/guardian or supporter interest.

**Required content:**

- Why five
- Proposed duration
- Boxing fundamentals
- Fitness, discipline, mentorship
- Parent-supported participation
- Safety and consent
- What remains unconfirmed
- Evidence plan

### Route: `/about`

**Purpose:** Build founder credibility without exaggeration.

**Primary action:** Follow or support the work.

### Route: `/get-involved`

**Purpose:** Route each adult to the correct interest form.

### Route: `/updates`

**Purpose:** Show public progress using evidence and status.

## 11. Content requirements

### Hero

**Eyebrow:** FOUNDING STAGE — NORTHWEST WASHINGTON

**Working headline:** Feed the movement. Build the first five.

**Working support copy:** A Taste of Nawlins is the first community fundraising engine for Future Champs, an early-stage youth boxing and mentorship initiative being built in Northwest Washington.

**Primary CTA:** Join the Next Menu Drop

**Secondary CTA:** See How the First Five Works

**Status note:** Menu, pricing, date, kitchen, location, and pickup details remain pending founder and operating approval.

### A Taste of Nawlins

Must communicate:

- portable Southern food concept;
- scheduled pop-ups and menu drops;
- no permanent-location claim;
- follow online for the next confirmed date and place;
- every menu item has a status;
- preorder interest is not payment.

### First Five

Must communicate:

- five participants;
- controlled pilot;
- proposed eight-week structure;
- boxing, fitness, discipline, and mentorship;
- parent/guardian involvement;
- safety and facility details pending approval;
- evidence and learning before expansion.

### Founder story

Must use only Glenn-approved facts. The site may say he is building from boxing, family, service, and community experience only after he confirms exact wording.

### Current reality / future vision

Current reality and future vision must be visually separated.

## 12. Menu model

Each menu item needs:

- name;
- short description;
- dietary/allergen notes when approved;
- status: testing, confirmed, sold out, coming next;
- price only when approved;
- availability date only when approved.

Initial placeholders:

- Red beans and rice
- Protein option — pending
- Vegetarian option — pending
- Side — pending
- Dessert — pending

## 13. Form requirements

### Menu-interest form

Fields:

- Adult full name
- Email
- Phone optional
- City or ZIP optional
- Party size optional
- Interest: preorder, attend, sponsor, volunteer
- Preferred update channel
- Consent to updates, unchecked by default

Confirmation must state:

- this is an interest submission;
- it is not a paid order;
- confirmed menu, date, price, and pickup details will follow.

### Community-interest form

Fields:

- Interest type
- Adult name
- Email
- Phone optional
- Organization optional
- Message
- Consent to updates

Must not collect:

- child name;
- school;
- age;
- medical data;
- behavior details;
- emergency contacts.

## 14. Interaction requirements

- Mobile menu opens and closes reliably.
- Primary CTA remains consistent across pages.
- Buttons state what happens next.
- Forms show visible labels.
- Errors appear next to the relevant field.
- Success states explain the next step.
- No hover-only information.
- No scroll hijacking.
- Reduced-motion preference is respected.

## 15. Visual requirements

### Governing creative idea

**Built in Public:** a disciplined editorial record of a real community program being assembled one verified step at a time.

### Palette

- Future Red: #B31F2B
- Deep Red: #75151D
- Championship Black: #111111
- Pure White: #FFFFFF
- Warm Bone: #F3EEE7
- Steel Gray: #6D7378

### Typography

- Editorial serif for major statements
- Neutral modern sans serif for body and interface
- Condensed face only for utility labels

Final fonts require licensing, loading, mobile, and language review.

### Prohibited visual patterns

- gradients;
- glassmorphism;
- glowing borders;
- generic centered hero;
- default bento grids;
- repeated rounded cards;
- stock AI portraits;
- generic boxing-fight posters;
- unrelated luxury serif styling;
- fake metrics;
- fake testimonials;
- excessive motion.

## 16. Responsive requirements

### 390px mobile acceptance

- no horizontal overflow;
- hero headline fully visible;
- primary CTA reachable and unobstructed;
- navigation usable by touch and keyboard;
- form labels and controls remain readable;
- content order is intentional;
- images preserve approved focal points.

### Tablet and desktop

- grid expands without excessive empty space;
- line lengths remain controlled;
- CTAs do not become visually secondary;
- milestone and current/future sections remain understandable.

## 17. Accessibility requirements

- semantic headings;
- keyboard navigation;
- visible focus;
- sufficient color contrast;
- 44px minimum touch targets;
- labels always visible;
- errors announced;
- alt text for meaningful imagery;
- reduced motion;
- no color-only status communication.

## 18. Data and privacy requirements

For tonight, the site may use working local/integrated form storage only if it is already functional and private. Public launch requires confirmed persistent storage, server-side validation, and no public read access.

No secrets may be exposed in client code.

No sensitive youth data may be stored in the public-interest system.

## 19. Analytics events for public release

- `menu_interest_started`
- `menu_interest_submitted`
- `first_five_viewed`
- `parent_interest_submitted`
- `sponsor_interest_submitted`
- `volunteer_interest_submitted`
- `equipment_support_clicked`

Tonight's private review does not require analytics to be live.

## 20. Founder-review test script

Ask Glenn to complete these tasks without coaching:

1. Explain what Future Champs is.
2. Explain what A Taste of Nawlins does.
3. Show how food supports the program.
4. Find the current menu.
5. Find what is still pending.
6. Find the First Five program.
7. Find how a sponsor can help.
8. Identify anything inaccurate.
9. Identify what he wants visitors to remember.
10. Select or reject the visual direction.

Record:

- hesitations;
- misunderstood language;
- missing facts;
- emotional reactions;
- incorrect assumptions;
- exact corrections.

## 21. Acceptance criteria for tonight

The private V1 passes when:

- Glenn understands the strategy without a long explanation;
- the fundraiser, pilot, and master brand feel coherent;
- all unknowns are visibly marked;
- no unverified claim is presented as fact;
- mobile navigation and primary CTA work;
- the menu is easy to locate;
- the First Five is easy to understand;
- the design direction feels disciplined and recognizable;
- the team leaves with an approved correction list.

## 22. Public-release criteria

Public release requires:

- overall independent-review score of at least 8.5/10;
- usability, visual design, originality, accessibility at least 8.5;
- primary conversion flow at least 9.0;
- zero critical failures;
- zero mobile overflow;
- zero broken controls;
- zero unverified claims;
- tested form persistence;
- privacy review;
- rollback documented;
- owner approval recorded.

## 23. Dependencies and approvals

Human approval required for:

- founder facts;
- event/menu/drop model;
- prices;
- dates;
- kitchen and location;
- permits;
- order cap;
- fulfillment;
- refunds;
- allergens;
- First Five age range and schedule;
- facility and coach language;
- fiscal sponsor and donation language;
- images and testimonials;
- social accounts;
- public release.

## 24. Rollback

Until public release, rollback means returning to the last approved preview or unpublishing the draft. After production launch, deployment and database rollback procedures must be documented and tested before changes are approved.
