---
name: spec-driven-gh-issues
description: Generate high-quality, spec-driven GitHub issues that are unambiguous, implementable, testable, and aligned with global architecture. Use when creating or refining issues for this repo, especially when requirements must be sourced from `.ai/spec/` and work will proceed via `gh issue develop <ISSUE_NUMBER>`.
---

# Spec-Driven GitHub Issues (React Native)

Produce GitHub issues that are:
- unambiguous and implementable
- aligned with system architecture (think globally)
- testable and verifiable
- structured for iterative delivery
- linked to `.ai/spec/` as the source of truth
- compatible with `gh issue develop <ISSUE_NUMBER>`

---

## Inputs (gather first; use defaults if missing)

Collect these from the requester. If anything is missing, ask targeted questions and mark unknowns as `TBD` in the issue until confirmed.

1. **Feature name**: `TBD`
2. **Problem statement / motivation**: `TBD`
3. **Target users + scenarios**: `TBD`
4. **Scope boundaries**:
   - In-scope: `TBD`
   - Out-of-scope (non-goals): `TBD`
5. **Relevant specs** in `.ai/spec/`:
   - Existing spec paths: `TBD`
   - If missing: create/update spec first (see “Spec-first rule”)
6. **Affected modules**: UI / domain / data / navigation / services / infra (list): `TBD`
7. **Constraints**:
   - Performance: `TBD`
   - Offline / caching: `TBD`
   - Accessibility: `TBD`
   - Platform differences (iOS/Android): `TBD`
8. **Definition of Done** expectations: `TBD`
9. **Acceptance criteria style**:
   - Choose one: `gherkin` | `bullets` (default: `bullets`)

### Defaults (use when not provided)
- **Acceptance criteria style**: `bullets`
- **Rollout**: behind a feature flag if user impact is non-trivial
- **Telemetry/logging**: only if it materially reduces debugging risk or is needed for rollout measurement

---

## Spec-first rule (non-negotiable)

If a spec does not exist or is outdated, **create/update the spec first** in `.ai/spec/` before finalizing the issue.

- The issue must link to the spec in **Spec References** and treat it as the **source of truth**.
- The issue must not reinterpret ambiguous requirements; instead, push clarification into the spec.

Note: if the repo currently uses `.ai/specs/` instead of `.ai/spec/`, align the project by adding/moving specs so the issue can reference `.ai/spec/...` consistently.

---

## Preflight: Think Globally (checklist)

- [ ] Have I read the relevant `.ai/spec/` docs?
- [ ] Does this change introduce duplication elsewhere?
- [ ] Is state ownership clear and minimal?
- [ ] Does this require a shared abstraction rather than a local patch?
- [ ] Are there cross-platform UX differences?
- [ ] Have I identified existing modules/components to reuse?
- [ ] Is there a simpler approach with fewer moving parts?
- [ ] Does this align with composition-first component design?
- [ ] Have I described error/loading/empty states?
- [ ] Can a reviewer verify acceptance criteria without guessing?

---

## Issue quality rules (enforce in every issue)

- **No ambiguous language**: avoid “should/maybe/ideally” unless paired with measurable criteria.
- **Verifiable acceptance criteria**: a reviewer can validate without tribal knowledge.
- **Explicit edge cases**: include failure modes + boundaries (empty, partial, slow, offline, permission denied, etc.).
- **UX completeness**: loading, empty, error, retry, and disabled states are specified.
- **Platform specifics**: call out iOS vs Android behavior when it may diverge.
- **State ownership expectations**:
  - state lives “as high as necessary, no higher”
  - UI state vs domain state is separated
  - ownership boundaries are explicit (who reads/writes)
  - avoid prescribing a single library; focus on principles
- **Dependencies**: list required prior refactors and external dependencies explicitly.
- **Global architecture impact**: always include an “impact” section; avoid local hotfix framing.
- **Iterative delivery**: break down into small, reviewable steps with checkpoints.

---

## Implementation outline guidance (high-level; avoid micro-design)

