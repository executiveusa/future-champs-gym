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


## Implemented proof-of-concept, 2026-11-06
Owner confirmed the Nomad clips' project usage rights in chat and instructed moving ahead. This replaces the earlier *owner rights not confirmed* assumption for the nine nominated source files; it does **not** independently establish every depicted person's identity or the provenance of background soundtrack.

Produced local review artifact only (not in Git or Cloudflare):
- `nomad-ringside-review-720p.mp4`, 20.96s, 1280×720, H.264/24fps, silent, 1,827,437 bytes.
- Source edit decisions: `VID_20260912_153741642.mp4` at 00:05–00:11 and 00:14–00:19, `FB_VID_4213978428419504448.mp4` at 00:52–00:58. Short original title/end cards; no broadcast footage.
- Poster `nomad-poster.jpg`; offline `preview.html`; SHA256 final MP4: `d9353bb2427b8d7c1173cf49039db4a0b94ab07a7db7d4838143fe33145268f8`.
- Existing PR #26 page now has a responsive player, fetched JSON manifest and a manual-play gate. `assets/nomad-video.json` has `publish:false` and null URLs until delivery is proven. The actual MP4 is intentionally not in Git.
- Playback source attaches only when an approved HTTPS URL is present and the viewer presses Play. No preload, autoplay, third-party embed, or live publication.

### Upload handoff, no secret sharing
1. Open the connected Cloudflare dashboard → R2 → `future-champs-media-dev`. Do not use unrelated buckets.
2. Upload the 1.8 MB finished `nomad-ringside-review-720p.mp4` as `nomad/v1/roughcut-720.mp4` and `nomad-poster.jpg` as `nomad/v1/poster.jpg` into the *private* bucket.
3. Verify both object sizes and content types: video/mp4 and image/jpeg. Compare the local MP4 SHA256 before upload.
4. To make a web-playable URL, configure a **separately reviewed delivery hostname or access endpoint** that supports range reads; leave it inaccessible to the public until allowed. A private bucket object key alone is not a URL.
5. When the real HTTPS video/poster URL and HTTP byte range behavior are verified, change the manifest `playbackUrl`/`posterUrl` and `rightsStatus:"approved"`/`publish:true` in a review branch, run Chromium, and verify actual iOS and Android playback before any public deploy. Do not expose Cloudflare tokens or signed URLs in source control.

The connected Cloudflare management tools support bucket provisioning but have no secure binary handoff from this local file to the object-put API in this chat session. No upload can be claimed. Rollback: revert only player/manifest code and optionally delete the empty dedicated staging bucket after readback; original footage remains intact in Drive.
