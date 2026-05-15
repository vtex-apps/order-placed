# order-placed Constitution

## Core Principles

### I. VTEX IO Platform Constraints (NON-NEGOTIABLE)
All code must target the VTEX IO platform. This means:
- React components are written in TypeScript and live exclusively in `react/`
- Block definitions (interfaces, routes, blocks) live exclusively in `store/`
- i18n strings live in `messages/` and must be present in every locale file
- The platform resolves `vtex.*` dependencies — do not attempt to install or bundle them via npm
- `manifest.json` controls the app version and builder config — changes require human approval

### II. Public API Stability (NON-NEGOTIABLE)
The following are public-facing contracts that merchants depend on:
- Exported blocks defined in `store/` (e.g., `order-placed`, `op-order`, `op-section`, etc.)
- CSS Handles exposed via `useCssHandles` (merchants use these in custom CSS)
- React hooks exported from `OrderGroupContext` and `OrderContext` (`useOrderGroup`, `useOrder`)

Never remove, rename, or change the signature of any of these without explicit human approval and a major version bump.

### III. CSS Handles Over Direct Classes
Styling is always done via CSS Handles (`useCssHandles` from `vtex.css-handles`). Never use inline styles, hardcoded class names, or CSS modules. New UI elements must declare their handle names in the component and document them in `docs/README.md`.

### IV. i18n Completeness
Every new message string must be:
- Defined with a unique key in `react/` via `useIntl`
- Added to **all** locale files in `messages/` (enforced by `yarn locales:lint`)
Missing keys in any locale file will block CI.

### V. Test Coverage for Changes
Bug fixes must include a failing test that reproduces the bug before the fix. New components or features should have test coverage in `react/__tests__/`.

## Quality Gates

| Gate | Command | Requirement |
|---|---|---|
| Lint | `yarn lint` | Zero errors |
| i18n parity | `yarn locales:lint` | All keys present in all locales |
| Type check | `yarn --cwd react tsc --noEmit` | Zero errors |
| Tests | `yarn test` | All pass |
| Full verify | `yarn verify` | Must pass before opening a PR |

## Architecture Constraints

- Components that consume order data must use the Context hooks (`useOrderGroup`, `useOrder`), not prop drilling from `index.tsx`
- GraphQL queries are in `react/graphql/`. Do not fetch data outside of GraphQL or the existing Apollo client setup
- Do not introduce new state management libraries — the existing React Context pattern is sufficient
- Do not add external npm dependencies to `react/package.json` without human approval; prefer VTEX IO platform-provided dependencies

## What Agents Cannot Change Without Human Approval

- `manifest.json` (any field)
- Exported block names in `store/`
- CSS Handle names (removing or renaming existing ones)
- Public hook signatures (`useOrderGroup`, `useOrder`)
- New npm dependencies in `react/package.json`
- `.github/` workflows or CI configuration
- Release scripts or CHANGELOG process

## Governance

This constitution supersedes individual file-level comments and ad-hoc instructions. Amendments require a PR with explicit justification. Temporary deviations must be documented as TBD in the spec.

**Version**: 1.0.0 | **Ratified**: 2026-05-15 | **Last Amended**: 2026-05-15
