# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **connector response** information to `PaymentMethod` component for **Multibanco** payments.
- Generic `context.json` file to `messages` folder.
- **en**, **es** and **pt** translations for **Multibanco** labels.

## [1.2.6] - 2019-07-18

### Fixed

- Removed `context.json` from wrong location.

## [1.2.5] - 2019-07-17

### Fixed

- Add a `context.json` as a fallback for a builder-hub bug.

## [1.2.4] - 2019-07-17

### Fixed

- Wrong translation of `unit` and `units` after erroneous rebase.

## [1.2.3] - 2019-07-12

### Changed

- Intl messages to meet the requirements of the new **messages** builder api.

### Fixed

- Check for the existence of a payment before retrieving values on `getPaymentGroupFromOrder`.

## [1.2.2] - 2019-06-27

### Fixed

- Wrong translation of `unit` and `units`.

## [1.2.1] - 2019-06-10

### Fixed

- Order placed page breaking when user is not logged in.

## [1.2.0] - 2019-05-27

### Changed

- Migrate to pixel manager v1.

## [1.1.1] - 2019-03-28

### Fixed

- Typo on Spanish translation

## [1.1.0] - 2019-03-28

### Added

- Spanish messages

### Changed

- Testing is now made with @vtex/test-tools

### Fixed

- Unnecessary keys were removed
- Missing pontuation on a few messages

## [1.0.1] - 2019-03-22

### Changed

- Minor accessibility improvements.

## [1.0.0] - 2019-03-01

### Added

- Analytics support for Google Tag Manager

### Changed

- GraphQL query `orderGroup`

## [0.1.4] - 2019-02-22

### Fix

- Inconsistent product image height

### Fix

- Layout fix on Warnings component

## [0.1.3] - 2019-02-22

### Fix

- Small layout bug on OrderTotals

## [0.1.2] - 2019-02-22

## [0.1.1] - 2019-02-21

## [0.1.0] - 2019-02-21

## Added

- Release first public version

## [0.0.1-beta.0] - 2019-01-25

## [0.0.1-beta] - 2019-01-21

### Added

- Initialize repo, with vtex.order-placed-graphql as a dependency.
