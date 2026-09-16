# Instinct → Hermes → Firstmate adapter

This is the narrow control boundary for an eventual Instinct connection.

Instinct sends a signed JSON intent to the private backend. The adapter validates the signature, checks the allowlist, writes a durable task envelope, and returns a task ID. Firstmate/Hermes then performs the work under its own approvals and isolated-worktree rules.

Instinct never gets a shell, GitHub token, Drive token, Riverside token, or direct project write permission.

## Intent shape

```json
{
  "request_id": "instinct-unique-id",
  "actor": "glenn",
  "company": "future-champs",
  "action": "prepare_story_brief",
  "input": {"drive_file_id": "..."},
  "requested_at": "2026-09-16T00:00:00Z"
}
```

The signature is `HMAC-SHA256(secret, raw_request_body)` in the `X-Instinct-Signature` header.

## Allowed actions

`scan_drive`, `catalog_video`, `prepare_story_brief`, `prepare_riverside_project`, `request_transcript`, `prepare_short_package`, `prepare_publish_packet`, `draft_update`, `draft_calendar`, `draft_partner_followup`.

Publishing, external messages, money movement, deletion, permission changes, and merges remain human-approved.

## Important limitation

Instinct's public site currently describes a private-access group and does not publish a stable developer webhook contract. This adapter is ready for that contract; it must not be called a live Instinct integration until Glenn supplies access and a tested endpoint.
