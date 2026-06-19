# Flameback v2 — Design System (concrete tokens)

Translation of `flameback-design-philosophy.md` into build tokens. v2 keeps every page's
content, copy, links and interactivity identical to v1 — only the visual language changes:
**Obsidian/Graphite + Champagne**, **Instrument Serif + Geist**, calm and shadowless.

## Palette tokens (applied to every page)
Default = **dark desktop** (Obsidian stage). `.light` = **mobile mood** (Ivory/Paper).

```css
:root{
  --bg:#0B0C0E;            /* Obsidian — page surface */
  --ink:#F5F2EA;           /* Ivory — headlines / text on dark */
  --ink-soft:rgba(245,242,234,.66);
  --ink-mute:rgba(245,242,234,.44);
  --line:rgba(245,242,234,.12);
  --accent:#B59669;        /* Champagne — accent, italic headline word, selected */
  --btn-bg:#B59669; --btn-ink:#0B0C0E;   /* on dark, the one action is champagne */
}
:root.light{
  --bg:#F5F2EA;            /* Ivory */
  --ink:#0B0C0E;           /* Obsidian text */
  --ink-soft:rgba(11,12,14,.68);
  --ink-mute:rgba(11,12,14,.46);
  --line:rgba(11,12,14,.12);
  --accent:#8A6D43;        /* champagne, darkened for contrast on ivory */
  --btn-bg:#0B0C0E; --btn-ink:#F5F2EA;   /* on light, the one action is obsidian */
}
```

Surfaces: Graphite `#24272D`, Slate `#5B6068`, Mist `#9CA0A8`, Bone `#EDE8DC`, Paper `#FAF7F0`.
Trade/perf (muted, never neon): **Buy/up = teal `#5B8C82`**, **Sell/down = amber `#B58450`**.
Success = teal. Warning = amber. **No green, no red.**

## Type
Two faces only, from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```
- **Instrument Serif** — all headlines, section marks, currency figures. Italic = champagne accent word. (from v1 Cormorant Garamond)
- **Geist** — body 14/22, helper, labels. (from v1 Source Serif 4)
- **Geist Mono** — eyebrows (ALL-CAPS, letter-spaced), reference codes, amounts-as-data. (from v1 JetBrains Mono)

## Components (see v2.css — loaded last on every page so it overrides)
- **Buttons** are pills (`border-radius:999px`). Primary = `--btn-bg` fill, one per screen. Ghost = transparent + hairline border. Tertiary = underlined link.
- **Cards/tiles** radius 8px; **inputs** radius 4px. 4pt spacing grid.
- **Elevation via colour shift, never drop shadows.** No grain texture.
- Selected chips/cards flip to the accent — "a signed page, not a scoreboard".
- No confetti, no toasts. Errors amber + 400ms shake, digits preserved.

## How v2 was built from v1
Deterministic re-skin (so the A/B differs only in design):
1. Font `<link>` and `font-family` names swapped (Cormorant→Instrument Serif, Source Serif 4→Geist, JetBrains Mono→Geist Mono).
2. Palette hexes/rgba swapped to the tokens above (warm-dark→obsidian, orange→champagne, green/red→teal/amber).
3. `v2.css` linked on every page: kills grain, pills the buttons, rounds cards 8px / inputs 4px.

*Flameback Design System · v2 · obsidian + champagne*
