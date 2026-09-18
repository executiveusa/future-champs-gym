# Future Champs Project State

**As of:** 2026-09-18  
**Mode:** Brownfield reframing  
**Classification:** SELL + USE  
**Release state:** READY FOR PREVIEW candidate; production publication not verified  
**Primary domain:** FutureChampsGym.org

## Current objective

Build Future Champs into a first-class boxing media property focused on **young and beginning fighters** and the people in their corner.

Governing idea:

> **Every fighter starts somewhere. Future Champs documents the work before the spotlight.**

The public site is media-first. The physical gym, broad nonprofit programming, food fundraiser, heritage center, and other legacy concepts are not the active public product unless separately re-approved.

## Quality bar

- **Content/boxing media bar:** Punch By Punch — media legibility, clip density, people-led storytelling.
- **Brand/design bar:** COLLINS — governing idea, reduction, typography, composition, distinctive point of view.
- **Owner gauntlet:** Future Champs youth/beginning-fighter focus + anti-slop + mobile + accessibility + proof discipline.

Release floor follows Loop Engineering: overall >= 8.5; no broken controls, mobile overflow, unverified claims, or missing rollback.

## Three active workstreams

1. **Revenue offer — MACS Digital Media × Future Champs zero-to-launch case study**
   - Positioning, brand system, website, media packaging, Shorts, distribution, and operating workflow.
   - Demonstrates the sellable MACS Digital Media transformation workflow.

2. **Shared platform — Future Champs media headquarters**
   - Home, Watch, Fighters, Gyms + Corners, The Corner, About, Get Involved.
   - Static public shell now supports approved media replacement without redesign.
   - GitHub remains source of truth.

3. **Bounded experiment — Anchor 001**
   - First beginning-fighter source selected from the canonical 19-video Drive archive.
   - Produce transcript, captions, clean-master decision, cover frame, anchor cut, and three Shorts.
   - Publication remains owner/editorial approval-gated.

## Public information architecture

- `/` — point of view and primary entry
- `/watch/` — 19-slot video archive and filtering
- `/fighters/` — fighter profiles
- `/gyms-and-corners/` — coaches, mentors, gyms, programs
- `/blog/` — The Corner editorial desk
- `/about/` — positioning and operating boundaries
- `/get-involved/` — controlled intake explanation; no public youth-data form yet

## Content lanes

- Start Here
- In Their Corner
- The Work
- Ringside
- Gives Back only when a real approved community initiative exists

## Source of truth

- Video masters: canonical Google Drive folder recorded in `ICMR.yaml`
- Code/specifications: GitHub
- Public article data: existing Supabase read path
- Approvals: owner-controlled approval state

Raw private video is not stored in the repository.

## Current build evidence

- Drive inventory re-verified at **19 MP4 files**.
- Anchor 001 selected and production record created.
- Shared editorial CSS and mobile navigation created.
- Public routes added for Fighters, Gyms + Corners, About, and Get Involved.
- Watch archive placeholders and lane filtering implemented.
- Sitemap expanded for full media architecture.
- Instinct → FirstMate → Hermes autonomous site loop defined with independent-review and publication gates.
- PR #11 is the active build line and is ahead of `main`.

## Remaining blockers before production publication

- independent substantive review of the current PR;
- runtime/mobile/browser verification of the exact revision;
- verified deployment target and rollback path;
- Anchor 001 transcript/captions;
- clean-master/watermark decision;
- subject identity and guardian status where applicable;
- Glenn editorial approval;
- stable approved public video destination.

## Non-negotiable public rules

- No stock or AI-generated fighters presented as real Future Champs participants.
- No invented fighter names, biographies, records, affiliations, quotes, sponsors, or outcomes.
- No sensitive youth intake through public forms.
- No publication of youth footage without required approval.
- No new framework or dashboard until the manual editorial path is proven.
- Builders do not approve themselves.

## Single next action

Complete independent review and runtime preview verification of PR #11, repair any decisive gaps, then merge the media shell. After the shell is merged, finish Anchor 001 and replace the first placeholder with approved media.
