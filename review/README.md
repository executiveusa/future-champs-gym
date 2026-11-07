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
