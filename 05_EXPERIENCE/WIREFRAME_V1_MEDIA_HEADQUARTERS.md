# Wireframe V1 — Media Headquarters

**Principle:** one strong story, one obvious action, no empty media theater.

## Desktop

```text
TOP BAR
Future Champs | Watch | Fighters | Gyms & Corners | Stories | About | Get involved

HERO / ABOVE THE FOLD
[approved vertical Short or still]     EVERY FIGHTER STARTS SOMEWHERE.
                                       Stories from the work before the spotlight.
                                       [Watch the latest] [Submit a story]

PROOF STRIP
Youth + beginning fighters | Real gyms and corners | Short video first

FEATURED STORY
[large card: anchor story]             [supporting card: latest Short]
                                       [supporting card: latest Short]

SHORTS RAIL
START IN THE CORNER
[5 vertical cards with duration, subject, captioned title]
                                       [See all Shorts]

THE CORNER
People who train, coach, support, and keep showing up.
[fighter] [coach] [gym] [corner person]

RINGSIDE
[story card] [story card] [story card]

MACS DIGITAL MEDIA
Production and distribution partner. [See the system]

ONE NEXT ACTION
Have a story, gym, or partnership? [Get involved]

FOOTER
Status / contact / YouTube / privacy / rights note
```

## Mobile order

1. Compact header and menu.
2. Hero video or approved still.
3. One-line governing idea.
4. `Watch the latest`.
5. Featured story.
6. Shorts rail, horizontal scroll.
7. The Corner people rail.
8. Ringside stories.
9. Get involved form.
10. Footer and status notes.

## `/watch`

- Page title: `Watch the work.`
- Filter: `All / Shorts / Conversations / Training / Events`.
- Sort: newest first; editorially featured items may pin.
- Card fields: image, format, duration, title, subject, caption indicator.
- Empty state: explain what is being prepared; never show fake cards.

## `/get-involved`

Three routes only:

- `Submit a fighter or gym`
- `Partner or sponsor`
- `Follow updates`

Forms collect adult contact details and story context only. Youth-sensitive details stay out of the public form.

## Interaction rules

- No autoplay with sound.
- Captions are on by default where available.
- Every card is keyboard reachable.
- Preserve the exact source title and approval status in internal metadata.
- Use a still/hold state when the video is not cleared.
