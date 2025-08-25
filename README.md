# Amazon Clone 2024

A full-stack e-commerce web application that mimics a simple Amazon experience:

- Browse products grouped by **category**
- View **product details**
- **Add / remove / update** items in a cart
- **Checkout** using **Stripe.js** (test mode)
- Register / Sign in with **Firebase Authentication**
- Persist orders to **Firestore** and view them on an **Orders** page

**Frontend:** React + Vite
**Backend:** Node.js + Express (Stripe server endpoints)
**Frontend deployed:** Vercel
**Backend deployed:** Render

---

## Demo

- **Backend (Render):** `https://amazon-clone-472h.onrender.com/`
- **Frontend (Vercel):** `https://amazon-clone-web-project.vercel.app/`

---

## TL;DR

- Use Stripe test card \`\` (any future expiry, any CVC, any ZIP) for testing payments.
- Firebase handles authentication; Firestore stores orders by user.
- Repo is a monorepo with two subfolders:

  - `api/` → backend (Express)
  - `frontend/` → frontend (React + Vite)

Clone:

```bash
git clone https://github.com/kaleabnega/Amazon-Clone-2024.git
cd Amazon-Clone-2024
```

---

## Features

- Product listing and category grouping
- Product detail pages with images and descriptions
- Shopping cart management (add / remove / update quantity)
- Stripe-powered checkout (frontend uses Stripe.js; backend uses secret key)
- Firebase Authentication (signup / signin)
- Orders page populated from Firestore (orders persisted after successful payment)
- Responsive UI using MUI + custom styles
- Separate frontend and backend for easier deployment

---

## Tech stack & notable dependencies

### Frontend (React + Vite) — notable packages

```
@emotion/react
@emotion/styled
@mui/material
@stripe/react-stripe-js
@stripe/stripe-js
axios
dotenv
firebase
numeral
react
react-dom
react-icons
react-responsive-carousel
react-router-dom
react-spinners
```

### Backend (Node.js + Express) — notable packages

```
cors
dotenv
express
nodemon
stripe
```

> **Vite note:** Frontend environment variables must be prefixed with `VITE_` and are accessed in code via `import.meta.env`.

---

## Repository layout

```
Amazon-Clone-2024/
├── api/             # Backend (Node / Express) - Stripe server endpoints
│   ├── index.js
│   ├── package.json
│   └── ...
├── frontend/        # Frontend (React + Vite)
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

---

## Setup & run locally

### Prerequisites

- Node.js (recommended ≥ 18)
- npm
- Git
- Firebase project (Auth + Firestore)
- Stripe account (test keys)

### 1) Clone repository

```bash
git clone https://github.com/kaleabnega/Amazon-Clone-2024.git
cd Amazon-Clone-2024
```

### 2) Backend (api)

```bash
cd api
npm install
```

Create `api/.env`:

```env
STRIPE_SECRET_KEY=sk_test_xxx
```

`package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Run backend:

```bash
npm run dev  # development
npm start     # production/simple
```

### 3) Frontend (frontend)

```bash
cd ../frontend
npm install
```

Create `frontend/.env`:

```env
VITE_RENDER_URL=https://amazon-clone-472h.onrender.com
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx

# Firebase config:
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
VITE_FIREBASE_APP_ID=1:xxxx:web:yyyy
```

Run frontend dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

---

## Environment variable examples

\*\*Backend — \*\*\`\`

```env
STRIPE_SECRET_KEY=sk_test_xxx
```

\*\*Frontend — \*\*\`\`

```env
VITE_RENDER_URL=https://amazon-clone-472h.onrender.com
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
VITE_FIREBASE_APP_ID=1:xxxx:web:yyyy
```

---
