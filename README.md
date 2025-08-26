# CMPC Test

This repository contains scaffolding for two applications:
- Backend: NestJS REST API (TypeScript)
- Frontend: React + TypeScript (Vite)

Both apps live in separate folders: `backend/` and `frontend/`.

## Prerequisites
- Node.js 18+ (recommended 20+)
- npm or yarn or pnpm

## Backend (NestJS)
Location: `backend/`

Scripts:
- `npm run start:dev` – start in watch mode
- `npm run build` – production build
- `npm start` – start compiled build

Environment:
- Copy `.env.example` to `.env` and adjust as needed (default PORT=3000)

Endpoints:
- Health check: `GET http://localhost:3000/api/health`
- Swagger docs: `http://localhost:3000/docs`

## Frontend (React + TS + Vite)
Location: `frontend/`

Scripts:
- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run preview` – preview production build

Environment:
- Copy `.env.example` to `.env` if you want to override API base URL (`VITE_API_BASE_URL`).
- In dev, Vite proxies `/api` to `http://localhost:3000`.

Main page:
- The Home page calls the backend health endpoint and displays status and timestamp.

## Getting Started
1. Install dependencies:
   - Backend: `cd backend && npm install`
   - Frontend: `cd ../frontend && npm install`
2. Start backend: `npm run start:dev` (from `backend/`)
3. Start frontend: `npm run dev` (from `frontend/`)
4. Open the app: `http://localhost:5173/`
   - API Docs: `http://localhost:3000/docs`

## Next Steps / Business Logic
Business conditions from the PDF can be implemented as:
- Backend: create domain modules under `src/`, define DTOs with class-validator, controllers/services for REST endpoints, and entities/models as required. Update Swagger decorators accordingly.
- Frontend: add routes/pages under `src/pages`, components under `src/components`, and use `src/shared/api` for HTTP calls.

Please provide the business rules to extend the scaffold accordingly.
