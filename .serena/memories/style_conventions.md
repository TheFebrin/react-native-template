# Style & Conventions
- Language: TypeScript with `strict` mode.
- Indentation: 2 spaces (match existing files in app/).
- Imports: use alias `@/` for project-root paths.
- UI styling: Tailwind/NativeWind utility classes; extract reusable variants when repeated.
- Components: small/focused, one per file; favor composition over inheritance; reuse shared UI from components/.
- Routing: file-based routes in app/ (Expo Router).
