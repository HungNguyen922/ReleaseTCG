# 🎴 Release TCG

**Release TCG** is a full-stack web app for building, sharing, and browsing decks for a custom 9-color trading card game. Players can sign up, build decks from a shared card pool, publish decks to the community, and admins can manage the card database directly from the app.

Built with **Next.js (App Router)**, **Supabase** (Postgres + Auth + Storage), and **Tailwind CSS**.

---

## ✨ Features

- 🔐 **Authentication** — Email/password sign up & login via Supabase Auth, with session handling and protected routes.
- 🏠 **Dashboard** — Profile card (username, bio, winrate), profile editing (username, bio, password change with email verification), and a grid of the player's saved decks.
- 🛠️ **Deck Builder** — Pick a 4-color Leader, then fill a 20-card Main Deck and 5-card Extra Deck restricted to the Leader's color identity, with live copy-limit and color-legality validation. Supports save, export (shareable deck codes), import, and clear.
- 🌐 **Community** — Publish a saved deck as a public guide/post with a description, browse/search/filter other players' decks (newest, popular, mine), export a deck as a code or as an image, and delete your own posts.
- 🖼️ **Gallery** — Browse every public card with search, expansion, color, and sort filters, and view full card details in a modal.
- 🗃️ **Admin Card Manager** — Create, edit, and delete cards (stats, palette, text, artist, expansion, pool) with a live image preview, gated to `admin` role users.

---

## 🧱 Tech Stack

| Layer          | Technology                                         |
|----------------|-----------------------------------------------------|
| Framework      | [Next.js](https://nextjs.org) (App Router, React 19)|
| Backend/DB     | [Supabase](https://supabase.com) (Postgres, Auth, Storage) |
| Styling        | Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com), Radix UI |
| Icons          | Hugeicons                                          |
| Deck codes     | `lz-string` (compressed, checksummed share codes)  |
| Image export   | `html-to-image`                                    |
| Testing        | Jest + React Testing Library                       |
| Language       | TypeScript                                          |

---

## 📁 Project Structure

```
releasetcg/
├── src/
│   ├── app/
│   │   ├── (app)/                # Authenticated app shell (sidebar layout)
│   │   │   ├── (admin)/cardmanager/  # Admin-only card CRUD
│   │   │   ├── community/            # Browse & publish community decks
│   │   │   ├── dashboard/            # Profile + saved decks
│   │   │   ├── deckbuildler/         # Deck builder + server actions
│   │   │   ├── gallery/              # Public card gallery
│   │   │   └── components/           # Shared cards/fields UI
│   │   ├── (auth)/emailpassword/     # Login / sign up
│   │   ├── api/                      # Route handlers (cards, decks, community)
│   │   └── auth/callback/            # Supabase OAuth/email callback
│   ├── components/ui/            # shadcn/ui primitives (button, dialog, sidebar, etc.)
│   ├── features/cards/            # Card viewer/modal feature module
│   ├── hooks/                     # Shared React hooks
│   ├── lib/                       # Domain logic (cards, decks, community, export, images)
│   ├── types/                     # Shared TypeScript types
│   └── utils/
│       ├── supabase/              # Browser/server Supabase clients, middleware
│       ├── decks/                 # Deck encode/decode/validate/CRUD helpers
│       ├── community/             # Community deck client helpers
│       └── profile/               # Profile + password update/validation
└── src/__tests__/                # Jest test suite
```

---

## 🗄️ Database (Supabase)

The app expects (at least) the following tables:

- **`users`** — profile data: `id`, `username`, `bio`, `wins`, `losses`, `role` (`user` | `admin`)
- **`cards`** — card definitions: `id`, `name`, `power`, `bulk`, `color1..color4`, `trait`, `effect1`, `effect2`, `flavor_text`, `description`, `artist`, `expansion`, `pool` (`draft` | `private` | `beta` | `public`), `image_url`
- **`decks`** — a player's saved decks: `id`, `owner_id`, `name`, `leader_id`
- **`deck_cards`** — join table for deck contents: `deck_id`, `card_id`, `zone` (`main` | `extra`), `count`
- **`community_decks`** — published deck guides: `id`, `owner_id`, `title`, `description`, `deck` (JSON), `leader_id`, `is_public`, `created_at`, `updated_at`

Card images are served from a public Supabase Storage bucket named **`CardImages`**.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in `releasetcg/` with your Supabase project credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Run tests

```bash
npm run test
# or in watch mode
npm run test:watch
```

---

## 📜 Scripts

| Command         | Description                          |
|------------------|---------------------------------------|
| `npm run dev`    | Start the Next.js dev server          |
| `npm run build`  | Build for production                  |
| `npm run start`  | Run the production build              |
| `npm run lint`   | Lint the codebase with ESLint         |
| `npm run test`   | Run the Jest test suite               |

---

## 🔑 Key Game Rules (as encoded in the app)

- A **Leader** must be a full 4-color card.
- A **Main Deck** must contain exactly **20 cards**; an **Extra Deck** must contain exactly **5 cards**.
- Non-leader cards can only be played if at least one of their colors overlaps with the Leader's color identity.
- Copy limits: single-color and 4-color cards are limited to **1 copy**; 2- and 3-color cards are limited to **2 copies** (counting the Leader slot).

---

## 📄 License

No license specified yet — add one here if you plan to open source this project.
