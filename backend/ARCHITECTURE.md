# Backend separation and ICM map

## ICM form

`knowledge bundle → editorial pipeline → approval queue → public release`

## Hard boundary

The frontend is a public read surface. The backend is the private write and orchestration surface. Content becomes public only through an approved release record.

## Runtime topology

```text
Glenn / Instinct
        ↓ signed intent
Instinct adapter
        ↓ durable task envelope
Firstmate supervisor
        ↓ isolated worktree / task
Hermes runtime + Riverside/Drive tools
        ↓ report + approval packet
Glenn approval
        ↓
Public frontend / YouTube
```

## ICM stages

1. Intake: source file, company, requested action.
2. Context: project state, brand rules, rights, content record.
3. Prepare: Hermes creates brief, transcript request, edit plan, or metadata.
4. Review: Glenn verifies people, claims, youth-sensitive material, and publication.
5. Execute: Firstmate lands approved code/content changes through isolated work.
6. Prove: runtime test, source trace, public URL, rollback receipt.

## Cross-company scope

The same backend can manage Future Champs, MACS Digital Media, and Glenn's other companies only if each company has a separate project record, assets, permissions, audience, and approval boundary. Shared tooling does not mean shared ownership or mixed content.

## Not yet proven

- Instinct access/API endpoint.
- Riverside API credentials and supported automation surface.
- Hostinger/VPS deployment.
- Hermes gateway health in the target production environment.
- Firstmate live supervisor session.