Write the **Proposed Approach** and **Task Breakdown** to be:
- **High-level and modular**: identify where responsibilities belong (hooks/services/components) without prescribing every function signature.
- **Re-use first**: name existing modules to extend, not new ones to duplicate.
- **Clear seams**: note where logic should be testable without UI rendering.
- **Incremental**: deliver vertical slices (spec → scaffolding → minimal UI → edge cases → rollout).

Avoid:
- pixel-perfect instructions in the issue (put those in design artifacts/specs if needed)
- overfitting to one implementation technique
- “do everything in one PR”

---

## Copy-paste GitHub Issue Template (use exact sections/order)

### 1. Title
`[Feature] <feature name>`

### 2. Context
- Why now?:
- Background / links:
- Related issues/PRs:
- Global architecture impact (what modules/patterns are affected and why):

### 3. Problem
- Current behavior:
- User pain / business cost:
- Root cause (if known):

### 4. Goals
- Goal 1:
- Goal 2:

### 5. Non-Goals
- Non-goal 1:
- Non-goal 2:

### 6. User Stories / Scenarios
- Primary user(s):
- Scenario 1:
- Scenario 2:

### 7. Spec References
- `.ai/spec/<spec-file>.md` (source of truth)
- Any supporting docs:

### 8. Proposed Approach (High-Level)
- Approach summary:
- Key components/services/hooks to introduce or extend:
- Dependencies / prerequisites (refactors, libraries, backend changes):
- Phasing (iterative milestones):

### 9. Architecture & State Ownership
- Where state lives (UI vs domain vs persisted):
- Ownership boundaries (who can mutate what):
- Data flow (inputs → transforms → outputs):
- Reuse plan (existing modules/components to leverage):

### 10. UX Requirements
- Screens/entry points:
- Loading states:
- Empty states:
- Error states + recovery (retry, fallback, messaging):
- Accessibility requirements (labels, focus, touch targets):
- Platform differences (iOS vs Android):

### 11. API / Data Requirements (if applicable)
- Data sources:
- New/changed endpoints or storage:
- Caching/offline expectations:
- Validation and error mapping:

### 12. Acceptance Criteria
Choose one format and keep it consistent.

**Option A — Bullets (default)**
- [ ] AC1 (measurable and reviewable):
- [ ] AC2:

**Option B — Gherkin**
```gherkin
Scenario: <name>
  Given <precondition>
  When <action>
  Then <verifiable outcome>
```

### 13. Edge Cases
- Edge case 1:
- Edge case 2:
- Failure modes (network, auth, permissions, timeouts, partial data):

### 14. Telemetry / Logging (if applicable)
- Events/metrics needed (name + purpose):
- Sampling/privacy considerations:
- What success looks like (measurable signal):

### 15. Test Plan
- Unit tests (pure logic; fast):
- Integration tests (module boundaries; mocked dependencies where appropriate):
- E2E / smoke tests (critical user paths):
- Manual QA checklist (platform-specific):

### 16. Rollout / Migration Plan
- Feature flag (name, default state, targeting):
- Staged rollout plan (internal → beta → GA):
- Migration notes (data/schema, backward compatibility):
- Rollback plan:

### 17. Risks & Mitigations
- Risk 1:
- Mitigation:
- Risk 2:
- Mitigation:

### 18. Task Breakdown (small, reviewable steps)
- [ ] Confirm/author `.ai/spec/<spec-file>.md`
- [ ] Add scaffolding (types/interfaces/route wiring) behind flag
- [ ] Implement minimal happy path (vertical slice)
- [ ] Add UX states (loading/empty/error) + platform-specific checks
- [ ] Add edge case handling + telemetry (if needed)
- [ ] Add tests per Test Plan
- [ ] Rollout/migration steps + docs updates

---

## `gh` workflow (issue → branch → work)

1. Create the issue using the template above.
2. Start implementation:
   ```bash
   gh issue develop <ISSUE_NUMBER>
   ```
3. Branch naming suggestion:
   - `issue/<ISSUE_NUMBER>-short-slug`

