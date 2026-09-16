# Backend Context

## Purpose

Private operations layer for Future Champs. It prepares content and company work for Glenn; it does not expose credentials or publish without approval.

## Entry

Start with `../ICMR.yaml`, then `INSTINCT_ENTRY.md`, then the current route in `config/firstmate.routes.yaml`.

## Inputs

- Canonical footage: the Google Drive folder in `../ICMR.yaml`.
- Public content: `../blog/` and `../index.html`.
- Runtime sources: Hermes and Firstmate, installed later under `.runtime/`.

## Outputs

- Task envelopes: `state/inbox/`
- Agent reports: `state/reports/`
- Human approvals: `state/approvals/`
- Published content only after Glenn approves.

## Boundary

Instinct may submit signed intent. Firstmate routes. Hermes executes bounded preparation work. No adapter may publish, delete, merge, spend, or change infrastructure.

## Proof

Validate YAML, run the adapter smoke test, inspect the generated envelope, and record the result before calling a task complete.

## Human gate

Glenn approves public copy, youth-sensitive material, partner claims, external communication, publishing, and company operations.

## Do not load

Do not place secrets, tokens, youth-sensitive data, raw footage, or provider credentials in this repository.
