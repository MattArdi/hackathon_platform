# shared/styles

EnterpriseSG brand CSS library, shared by the client-facing app and the back-office app. Plain CSS custom properties - no build step, no framework dependency.

## Files (import in this order)

1. `tokens.css` - color, type, spacing, radius, shadow, motion variables.
2. `base.css` - element resets built on the tokens.
3. `components.css` - `.btn-primary` / `.btn-secondary`, `.card` / `.card-elevated`, `.alert`.

```html
<link rel="stylesheet" href="/shared/styles/tokens.css" />
<link rel="stylesheet" href="/shared/styles/base.css" />
<link rel="stylesheet" href="/shared/styles/components.css" />
```

## Decisions this library encodes

- **One brand red, not three.** ESG's live site actually ships `#e7131a`, `#d91218`, and `#db0000`/`#c60000` for what's functionally the same red. This library normalizes to `--color-brand-red` (`#e7131a`) for identity/CTAs and keeps `--color-alert-red` (`#db0000`) separate and distinct, so warnings never visually double as calls-to-action.
- **No Singapore government masthead / SGDS icon font.** That's shared gov.sg infrastructure layered on top of `enterprisesg.gov.sg` itself, not ESG's own brand - and these hackathon microsites are a separate service, not hosted on that domain. If that changes, the masthead is an additive layer on top of this library, not a rework of it.
- **Plain CSS, not Tailwind/CSS-in-JS.** Framework-agnostic on purpose, since the client-facing and back-office apps aren't guaranteed to share a frontend framework.

Source: `EnterpriseSG Website - Design System Analysis` (color/type/radius values extracted directly from the site's shipped CSS).
