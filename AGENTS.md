# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Expo Router screens and layouts (file-based routing).
- `components/` holds reusable UI components.
- `hooks/` contains custom React hooks (e.g., theming via `use-color-scheme`).
- `constants/` stores app-wide constants.
- `assets/` stores images, fonts, and static media.
- `scripts/` includes maintenance scripts like project reset.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run start` (or `npx expo start`): start the Expo dev server.
- `npm run android` / `npm run ios` / `npm run web`: launch the app on a specific platform.
- `npm run lint`: run Expo’s ESLint configuration.
- `npm run reset-project`: move starter code to `app-example/` and create a blank `app/`.

## Coding Style & Naming Conventions
- TypeScript with strict mode; prefer typed props and state.
- Indentation: 2 spaces (match existing files in `app/`).
- Imports: use the alias `@/` for project-root paths (see `tsconfig.json`).
- Keep components small and focused; one component per file.
- Favor composition over inheritance; build reusable components and inject data via props.
- Reuse shared UI from `components/` instead of duplicating.
- Use Tailwind for styles; prefer utility classes and extract reusable variants when they repeat.

## Testing Guidelines
- No test framework is configured yet.
- If you add tests, document the runner and add scripts (e.g., `npm test`) to `package.json`.

## Commit & Pull Request Guidelines
- No Git history detected in this workspace. If you initialize one, use concise, imperative commit messages (e.g., `Add reminder list screen`).
- PRs should describe the user-facing change, include screenshots for UI updates, and link relevant issues when applicable.

## Configuration Tips
- Update app configuration in `app.json` (name, icons, splash, etc.).
- Use `expo` docs for platform-specific setup and permissions.
