# Future Champs Operations Backend

This directory is private operations infrastructure. It is separate from the public static frontend.

## Boundary

```text
Public frontend
  └─ published content, watch pages, public contact route

Operations backend
  ├─ Hermes runtime
  ├─ Firstmate supervisor and isolated worktrees
  ├─ Riverside production records
  ├─ approval queue
  └─ Instinct adapter (signed intents only)
```

The browser never receives Hermes credentials, Drive credentials, Riverside credentials, Firstmate state, or company-management permissions.

## Role

- **Glenn:** owner and final approver for publishing, company actions, public claims, and youth-sensitive material.
- **Instinct:** conversational/device entry point. It sends an approved intent to the backend; it does not receive unrestricted shell access.
- **Hermes:** task execution, memory, tools, and scheduled operations.
- **Firstmate:** supervisor pattern for routing work to isolated agents/worktrees and returning reports or PRs.
- **MACS Digital Media:** production, editing, packaging, distribution, and partner operations.

## Content flow

`Google Drive source → Riverside edit/transcript → human review → Hermes prepares metadata → Glenn approves → public frontend / YouTube`

## Current status

- Architecture: specified.
- Hermes source: verified upstream.
- Firstmate source: verified upstream.
- Instinct public API: not verified; Instinct is currently described publicly as private-access. The adapter is therefore a signed-intent contract, not a claimed live Instinct connection.
- Production install: pending Hostinger/VPS access and runtime credentials.

## Install

Run `scripts/install-hermes.sh` on the private backend host. It keeps the Hermes checkout and virtual environment outside the public frontend. Never run it from a public web root.

See `CONTEXT.md`, `INSTINCT_ENTRY.md`, `instinct.manifest.yaml`, `config/firstmate.routes.yaml`, and `plugins/instinct-hermes-firstmate/README.md`.

Point Instinct at `INSTINCT_ENTRY.md` first. The private webhook endpoint and secret are intentionally left as deployment-time configuration.
