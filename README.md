# CricketVerse 🏏

**Own The Legends. Wear The Legacy.**

India's premium cricket merchandise marketplace built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Zustand.

## Features

- 🛍️ Full e-commerce flow: browse, cart, multi-step checkout, order tracking
- 🎨 Premium dark design system with glassmorphism and gold cricket seam motif
- 👤 User accounts with orders, wishlist, rewards, addresses
- 🏪 Vendor registration and storefront pages
- ⚡ Flash sale with live countdown
- 📝 Blog with SEO-ready articles
- 🔧 Admin dashboard with orders, products, vendors, analytics
- 📱 Mobile-first responsive design with bottom navigation

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **State:** Zustand (cart, auth, wishlist)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Credentials

| Role   | Email                    | Password      |
|--------|--------------------------|---------------|
| User   | fan@cricketverse.in      | Cricket@123   |
| Admin  | admin@cricketverse.in    | AdminCV@2024  |
| Vendor | seller@cricketverse.in   | Seller@123    |

## Coupon Codes

- `CRICKET20` — 20% off (min ₹499)
- `NEWUSER20` — 20% off for new users
- `FREESHIP` — Free shipping (min ₹499)

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # UI, layout, home, catalog components
├── lib/           # Utils, types, data (products, players, teams)
└── stores/        # Zustand stores (cart, auth, wishlist)
```

## Build

```bash
npm run build
npm start
```
