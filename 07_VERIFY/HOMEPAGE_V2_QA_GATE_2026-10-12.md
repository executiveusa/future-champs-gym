# Future Champs — Homepage V2 quality gate (pre-deployment)

**Review mode:** source-level accessibility and responsive audit; NOT a rendered-browser signoff.
**Branch:** `chore/taste-skill-governed-2026-10-10`
**Production:** unchanged; no merge or manual deploy authorized.
**Primary standards:** `AGENTS.md`, `ICMR.yaml`, Future Champs documentary identity and youth-publication gates.
**Review artifact:** `07_VERIFY/reviews/homepage-v2-review.html`

## Findings addressed on this branch

1. **Intro and reduced motion (P1):** opening sequence previously always ran on first visit. It now immediately exposes the content if `prefers-reduced-motion: reduce` or network Save-Data/constrained connection is detected, without changing the underlying cinematic footage.
2. **Keyboard focus during intro (P1):** the visually covered page could still be tabbed through. Set the site shell `inert` while intro is active and remove `inert` on entrance; continue using `aria-hidden` until site becomes visible.
3. **Storage errors (P2):** sessionStorage get/set uses guarded access so storage restrictions do not block the site.
4. **Small viewport heading overflow (P2):** reduce minimum hero headline size below 700 px; give very narrow widths safer long-word wrapping for headings and slot labels.
5. **Editorial truth (earlier commits):** unapproved episodes, guests, stories and contact form placeholders replaced by explicit held states. The Corner's existing Supabase feed is retained.

## Verification completed

- Examined the exact code from the PR branch.
- Confirmed source edits were committed only on the PR branch; production not modified.
- Static inspection confirms the reduced-motion fast path is before autoplay `warmVideo()` and `runIntro()`.
- Static inspection confirms shell accessibility state transitions include both `aria-hidden` and `inert`.
- No new dependencies, media URLs, secrets, fake subject identities, or new data-collection forms introduced.

## Browser tests REQUIRED before release (not yet completed)

- Desktop at 1440 × 900: intro, skip, enter, keyboard order, scroll lock cleared, hero and section hierarchy.
- Tablet at 768 × 1024: two-column grids, primary navigation, responsive media slots.
- Mobile at 390 × 844 and 320 × 568: headline wrapping, zero horizontal page overflow, CTA touch targets, navigation visible, article card spacing.
- Keyboard-only: Tab cannot reach underlying page during intro; skip and enter work; focused content available afterward.
- Reduced motion: `prefers-reduced-motion: reduce` results in immediate site visibility and no auto-playing film; content is accessible.
- Save-Data / slow connection: video preload does not block page access; immediate site visibility.
- Normal first visit: video timeline plays, Skip remains operable at every stage, entry reveals content.
- Return visit and sessionStorage blocked: reliable access without exceptions.
- Screen readers: intro buttons named; no inaccessible focus into hidden scenes or shell; reading order matches page hierarchy.
- Validate navigational links and every CTA at runtime; no claims of playable episodes while media held.
- Verify approved video, permissions, captions, photo provenance before swapping any media.
- Run automated accessibility checker and keyboard manual pass in a local browser.
- Independently review fixes and unresolved CodeRabbit comments before merge.

## Explicitly deferred

- Cinematic fight-sequence realism (weak-looking jab / knockout), pending separate editorial review.
- Approval-gated youth imagery, identity and source media integration.
- Verified submission route / consented contact process.
- Final design polish and complete human visual review.
- Vercel dashboard deployment settings verification.

## Release and cost guard

Netlify automatic builds were disabled per the human browser-agent report. Vercel preview builds were disabled through the connected API, but the Vercel dashboard remains unverified. Do not merge or deploy to test. Conduct local/static checks and group release changes; perform one controlled build only after approval.
