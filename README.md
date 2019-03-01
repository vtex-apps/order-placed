# OrderPlaced

The OrderPlaced app for VTEX IO Stores, replacing checkout-confirmation-ui.

## IO Store

This app is made to be a store component and be placed as a dependency at VTEX IO Store. Althought it may also work on it's own, but without analytics.

## Order Group Query

As a dependency to this app is `vtex.order-placed-graphql`, which exposes a GraphQL query defined as `getOrderGroup($orderGroup: String)` that receives an order group identification number and fetches the relevant data to the `OrderPlaced` component. This order group identification number needed for this app to work is obtained from the URL under which it is rendered, normally in this format: `.../checkout/orderPlaced?og=<orderGroupNumber>`, as a query parameter. Whithout this query parameter `og`, the GraphQL query cannot be performed and the app will not render.

## Dependencies

This app depends on:

- `vtex.order-placed-graphql`
- `vtex.styleguide`
- `vtex.order-details`
- `vtex.shipping-estimate-translator`
- `vtex.address-form`
- `vtex.profile-form`
- `vtex.pixel-manager`
