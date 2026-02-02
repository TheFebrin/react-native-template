# Vibecoding Expo Template

An **opinionated Expo (React Native) starter template** designed for:

- fast iteration on new product ideas
- long-term codebase health
- AI-assisted development without architectural decay

This repository is **not a concrete product**.
It is a **template** intended to be cloned and adapted for future projects.

---

## How This Template Is Intended to Be Used

### For Humans

- Clone this repo to start a new React Native project
- Replace placeholder names, bundle identifiers, and metadata
- Extend the architecture, do not fight it

### For AI Agents

- Read `AGENTS.md` before making changes
- Follow spec-driven development via `.ai/spec/`
- Prefer global architectural fixes over local patches
- Keep files small, composable, and explicit

If a change “works” but degrades structure, it is incorrect.

---

## Required Setup After Cloning

After creating a new project from this template, you **must**:

- Rename the app (display name + internal identifiers)
- Update bundle identifiers (`app.json`, `eas.json`)
- Replace placeholder icons, splash screens, and metadata
- Update this README with project-specific context

AI agents should **prompt the user** for missing values rather than guessing.

---

## Repository Structure (Conceptual)

```text
.
├── app/                # Expo Router entrypoints
├── components/         # Reusable UI components (one per file)
├── hooks/              # Custom hooks
├── services/           # Side effects, API, integrations
├── state/              # State management (domain-oriented)
├── .ai/
│   ├── spec/           # Spec-driven development (markdown specs)
│   └── skills/         # Reusable AI skills
├── AGENTS.md           # Rules for AI agents (mandatory)
└── README.md
```

AI agents must respect ownership boundaries implied by this structure.

---

## Spec-Driven Development

This template assumes **spec-first development**.

### `.ai/spec/`

- Each meaningful feature or domain rule should have a spec
- Specs describe _what_ and _why_, not implementation details
- Specs are the source of truth
- Code must follow the spec, not reinterpret it

If a spec is missing or outdated, update the spec **before** coding.

---

## AI Skills

### `.ai/skills/`

- Contains reusable AI instructions (“skills”)
- Skills define _how_ agents should perform recurring tasks
- Skills must be:
  - generic
  - reusable
  - free of project-specific hacks

If a task repeats, extract a skill.

---

## Development Workflow

All feature work should be tracked via GitHub issues.

Preferred flow:

```bash
gh issue develop <ISSUE_NUMBER>
```

Rules:

- No feature work without an issue
- Issues should be spec-driven and testable
- Branches should be short-lived and focused

---

## iOS Local Build Flow (Recommended)

Local builds are faster than waiting in the EAS free tier queue.

### Prerequisites

```bash
brew install fastlane cocoapods
```

### Build locally

```bash
eas build --local --platform ios --profile production
```

### List local builds with versions

```bash
ls -lht *.ipa

for ipa in *.ipa; do
  version=$(unzip -p "$ipa" "Payload/*.app/Info.plist" 2>/dev/null | plutil -extract CFBundleShortVersionString raw -)
  build=$(unzip -p "$ipa" "Payload/*.app/Info.plist" 2>/dev/null | plutil -extract CFBundleVersion raw -)
  echo "$ipa: v$version ($build)"
done
```

### Submit to App Store

```bash
eas submit --platform ios --path <your-build>.ipa
```

---

## iOS Cloud Build Flow (Alternative)

Use EAS cloud if local tooling is unavailable:

```bash
npx eas-cli build -p ios --profile production
eas submit --platform ios --latest
```

### Notes

- Requires Apple Developer account and App Store Connect app record
- `eas.json` enables auto-incrementing build numbers for production
- If applicable, set `ios.infoPlist.ITSAppUsesNonExemptEncryption=false` in `app.json`
  - Only valid if your app does not use non-exempt encryption

---

## Web Deployment

Export static web build:

```bash
npx expo export --platform web
```

Optional Expo hosting:

```bash
npx eas-cli deploy --prod
```

---

## Non-Goals of This Template

This template does **not** aim to:

- Provide a finished app
- Lock you into a specific state library
- Hide complexity behind magic abstractions
- Optimize prematurely

It exists to keep projects **clean as they grow**, especially under AI-assisted development.

---

## Final Note to AI Agents

This repository is designed to **resist entropy**.

If your change:

- increases coupling
- hides responsibility
- introduces duplication
- prioritizes speed over structure

Stop and refactor.

Read `AGENTS.md`.
