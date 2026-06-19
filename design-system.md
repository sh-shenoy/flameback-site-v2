# Flameback — Design System

Single source of truth for building new pages. Every page is a **standalone HTML file** with an inline `<style>` block (no shared CSS file, no build step) so it works directly on GitHub Pages. Match these rules and new pages will be visually consistent with the rest of the site.

---

## 1. Color tokens (CSS custom properties)

Declared on `:root` (dark, default) with a `.light` override on `<html>`. Copy this block verbatim into every new page.

```css
:root{
  --bg:#1A1714;        /* page background (near-black warm brown) */
  --ink:#F2EDE3;       /* primary text (warm off-white) */
  --ink-soft:rgba(242,237,227,.66);  /* secondary text */
  --ink-mute:rgba(242,237,227,.44);  /* labels, captions */
  --line:rgba(242,237,227,.16);      /* borders, dividers */
  --accent:#FF6D0A;    /* signature orange — links, emphasis, the "." */
  --btn-bg:#FF6D0A; --btn-ink:#1A1714;
  --grain-blend:screen; --grain-op:.055;
}
:root.light{
  --bg:#FCFAF6; --ink:#1A1714;
  --ink-soft:rgba(26,23,20,.68); --ink-mute:rgba(26,23,20,.46);
  --line:rgba(26,23,20,.14);
  --accent:#B23E08;    /* darker orange for contrast on light */
  --btn-bg:#1A1714; --btn-ink:#FCFAF6;
  --grain-blend:multiply; --grain-op:.035;
}
```

Never hard-code colors — always reference a token so the light/dark toggle keeps working.

---

## 2. Typography

Three fonts, loaded from Google Fonts (CDN). Put this in every `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Role | Family | Usage |
|---|---|---|
| Display / headings | **Cormorant Garamond**, 500 weight | `h1`–`h4`. Italic + `--accent` for emphasis (`<em>`). Tight line-height (~1) on big headings. |
| Body | **Source Serif 4** | Paragraphs, UI labels, buttons. `line-height:1.55–1.62`. Italic for ledes/sub-copy. |
| Mono / meta | **JetBrains Mono** | Eyebrow labels, captions, footer, numeric meta. ~10.5px, `letter-spacing:.07em`, `text-transform:uppercase`. |

Heading emphasis pattern: `h1,h2,h3 em{color:var(--accent);font-style:italic;font-weight:500}`.
Hero headings: `font-size:clamp(40px,6.4vw,82px)`. The brand wordmark renders the trailing period in `--accent`: `flameback<span class="p">.</span>`.

---

## 3. Texture (the grain)

A fixed fractal-noise overlay over the whole page. Include on every page:

```css
body::after{content:"";position:fixed;inset:0;z-index:1;pointer-events:none;
  mix-blend-mode:var(--grain-blend);opacity:var(--grain-op);
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
```

Content sits at `z-index:2` above the grain.

---

## 4. Layout

- `.wrap{max-width:1240px;margin:0 auto;padding:0 clamp(22px,5vw,44px)}` — the standard container.
- Sections separated by `border-bottom:1px solid var(--line)`.
- Generous vertical rhythm: `padding:clamp(70px,8vh,100px) 0` for major sections.
- Card grids use a 1px `--line` gap trick: grid `gap:1px;background:var(--line)` with each cell `background:var(--bg)`.

---

## 5. Components

**Nav** — sticky, blurred, border appears on scroll:
```css
nav{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--bg) 84%,transparent);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.navin{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:24px}
.navr a{color:var(--ink-soft);text-decoration:none;font-size:14px}.navr a:hover{color:var(--ink)}
```

**Buttons**:
```css
.btn{background:var(--btn-bg);color:var(--btn-ink)}
.btn,.btn-out{display:inline-flex;align-items:center;gap:11px;font-family:"Source Serif 4",serif;font-size:14.5px;font-weight:500;padding:12px 22px;text-decoration:none;transition:gap .35s,opacity .3s;border:none;cursor:pointer}
.btn:hover{gap:15px;opacity:.92}          /* arrow nudges right on hover */
.btn-out{background:transparent;color:var(--ink);border:1px solid var(--line)}
```
CTA convention: trailing `&rarr;` (→) inside the button; the `gap` transition animates it.

**Eyebrow label** (mono, with a short accent rule):
```css
.lab{font-family:"JetBrains Mono",monospace;font-size:10.5px;color:var(--ink-mute);letter-spacing:.07em;text-transform:uppercase;display:inline-flex;align-items:center;gap:11px}
.lab .l{width:24px;height:1px;background:var(--accent)}
```

**Light/dark toggle** — pill button, top-right of nav, JS swaps `light` class on `<html>`:
```html
<button class="toggle" id="t">light</button>
<script>var t=document.getElementById('t');t.onclick=function(){var l=document.documentElement.classList.toggle('light');t.textContent=l?'dark':'light';};</script>
```

---

## 6. Voice & content conventions

- Lowercase, understated, literary. Wordmark is always lowercase `flameback.` with the accent period.
- Italic serif for asides and ledes; `<em>` carries the accent color in headings.
- Mono uppercase for "meta" facts (dates, SEBI numbers, durations).
- British spelling ("finalise", "adviser"), em-dashes for asides.

---

## 7. Onboarding flow (page map)

The client intake flow, in order. Entry point is **welcome** (the "Onboard" CTA across the site links here):

```
[Onboard button]  →  flameback-onboard-welcome.html   (who's at the keyboard: client vs RM)
                  →  flameback-onboard-identity.html   (Chapter 1 — who you are)
                  →  flameback-onboard-goals.html      (Chapter 2 — what you want)
                  →  flameback-onboard-schedule.html   (schedule a conversation)
                  →  flameback-onboard-confirmed.html  (confirmation)
```

Supporting pages: `flameback-begin.html` (talk-to-us), `flameback-login.html` (client sign-in), `flameback-onboarding.html`.

**A new "after onboard" page** (e.g. a client dashboard or "what happens next") slots in **after `flameback-onboard-confirmed.html`** — link to it from the confirmation page's primary CTA, and reuse the nav + tokens + grain above.

---

## 8. Checklist for a new page

- [ ] `<head>` has the viewport meta + the 3-font Google Fonts link
- [ ] `:root` + `:root.light` token blocks copied in
- [ ] `body::after` grain overlay present
- [ ] Sticky nav with wordmark (accent period) + light/dark toggle
- [ ] All colors via `var(--token)`, never hex literals in markup
- [ ] Internal links use **flat filenames** (`flameback-x.html`), not folder paths — the published site is flat
- [ ] CTAs use `.btn` with a trailing `&rarr;`
- [ ] Footer in JetBrains Mono, uppercase, `--ink-mute`
