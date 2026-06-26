# News Aggregator — CI/CD with GitHub Actions & AWS EC2 (DevOps Assignment 4)

A full-stack **News Aggregator** web application wired to a **GitHub Actions CI/CD pipeline**
that lints, tests, and builds the app, then deploys it to **AWS EC2** across separate
**testing** and **staging** environments — with automated email notifications on success/failure.

> Course: **CS316 – DevOps** · Contributors: [@Hamid9211](https://github.com/Hamid9211) · [@ZainJ5](https://github.com/ZainJ5)

---

## ✨ Features

- 📰 News aggregation (Guardian API) with categories, search, bookmarks, and notes
- 🤖 In-app **AI chatbot** (Google Gemini)
- 🔐 **JWT** + **Firebase** authentication with protected & admin routes
- 🗂️ Comments, reactions, reports, user preferences, and newsletter subscriptions
- 📧 Email notifications via Nodemailer

## 🧱 Tech stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React + Vite, Tailwind CSS, React Router, Firebase |
| **Backend** | Node.js, Express, Sequelize ORM, JWT, bcrypt, Nodemailer |
| **AI** | Google Gemini (`@google/generative-ai`) |
| **Testing** | Jest / Vitest, ESLint |
| **DevOps** | GitHub Actions, AWS EC2 |

## 🔁 CI/CD pipelines

Workflows under [`.github/workflows/`](.github/workflows/):

| Pipeline | Trigger | Steps |
|----------|---------|-------|
| **Testing** (`testing.yml`) | Push → `main` | Checkout → setup Node → install backend deps → **unit tests** → **lint** → install frontend deps → **build frontend** → deploy to **testing** EC2 → success/failure email |
| **Staging** (`staging.yml`) | Push → `main` | Same build/test/lint sequence → deploy to **staging** EC2 → success/failure email |

## 🚀 Run locally

The application lives under [`News_Aggregator/`](News_Aggregator/):

```bash
# Backend
cd News_Aggregator/backend
npm install
cp .env.example .env       # provide your own values
npm test
node src/index.js

# Frontend (second terminal)
cd News_Aggregator/frontend
npm install
npm run dev
```

## ⚙️ Configuration

The backend is configured via a `.env` file (DB connection, `JWT_SECRET`, `GUARDIAN_API_KEY`,
`GEMINI_API_KEY`, email credentials). **Use your own values and never commit real secrets.**

Pipeline secrets are stored in **GitHub → Settings → Secrets and variables → Actions**
(EC2 host/SSH key, email credentials, etc.).

## 📁 Repository layout

```
.
├── .github/workflows/          # CI/CD pipelines (testing & staging)
└── News_Aggregator/
    ├── backend/                # Express + Sequelize API
    │   └── src/{controllers,models,routes,middleware,utils}
    └── frontend/               # React + Vite app
        └── src/{components,pages,context,services}
```
