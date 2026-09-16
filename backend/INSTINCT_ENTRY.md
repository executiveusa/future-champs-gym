# Instinct Entry — Future Champs

This is the handoff point for Glenn's Instinct Agent.

## Start here

1. Read `../ICMR.yaml`.
2. Read `../AGENTS.md`.
3. Read `CONTEXT.md`.
4. Load `config/firstmate.routes.yaml`.
5. Use `plugins/instinct-hermes-firstmate/adapter.py` as the signed intent boundary.

## Operating rule

Instinct prepares an intent. It does not receive shell access. The adapter validates the action and queues a durable JSON envelope. Firstmate owns routing. Hermes owns bounded execution. Glenn owns approval.

## First task

Use the `content_intake` route to scan the canonical Drive folder and produce a video catalog. Do not publish anything.

## Safe handoff shape

```json
{
  "action": "scan_drive",
  "requested_by": "glenn",
  "source": "https://drive.google.com/drive/folders/1G3MUd8wWztOefuJex32AFnMe46IyJpR_?usp=sharing",
  "approval": "not_required_for_draft"
}
```

The adapter adds the task ID, timestamp, ICM project, and route. A real webhook URL and secret are supplied later on the private host.

## Fail closed

If the signature, action, route, source, or approval state is unclear, stop and report the ambiguity. Never guess credentials or publish authority.
