# AGENTS.md

## Purpose

This document defines **non-negotiable architectural and coding rules** for AI agents working on this React Native codebase.

Primary goals:

* Maintain long-term code quality
* Prevent architectural drift
* Avoid local hotfixes that degrade global structure
* Enforce consistency as the codebase scales
* Enable spec-driven development

If a change violates these rules, **the change is incorrect**, even if it appears to fix the immediate problem.

---

## Core Principles

### 1. Think Globally, Not Locally

Before making any change:

* Understand **how the system is structured**
* Identify **where the responsibility truly belongs**
* Prefer **architectural improvements** over local fixes
* Avoid patching symptoms in a single component

> If the fix feels like a workaround, stop and refactor the structure instead.

---

### 2. One File per Component

* Each React component **must live in its own file**
* No multiple components per file unless they are:

  * tightly coupled
  * not reusable
  * implementation details of a parent component

**Bad**

```tsx
ComponentA + ComponentB + helper logic in one file
```

**Good**

```text
ComponentA.tsx
ComponentB.tsx
```

---

### 3. Files Must Be Short

* Prefer **many small files** over fewer large ones
* A component file should:

  * be readable without scrolling excessively
  * have a single responsibility
* If a file grows:

  * extract hooks
  * extract utilities
  * extract child components

---

### 4. Clean Code Is Mandatory

Enforce:

* explicit naming
* predictable data flow
* no dead code
* no commented-out logic
* no unused exports
* no console logs in committed code

If logic is complex:

* extract it
* document it
* test it

---

## Component Design

### Component Composition

* Prefer **composition over conditionals**
* Prefer **container + presentational** separation where useful
* Components should:

  * receive data via props
  * delegate logic to hooks
  * delegate side effects to services

**Avoid**

* massive components
* deeply nested conditional rendering
* business logic inside JSX

---

## State Management Guidelines

### General Rules

* State should live **as high as necessary, but no higher**
* Avoid global state by default
* Introduce global state only when:

  * multiple distant consumers exist
  * synchronization is required

### Patterns to Prefer

* Local state for UI concerns
* Custom hooks for reusable stateful logic
* Domain-specific stores instead of generic global blobs
* Explicit state transitions

### Avoid

* God stores
* Overloaded contexts
* Implicit side effects
* Hidden state mutations

---

## Side Effects & Data Fetching

* Side effects belong in:

  * hooks
  * services
* Components should **not**:

  * fetch data directly
  * manage business workflows

Prefer:

* declarative data flow
* clear loading / error states
* predictable lifecycle behavior

---

## Spec-Driven Development

### `.ai/spec/`

This folder contains **markdown specifications** describing:

* business rules
* workflows
* system behavior
* edge cases
* non-obvious constraints

Rules:

* Every meaningful feature should have a spec
* Specs are **source of truth**
* Code must reflect the spec, not reinterpret it
* If the spec is wrong, update the spec first

Agents must **read relevant specs before coding**.

---

## Skills System

### `.ai/skills/`

This folder defines reusable **AI skills**, such as:

* refactoring patterns
* architectural decision templates
* testing strategies
* migration playbooks

Rules:

* Skills are generic and reusable
* Skills should not contain project-specific hacks
* When a task repeats, extract a skill

---

## Development Workflow

### GitHub Issues

All feature development must use:

```bash
gh issue develop <ISSUE_NUMBER>
```

Rules:

* No feature work without an issue
* Commits should reference the issue
* Scope creep is not allowed
* If the issue reveals architectural problems, address them explicitly

---

## Refactoring Expectations

AI agents are expected to:

* refactor proactively when structure degrades
* simplify before adding complexity
* remove code when it no longer serves a purpose

Refactoring is **not optional** if the design is weak.

---

## Testing

* New logic should be testable by design
* Business logic must be testable without rendering UI
* Avoid brittle UI tests
* Prefer deterministic, isolated tests

---

## Anti-Patterns (Strictly Forbidden)

* Quick fixes without architectural consideration
* Copy-pasting logic across components
* Over-engineering early, under-engineering later
* Silent error swallowing
* Mixing UI, state, and business logic

---

## Final Rule

If a change makes the codebase:

* harder to reason about
* harder to extend
* harder to test

**The change is wrong**, even if it “works”.

---

**This document is a living contract.
AI agents must follow it rigorously.**
