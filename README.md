# NotchLedge — Marketing & Checkout Site

A one-page Next.js marketing site for NotchLedge, a macOS notch productivity app.
This repo is the **website only** — it markets and sells the app; the app itself
is a separate native Swift/SwiftUI project you build in Xcode.

## Tech stack
Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Editing content

Everything — name, tagline, pricing, the tool list, FAQ — lives in **`config/product.ts`**.
Edit that one file for all copy changes; you shouldn't need to touch components for
content updates.

## Connecting payments

1. Create a product in [Lemon Squeezy](https://lemonsqueezy.com) or [Paddle](https://paddle.com)
   (both act as "merchant of record" and handle sales tax/VAT for you — much simpler than
   raw Stripe for selling software directly to consumers).
2. Copy the checkout link they give you.
3. Set `CHECKOUT_URL` in your environment to that link.
4. Every "Buy" button on the site points at `/api/checkout`, which redirects there —
   so you never have to hunt down and update multiple buttons if the link changes.

## Connecting the download link

Once you have a notarized `.dmg` built:
1. Host it on GitHub Releases (free, versioned, simple — this is how most indie Mac
   apps distribute outside the App Store).
2. Set `NEXT_PUBLIC_DOWNLOAD_URL` to the release asset URL.

## Pricing honesty note

The pricing section intentionally does **not** include a fake scarcity counter
("X of Y sold"). If you want one later, wire it to real sale counts once you have
real sales — a fabricated number is easy for anyone to notice and it undermines trust
fast for a solo-dev product where trust is most of the sale.

## Deploying

Standard Next.js deploy — push to GitHub, import into Vercel, set the environment
variables above in Project Settings, deploy.

## v2 upgrade notes

- **Interactive notch preview** (`components/NotchDemo.tsx`) is used in the hero and the Themes section. It uses sample data and is labelled as a preview.
- **Themes** — colours are in `app/globals.css` (`[data-theme="…"]`), names in `themes` inside `config/product.ts`. Only list themes your app really ships.
- **Real screenshots** — drop PNGs in `public/screens/` and set `image: "/screens/clipboard.png"` on a tool in `config/product.ts`; it appears on that tool's card.
- **Testimonials** — add real quotes to `testimonials` in `config/product.ts`. Empty = section hidden.
- Set `NEXT_PUBLIC_SUPPORT_EMAIL` in `.env` (footer shows it only when set).

## v3 — real screenshots, /how-to-use, $5 launch price

- **Real app screenshots** now live in `public/screens/` and are wired to each tool in `config/product.ts` (18 tools total, matching the in-app "Add Tools" list). Add more screenshots there and reference them the same way.
- **Hero** and **Tools** section now show actual in-app screens, not mockups.
- **New page:** `/how-to-use` — a step-by-step guide built from `howToSteps` in `config/product.ts`. Edit that array to add/reorder/remove steps.
- **Price set to $5** launch price in `config/product.ts` (`pricing.price`). Change `pricing.originalPrice` once you want to show a strikethrough price later.
- Removed the earlier placeholder "Themes" section — the current screenshots only show one look, so re-add it once the app actually ships multiple themes (or tell Claude to add it back with real theme screenshots).

## v4 — varied-size layout, real notch UI, Dodo Payments, favicon

- **No more one big uniform grid.** The old flat 18-card grid is gone. Now:
  - `components/sections/HeroTools.tsx` — Revenue and Analytics get a big, full-width feature treatment (this is where Dodo Payments is called out, alongside Stripe and Polar).
  - `components/sections/ToolsBento.tsx` — the rest of the tools sit in a mixed-size bento grid (`config/product.ts` → `toolSizes`, edit `"sm" | "md" | "lg"` per tool to change proportions).
  - `components/sections/AllTools.tsx` — a compact, screenshot-free checklist of all tools, for a quick scan instead of more scrolling through images.
  - `components/sections/Integrations.tsx` — a dedicated Stripe / Polar / Dodo Payments row. Add more in `config/product.ts` → `integrations`.
- **Real Mac notch chrome:** `components/MacFrame.tsx` wraps the hero screenshot in a laptop-screen edge with an actual notch cutout at the top. There's also a small decorative notch fixed to the very top of every page (`app/layout.tsx`).
- **Favicon:** `app/icon.png` currently holds a placeholder mark (violet notch + "N") generated for you. Replace that file with your real logo — same filename, ideally 512×512 — and Next.js will pick it up automatically as the favicon everywhere.
- Verified with `tsc --noEmit`, `next lint`, and a full `next build` (Google Fonts can't resolve inside this sandbox, so build was smoke-tested with fonts temporarily stubbed out — it will build normally wherever the real domain isn't blocked, e.g. Vercel).
