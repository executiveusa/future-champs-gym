# Future Champs Typography System

## Direction

Future Champs should use a luxury editorial system rather than a generic startup or sports-template system. The typography must feel institutional, disciplined, historic, and contemporary.

## Recommended production system

### Display serif

**Cormorant Garamond Variable**

Use for:
- major editorial headlines;
- founder and legacy storytelling;
- selected pull quotes;
- campaign titles where emotional weight is required.

Do not use for:
- navigation;
- buttons;
- long paragraphs;
- small labels;
- dense operational information.

### Primary sans serif

**Manrope Variable**

Use for:
- body copy;
- navigation;
- forms;
- buttons;
- menus;
- event information;
- captions;
- administrative interfaces.

### Athletic utility face

**Barlow Condensed**

Use sparingly for:
- numeric statistics;
- dates and times;
- section indexes;
- compact labels;
- limited boxing-program utility text.

It must not become the dominant voice of the site.

## Premium licensed upgrade

When budget and licensing are approved, replace the open-source pair with:

- **Canela** or **Editorial New** for display;
- **Suisse Int’l**, **Neue Haas Grotesk**, or **Söhne** for interface and body typography.

Do not copy Gucci or Fendi proprietary typography. The goal is comparable discipline and art direction, not imitation.

## Type scale

Use fluid values with `clamp()` and preserve strong contrast between editorial headlines and utility text.

```css
:root {
  --text-display-xl: clamp(4.5rem, 10vw, 9.5rem);
  --text-display-lg: clamp(3.25rem, 7vw, 7rem);
  --text-h1: clamp(2.75rem, 5.5vw, 5.5rem);
  --text-h2: clamp(2.1rem, 4vw, 4rem);
  --text-h3: clamp(1.55rem, 2.5vw, 2.4rem);
  --text-body-lg: clamp(1.125rem, 1.4vw, 1.35rem);
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-label: 0.75rem;
}
```

## Tracking and line-height

- Display serif: `line-height: 0.92–1.02`; tracking `-0.035em` to `-0.015em`.
- Sans headlines: `line-height: 0.95–1.08`; tracking `-0.03em` to `-0.01em`.
- Body: `line-height: 1.5–1.7`; tracking near `0`.
- Labels and navigation: uppercase only when useful; tracking `0.08em–0.14em`.
- Never use all caps for paragraphs.

## Width rules

- Main headline: usually 8–12 words maximum.
- Body copy: target 52–70 characters per line.
- Intro copy: target 38–55 characters per line.
- Buttons: one action, generally 2–4 words.
- Avoid centered body paragraphs wider than 42 characters.

## Hierarchy rules

1. One dominant headline per viewport.
2. One supporting sentence beneath it.
3. One primary call to action.
4. Secondary actions must be visually quieter.
5. Do not make every section oversized.
6. Do not use more than three font families.
7. Do not use more than four font weights on one page.
8. Do not mix multiple display styles simply to make sections look different.

## Luxury-quality test

Typography fails review when it contains:

- generic centered hero copy over a gradient;
- excessive bold text;
- too many pills, badges, cards, and labels;
- arbitrary font-size changes;
- giant headlines without strong copy;
- all-caps paragraphs;
- low-contrast gold on cream;
- narrow text columns that feel accidental;
- animation that makes reading slower;
- multiple decorative fonts competing on one page.

## Implementation

Use `next/font` in the App Router so fonts are optimized at build time and do not cause layout shift. Prefer variable fonts and `display: swap`.

Commercial font files must never be committed unless the license explicitly permits repository storage and web embedding. Keep license records with the project owner.
