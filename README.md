# order-placed

VTEX IO Store Framework app that renders the **order confirmation page** shown to customers after a purchase. Pre-installed on all VTEX stores.

## How to Run

Requires: VTEX CLI (`npm i -g vtex`) and Node.js with yarn.

```bash
yarn install
yarn --cwd react install
vtex link        # Links the app to your VTEX workspace for development
```

## How to Use

The app exports composable blocks (e.g., `order-placed`, `op-order`, `op-section`). See [`docs/README.md`](docs/README.md) for the full block API, props, CSS Handles, and composition examples.

## How to Test

```bash
yarn test          # Run Jest tests
yarn locales:lint  # Validate i18n key parity across all locales
yarn verify        # lint + locales:lint + test (run before opening a PR)
```

## How to Publish

Releases are managed via [releasy](https://github.com/vtex/releasy). After merging to `master`, run:

```bash
releasy patch   # or minor / major
```

This bumps the version in `manifest.json`, tags the commit, and the `postreleasy` script runs `vtex publish --public`.

## Documentation

- Block API & CSS Handles: [`docs/README.md`](docs/README.md)
- Changelog: [`CHANGELOG.md`](CHANGELOG.md)
- App manifest: [`manifest.json`](manifest.json)
- Agent context: [`AGENTS.md`](AGENTS.md)
- Specs: `specs/` (created on demand per feature)
