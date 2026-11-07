# Future Champs — free-first video delivery v1
Date: 2026-11-06
Mode: STAGING ONLY. Do not merge, deploy or publish original footage without a separate human release gate.

## Verified infrastructure
- Cloudflare account connection: executiveusa@gmail.com (account owner connection).
- Isolated R2 Standard bucket: `future-champs-media-dev`, created 2026-11-06 and verified via R2 List Buckets readback. Region hint WNAM; jurisdiction default.
- Existing unrelated buckets: `asc3nd-media` and `starnet-video-exports`. Do not move or modify their data.
- No public bucket access or upload enabled as part of setup.
- Original nine owner-attributed Nomad MP4 files remain in Google Drive, totaling 627,538,946 bytes. Venue/subject/rights approval still unverified.

## Cost controls / important distinction
R2 Standard includes an *account-wide* monthly allowance of 10 GB-month storage, 1M Class A operations, 10M Class B operations, and free Internet egress. Storage and operations beyond the allowance can incur charges. Account usage across all R2 buckets determines whether usage remains within the free tier; this was not verified. Cloudflare Stream is **not** free and must not be enabled without separate cost approval.

Reference: https://developers.cloudflare.com/r2/pricing/
Reference: https://developers.cloudflare.com/r2/buckets/public-buckets/

## First valuable slice (do not block editorial site on video)
1. Keep existing Vercel site deployment topology and the draft PR #26 publication redesign untouched until release approval. Do not duplicate website hosting on Workers/Pages.
2. Use the nine files only in a private source ledger; scene by scene media review, permission checks, and guardian approval where applicable are gating.
3. Once cleared for *private editing*, create a single 20–30 second rough cut from verified safe segments. Edit via existing Montage if configured; otherwise FFmpeg is the fallback, not a new editing service. Do not put raw footage in GitHub.
4. Render H.264/AAC MP4 at mobile-friendly 720p (plus optional 1080p version), compressed poster JPEG/WebP, and WebVTT captions. `-movflags +faststart` for progressive MP4.
5. Upload **only after separate approval** to private `future-champs-media-dev`, using versioned keys such as `nomad/v1/trailer-720.mp4`. Never commit API tokens, signed URLs, raw-media copies, or subject-identifying filenames that are not approved.
6. Test protected playback before creating public access. If eventually publishing through R2, use a controlled custom domain and a byte-range compatible response path, and confirm cache and content types. `r2.dev` development access is rate-limited and public; it is not a secure private preview.
7. Site playback uses a poster first, native controls, `preload="none"`, `playsinline`, caption track, aspect-ratio frame, no automatic playback, and a clear text fallback. Loading is user initiated. A future optional HLS/DASH transition should not change the page API.
8. Only `rightsStatus: "approved"` items may appear as public video. All others render a rights-held text state.

## Portable per-video manifest contract
```json
{
  "id": "nomad-trailer-v1",
  "title": "Nomad Boxing Club — Trailer",
  "posterUrl": null,
  "playbackUrl": null,
  "captionsUrl": null,
  "aspectRatio": "16:9",
  "durationSeconds": null,
  "rightsStatus": "pending",
  "venueVerified": false,
  "subjectsVerified": false
}
```

## Test gates
- Static source/build QA and existing 52-route-width Chromium checks.
- Real iOS Safari + Android Chrome seek, pause/resume, poster loading, captions and cellular throttling with approved test media.
- `Accept-Ranges`, HTTP `206 Partial Content` byte-range support and cache response validation for actual CDN route.
- Analytics, bandwidth/operations budget and opt-out/rollback documented before public exposure.

## Rollback
Delete only the dedicated empty R2 development bucket (requires verifying it contains no objects) and revert this branch's video integration commits. No production domain or deployment modifications occurred.

## Ownership / next approval
Cloudflare billing controls remain with the account owner. Human must approve identifiable footage and publication rights. Montage staging owner binding is not yet configured. Explicit approval required for public bucket access, uploads, hosted video publication and any deployment.
