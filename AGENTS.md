# order-placed — Agent Context

## Project Purpose

`vtex.order-placed` is a VTEX IO Store Framework app that renders the **order confirmation page** shown to customers immediately after a purchase. It displays order metadata (number, date, seller), payment info, delivery and pickup packages, order total, bank invoice section (when applicable), and a print button.

It is pre-installed on all VTEX stores. Merchants compose the page using the exported blocks described in `docs/README.md`.

## Sources of Truth

- Full block API, CSS Handles, and composition examples: [`docs/README.md`](docs/README.md)
- Changelog: [`CHANGELOG.md`](CHANGELOG.md)
- App manifest (version, builders, dependencies): [`manifest.json`](manifest.json)

## Stack

| Layer | Technology |
|---|---|
| Language | TypeScript + React 16 |
| Platform | VTEX IO (react builder 3.x, store builder 0.x, messages builder 1.x, docs builder 0.x) |
| UI components | `vtex.styleguide` |
| Data | GraphQL via `vtex.order-placed-graphql` |
| State | React Context (`OrderGroupContext`, `OrderContext`) |
| i18n | `react-intl` + VTEX messages builder (files in `messages/`) |
| Testing | Jest with `@vtex/test-tools` |
| Linting | ESLint (`eslint-config-vtex` + `eslint-config-vtex-react`) + Prettier |

## Repository Structure

```
react/           # React components (TypeScript)
  components/    # Sub-components
  graphql/       # GraphQL queries
  typings/       # TypeScript type declarations
  __tests__/     # Jest tests
  __mocks__/     # Jest mocks
store/           # VTEX Store Framework block definitions (JSON/JSONC)
messages/        # i18n translation files (en.json, pt.json, es.json, etc.)
docs/            # Component documentation (README.md with blocks API)
```

## Local Setup

Requires:
- VTEX CLI (`vtex`) — install via `npm i -g vtex`
- Node.js (yarn as package manager)

```bash
# Install root dependencies
yarn install

# Install react dependencies
yarn --cwd react install

# Link to your VTEX workspace for development
vtex link
```

## Verified Commands

```bash
yarn lint           # ESLint check
yarn format         # Prettier format (writes in place)
yarn test           # Jest tests (runs inside react/)
yarn locales:lint   # Validate i18n message parity across locales
yarn verify         # lint + locales:lint + test (use before opening a PR)
```

## Architectural Constraints

- All UI components live in `react/`. Do not create components outside this directory.
- Block definitions (composition and props) live in `store/`. Block names exported from `manifest.json` must match.
- i18n strings live in `messages/`. Each message key must be present in **all locale files** (`locales:lint` enforces this).
- CSS customization happens via **CSS Handles** (`vtex.css-handles`). Do not use inline styles or hardcoded class names.
- GraphQL queries live in `react/graphql/`. Data fetching is done via `react-apollo`.
- Context consumers must use the exported hooks: `useOrderGroup` (from `OrderGroupContext`) and `useOrder` (from `OrderContext`).
- Do not add npm dependencies to `react/package.json` without justification — VTEX IO manages most dependencies via the platform.

## Project-Specific Patterns

- **CSS Handles**: Use `useCssHandles` from `vtex.css-handles` for all CSS classes. Never hardcode class names.
- **i18n**: Use `react-intl`'s `useIntl` hook and message IDs defined in `messages/`. All new messages must be added to every locale file.
- **Block props**: Props declared in `store/` interfaces must be typed in the corresponding React component.
- **Testing**: Tests live in `react/__tests__/`. Mocks for VTEX IO dependencies are in `react/__mocks__/`. Run tests with `yarn test` (delegates to `yarn --cwd react test`).

## Expected Skills

For development tasks, agents should use the following skills in order:

| Flow | Skill |
|---|---|
| SDD Lite — Write spec | `/specification` |
| SDD Lite — Implement from spec | `/implementing` |
| SDD Full — Project constitution | `/speckit-constitution` |
| SDD Full — Write spec | `/speckit-specify` |
| SDD Full — Implementation plan | `/speckit-plan` |
| SDD Full — Tasks | `/speckit-tasks` |
| SDD Full — Implement | `/speckit-implement` |

## Expected MCPs

This repository does not require external MCPs. It is a VTEX IO Store Framework app with no Admin UI, AI Workspace backend, or cross-repository dependencies. Use the GitHub MCP only if cross-repo pattern lookup is needed during implementation.

## Autonomy Limits

Agents MAY do autonomously:
- Add or modify React components, tests, and CSS handles
- Add or update i18n messages (must update all locale files)
- Fix linting, type errors, or test failures
- Refactor internal component logic

Agents MUST ask for human approval before:
- Changing `manifest.json` (version, builders, dependencies, policies)
- Removing or renaming exported blocks (breaking change for stores)
- Removing or renaming CSS Handles (breaking change for merchants)
- Changing public hook APIs (`useOrderGroup`, `useOrder`)
- Adding new npm dependencies to `react/package.json`
- Modifying CI/CD or release configuration
