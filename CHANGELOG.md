# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `store.orderplaced` interface definition, previously contained in `vtex.store`.
- `/checkout/orderPlaced` route definition, also from `vtex.store`.

## [1.7.1] - 2019-11-21

### Fixed

- Use `vtex.totalizer-translator` to correctly list all taxes applied to an order.

## [1.7.0] - 2019-11-21

### Added

- **de** translations.

## [1.6.0] - 2019-11-01

### Added

- Install Promotion Banner at the end of the page.

## [1.5.0] - 2019-09-09

### Added

- Docs builder.

## [1.4.3] - 2019-09-02

### Fixed

- Translation of "you'll" to "you will".

## [1.4.2] - 2019-08-07

### Fixed

- Links to the bank invoice. The user has to be signed in to see it.

## [1.4.1] - 2019-08-06

### Fixed

- Use **bankIssuedInvoiceIdentificationNumber** instead of **bankIssuedInvoiceBarCodeNumber** to be copied to the clipboard.

## [1.4.0] - 2019-07-26

### Added

- Extension point at the top of the Order Placed.

## [1.3.0] - 2019-07-24

### Added

- **connector response** information to `PaymentMethod` component for **Multibanco** payments.

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
