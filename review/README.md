# Future Champs — Review Room (permanent demo workflow)

## One-click review link
Protected Vercel branch preview (do NOT merge to production):
https://future-champs-gym-git-design-gyms-edito-f737ee-the-pauli-effect.vercel.app/review/

Vercel project: `future-champs-gym`; branch: `design/gyms-editorial-partner-first-2026-10-13`; Vercel preview is protected by the project's SSO setting. Reviewers must be authorized in Vercel and signed in to Google Drive with access to the individual video.

## Real media storage
Owner-controlled Drive folder: https://drive.google.com/drive/folders/1JwYnNXRZg0u1oVpjINoqzVBpgpwyeFqf

Five MP4 masters are stored there. No base64 blobs, videos, or token URLs are committed to GitHub. The page uses Google Drive's own `/file/d/{file-id}/preview` player and offers a direct file-opening link if an iframe is blocked. **This is a review convenience**, not the public site's mobile streaming architecture.

## Change one demo (no deployment scripts, no new service)
1. Create a new MP4 video master (H.264/AAC, `+faststart`) and upload into the dedicated review Drive folder.
2. Preserve the old master; do not overwrite approved cut files.
3. Add a unique versioned `id`, title, aspect ratio and exact Drive file ID to `review/catalog.json`. Move obsolete cuts down the list or remove the catalog entry, never delete the master without explicit approval.
4. The existing Vercel Git connection builds the PR branch preview. Run `python3 scripts/check-editorial.py`, `bash scripts/build-preview.sh` and `node scripts/browser-review.cjs` in CI; verify the 14 routes × 4 widths and the actual embedded player on signed-in browsers.
5. Send the stable `/review/?clip=<id>` link. Reviewers click the selected cut. No ZIP downloads needed.
6. Obtain creative approval before changing public site's manifest; private review and customer/public release are distinct.

## Privacy, limits and gotchas
- Uploaded masters currently have owner-only access; do not assert all invitees can view.
- Protected Vercel preview can show an SSO login to authorized reviewers. This is expected, not a broken deployment.
- Chrome/Safari third-party cookie restrictions may break Google Drive iframe sign-in; direct `Open video in Drive` is the guaranteed fallback for authorized users.
- This page does not promise low-latency adaptive video; Cloudflare R2/Stream mobile playback remains a separate production gate.
- Site is marked `noindex,nofollow,noarchive`. This alone does not secure it; Vercel protection and Google permissions do.
- No production merge, domain routing change, public R2 access, or source deletion.

## Rollback
Revert `review/index.html`, `review/catalog.json`, and their `build-preview.sh` inclusion in the draft branch. Drive media files are preserved. Reverting changes does not alter Vercel `main` or the `future-champs-media-dev` R2 bucket.


## v4 editorial decision: introduction must lead; source footage must play through
Owner instruction (2026-11-07): "the intro should lead the videos" and "let each one play through because you cut good footage out."

- Featured full-play screenings:
  - `nomad-full-landscape-v4`: 157.248s, 960×540, 44,688,964 bytes, Drive ID `11fUyc2zXkJo8kAfQcCnaVXFBdQnMXL2q`.
  - `nomad-full-portrait-v4`: 156.349s, 540×960, 66,302,836 bytes, Drive ID `1MD89uaR6oycyh6fOR-OOxDeOgGNl6MRG`.
- Both exports start with the Future Champs wordmark + boxing bell; then each of these **complete** source files, **without source-range trimming or footage cropping**:
  1. `cad195eb4a2d82e3e13035d4977ed7b5.mp4` (46.556s)
  2. `VID_20260912_153741642.mp4` (21.133s)
  3. `FB_VID_4213978428419504448.mp4` (86.128s)
- Native proportions are preserved with padding when necessary, not cropped to fill. The camera audio follows each original, without the previous synthetic swoosh/impact overdub. Codec normalization: H.264 24fps video / AAC stereo 48kHz; MP4 faststart.
- The other six owner-identified source files are now also listed with direct, uncut Drive preview links under `Uncut owner source`. This keeps footage reviewable without pretending the six were already included in a master compilation.
- Existing shorter v3 edits stay in the review catalog as alternate *edited* cuts. They are no longer the featured defaults.
- Originals remain untouched in Drive. The new exports are appended as versioned files in `FUTURE CHAMPS — Permanent Demo Masters`.
- Site and demo stay on the protected preview branch. No merge, production deploy, or public video publication approved.
- For a later polished documentary, first log timestamped selects **after watching the complete sources**. Do not silently shorten or omit footage again.
