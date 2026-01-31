# Vibecoding Expo Template

A fast-start Expo (React Native) template for vibecoding new product ideas. It is intentionally minimal, opinionated, and ready for quick iteration on web + mobile.

## What You Get

- Expo Router app skeleton with file-based routing
- NativeWind (Tailwind) styling setup
- Shared component and hooks folders
- Sensible defaults for assets, constants, and config

## Tech Stack

- Expo SDK (`expo`)
- React Native (`react-native`)
- TypeScript (strict)
- Expo Router (`expo-router`)
- NativeWind + Tailwind CSS (`nativewind`, `tailwindcss`)
- `@expo/vector-icons` for icons

## Project Structure

- `app/` — screens and routes (Expo Router)
- `components/` — reusable UI components
- `constants/` — app-wide constants (theme/colors)
- `assets/` — images and static assets
- `hooks/` — shared React hooks
- `scripts/` — project maintenance (e.g., reset)

## Getting Started

Prerequisites:
- Node.js + npm
- Expo CLI via `npx` (no global install required)

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run start
```

Platform shortcuts:

```bash
npm run ios
npm run android
npm run web
```

## Development Workflow

- Lint: `npm run lint`
- Typecheck: `npx tsc -p tsconfig.json --noEmit`

## Customize This Template

- Update app metadata in `app.json` (name, icons, splash)
- Add screens in `app/` and shared UI in `components/`
- Edit Tailwind tokens in `tailwind.config.js`
- Add reusable constants in `constants/`

## Optional: Reset to Blank

Move the starter code to `app-example/` and generate a clean `app/`:

```bash
npm run reset-project
```
