# Future Champs

Future Champs is a youth boxing, mentorship, and community-development initiative based in Northwest Washington.

The immediate launch is deliberately small and verifiable:

1. **A Taste of Nawlins fundraiser** — a focused food-sales campaign used to raise startup funds.
2. **The First Five pilot** — an initial eight-week boxing and mentorship program for five young people.
3. **Future Champs digital headquarters** — one website for the fundraiser, program information, RSVP and interest forms, sponsor leads, updates, and later impact reporting.

## Current project status

**Mode:** Greenfield  
**Classification:** SELL + USE  
**Status:** Discovery and wireframing  
**Primary domain:** `FutureChampsGym.org`  

The permanent gym, museum, scholarship program, large grant campaign, and broad regional expansion remain long-term vision. They are not represented as existing operations.

## First measurable outcome

Launch a working fundraiser page that:

- explains the Future Champs mission clearly;
- presents a limited, confirmed food offer;
- accepts RSVP or preorder interest;
- stores submissions securely;
- works correctly on mobile;
- gives the founder a usable administrative view or export;
- generates the first verified customer or supporter response.

## Brand architecture

- **Master brand:** Future Champs
- **Descriptor:** Youth Boxing & Mentorship
- **Core line:** Building Champions In and Out of the Ring
- **Pilot:** The First Five
- **Fundraiser:** A Taste of Nawlins
- **Legacy initiative:** The TOJO Legacy Project
- **Long-term facility:** Future Champs Gym & Heritage Center

Future Champs and A Taste of Nawlins should have related but separate identities. Youth-facing materials must remain separate from cannabis imagery or messaging, even when a fundraiser location is near a licensed dispensary.

## Proposed stack

This stack is proposed for the first build and is not yet considered locked until the initial architecture review is complete.

- **Framework:** Next.js with the App Router
- **Language:** TypeScript
- **UI:** Tailwind CSS with a small, controlled component layer
- **Hosting and previews:** Vercel
- **Database:** Supabase Postgres
- **Authentication:** Supabase Auth for administrators only when the dashboard is introduced
- **Public forms:** Server-validated Next.js actions or route handlers writing to Supabase
- **Security:** Row Level Security on all public-schema tables; no service-role key exposed to browser code
- **Analytics:** Privacy-conscious web analytics, selected before production
- **Payments:** Deferred until the exact sales model, processor, refund policy, and fiscal-sponsorship arrangement are confirmed

A Vercel/Next.js/Supabase starter can accelerate setup, but this repository should adopt only the pieces required for the verified first slice. Authentication, dashboards, commerce, and AI features should not be added merely because a template contains them.

## Initial routes

```text
/
/nawlins
/first-five
/about
/get-involved
/updates
/admin            # later, protected
```

The first public release may be limited to `/` and `/nawlins` until the fundraiser details are confirmed.

## Initial data scope

The first database should support only the data needed for launch:

- fundraiser events;
- RSVP or preorder interest;
- menu items;
- customer contact and pickup details;
- sponsor, volunteer, parent, and community-partner interest;
- newsletter consent;
- published updates.

Public forms must not collect participant medical records, school records, behavior notes, emergency records, or other sensitive youth information. Participant enrollment requires a separate protected workflow.

## Build laws

- Inspect before changing.
- Reuse before adding.
- Specify before building.
- Build one verifiable slice at a time.
- Never publish an unconfirmed event, address, menu, price, partnership, tax claim, or program outcome.
- Never expose secrets.
- Builders do not approve their own work.
- Production claims require tested evidence and a rollback path.

## Phase 1 — Wireframe and offer lock

Before visual production, confirm:

- exact fundraiser format;
- legal operating location and permission;
- sale date and hours;
- limited menu and prices;
- maximum order capacity;
- payment or reservation model;
- fulfillment and refund rules;
- fundraising target and use of proceeds;
- approved logo direction;
- primary call to action.

### Planned wireframe sections

1. Hero and primary action
2. Fundraiser offer
3. Menu or coming-soon menu state
4. How purchases support the First Five
5. Founder and mission story
6. Pickup/event details
7. RSVP or preorder form
8. Sponsor and volunteer pathway
9. Trust, allergen, privacy, and status disclosures
10. Footer and official contact information

## Definition of done for the first slice

The first slice is complete only when:

- the page is deployed to a preview environment;
- mobile and desktop layouts are reviewed;
- a real form submission succeeds;
- the submission appears correctly in Supabase;
- anonymous users cannot read stored submissions;
- validation and error states work;
- no unconfirmed public claims appear;
- rollback to the previous deployment is available;
- a separate reviewer approves release.

## Repository ownership

This repository is the source of truth for the Future Champs website and fundraiser application. It should not be merged into Asc3nd or another client project.
