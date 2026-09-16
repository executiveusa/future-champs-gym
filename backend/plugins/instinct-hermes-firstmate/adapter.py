"""Minimal signed-intent adapter. It queues work; it does not publish or merge."""

from __future__ import annotations

import hashlib
import hmac
import json
import os
import secrets
from pathlib import Path
from typing import Any

ALLOWED_ACTIONS = {
    "scan_drive", "catalog_video", "prepare_story_brief",
    "prepare_riverside_project", "request_transcript", "prepare_short_package",
    "prepare_publish_packet", "draft_update", "draft_calendar",
    "draft_partner_followup",
}


def verify_signature(raw_body: bytes, signature: str, secret: str) -> bool:
    expected = "sha256=" + hmac.new(secret.encode(), raw_body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)


def queue_intent(raw_body: bytes, signature: str, state_root: str | Path, secret: str) -> dict[str, Any]:
    if not verify_signature(raw_body, signature, secret):
        raise PermissionError("invalid Instinct signature")
    payload = json.loads(raw_body)
    action = payload.get("action")
    if action not in ALLOWED_ACTIONS:
        raise PermissionError("action is not allowlisted")
    task_id = payload.get("request_id") or "instinct-" + secrets.token_hex(8)
    envelope = {"task_id": task_id, "source": "instinct", "status": "queued", **payload}
    inbox = Path(state_root) / "inbox"
    inbox.mkdir(parents=True, exist_ok=True)
    destination = inbox / f"{task_id}.json"
    destination.write_text(json.dumps(envelope, indent=2) + "\n", encoding="utf-8")
    return {"task_id": task_id, "status": "queued", "approval_required": action == "prepare_publish_packet"}
