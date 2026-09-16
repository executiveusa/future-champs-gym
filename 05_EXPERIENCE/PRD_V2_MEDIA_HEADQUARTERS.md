# PRD — Future Champs Media Headquarters

**Version:** 2.0 working draft  
**Date:** 2026-09-16  
**Status:** Ready for human review  
**Owner:** Future Champs / MACS Digital Media

## Product outcome

Make Future Champs the clearest place to discover the work before the spotlight: youth and beginning-fighter boxing stories, short video, longer conversations, and the people in each fighter’s corner.

The first release must turn existing footage into a credible public media home. It is not yet a gym-management system, enrollment system, or payment product.

## Audience

- Young and beginning fighters looking for recognition and useful examples.
- Parents, coaches, gyms, and local boxing supporters.
- Partners and sponsors looking for a real, repeatable community story.

## Primary job

“Show me someone I can root for, let me watch quickly, and give me a simple way to follow or support the work.”

## First release actions

1. Watch an approved Short or episode.
2. Follow the channel / get updates.
3. Submit a fighter, gym, corner person, or partnership lead.

## Scope

### In

- Homepage media headquarters.
- `/watch` archive with Shorts and longer pieces.
- `/fighters`, `/gyms-and-corners`, `/stories`, `/about`, `/get-involved`.
- Content records with title, subject, source, status, rights, transcript, thumbnail, and public URL.
- Mobile-first video viewing and captions.
- Google Drive as private canonical working source.
- YouTube as a distribution destination, not the private master.

### Out

- Public youth enrollment or medical data.
- Live payments or fundraising claims.
- Unapproved names, ages, rankings, affiliations, outcomes, or guardian-sensitive material.
- A full interview archive before the first anchor package is approved.

## Content model

Each publishable item needs:

`id · format · title · subject · gym/corner · source_file · transcript · caption_file · thumbnail · rights_status · guardian_status · editorial_status · public_url · published_at`

Required states: `intake`, `selecting`, `edit`, `rights_review`, `approved`, `scheduled`, `published`, `hold`, `archived`.

## Launch package

From one approved source recording:

- 1 anchor story or conversation.
- 3–7 Shorts.
- 1 fighter or corner profile.
- 1 quote or still asset.
- 1 written story.
- 1 sponsor/community cut where appropriate.

The first package is a test of the system, not a promise of volume.

## Acceptance criteria

- A visitor can understand the point of Future Champs within five seconds.
- The hero has one approved playable video or a clearly labeled “coming next” state.
- Every video card has a real destination, title, image, and status.
- Mobile video works without layout breakage.
- Captions are available for published speech-led clips.
- Rights and guardian approval are recorded before publication.
- No private Drive link or signed URL is exposed publicly.
- Every primary CTA has a working destination and a visible success/error state.
- A second reviewer can trace any published item back to its source and approval record.

## Success measures

Initial measures are operational, not vanity targets:

- 1 approved anchor package.
- 3 publishable Shorts from that package.
- 100% of published items with source and rights records.
- Time from approved source to first published Short.
- Watch starts, 3-second retention, average percentage viewed, completion, and CTA clicks.
- Qualified fighter/gym/partner submissions.

## Approval gates

Human approval is required for the governing idea, identity territory, public claims, youth likeness, first anchor package, and launch release.

See [ICMR.yaml](../ICMR.yaml), [WIREFRAME_V1_MEDIA_HEADQUARTERS.md](WIREFRAME_V1_MEDIA_HEADQUARTERS.md), and [FULL_AUDIT_AND_PLAN.md](../30_VALIDATE/FULL_AUDIT_AND_PLAN.md).
