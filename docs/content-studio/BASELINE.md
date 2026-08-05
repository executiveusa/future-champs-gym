# The Corner Content Studio — Brownfield Baseline

Date: 2026-08-04

## Repository

- Repository: `executiveusa/future-champs-gym`
- Default branch: `main`
- Working branch: `feat/the-corner-blog`
- Current public frontend: static HTML in `index.html`
- Public blog routes added in this branch: `/blog/` and `/blog/post.html?slug=...`
- Existing data provider: shared Supabase project `botanic-creations`
- Existing Future Champs data boundary: client-prefixed `future_champs_*` tables with RLS
- Existing public deployment workflow: Hostinger Horizons / domain workflow remains externally controlled

## Existing project instructions reviewed

- `AGENTS.md`
- `03_BRAND/MASTER_PLAN.md`
- `05_EXPERIENCE/PRD_V1_TONIGHT.md`
- `design/design-principles.json`
- `wiki/PROJECT_WIKI.md`
- `index.html`

## Brownfield decision

The uploaded sovereign blog installer requires inspection, isolation, proof, and a human approval gate before adding Payload CMS, MCP, authentication, or new package dependencies. This first installation pass therefore does **not** add Payload or modify the package boundary.

The first slice is intentionally limited to:

1. a native public blog experience called **The Corner**;
2. isolated, RLS-protected Supabase content tables;
3. one owner-approved launch article;
4. draft editorial briefs that cannot be read publicly;
5. a stable path toward a later Payload + MCP content studio.

## Rollback baseline

- Production source baseline before this branch: commit containing `index.html` blob `83c33be7e5e6a3b68db59498ec4604c7df741f89`.
- Database rollback: drop `future_champs_corner_posts` and `future_champs_corner_briefs` only after exporting any approved content.
- Frontend rollback: revert the merge commit for the blog PR.

## Known constraints

- No Payload application exists yet.
- No MCP endpoint exists yet.
- No content-admin authentication exists yet.
- Hostinger publication and domain controls are not available through the current connector surface.
- The static public frontend uses a Supabase publishable key and reads only published rows permitted by RLS.
- Draft briefs and unpublished content remain inaccessible to anonymous users.

## Stop conditions preserved

The next phase must stop for owner input if:

- Glenn's founder facts conflict;
- a second CMS is introduced;
- database isolation cannot be preserved;
- an agent would need broad repository access;
- publication claims require facts not yet supplied;
- the blog would create more than three active workstreams.
