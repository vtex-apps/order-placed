import React from 'react'

import OrderPlacedSummary from '../DeliverySummary'
import { orderGroupQuery as deliveryAndPickup } from '../mocks/pickupAndDelivery'
import { renderWithOrderGroup } from '../utils/testUtils'

// TODO: better tests
it('renders the delivery summary when there are shippings and store pickups in the same purchase', () => {
  const { getByTestId } = renderWithOrderGroup(
    deliveryAndPickup.orderGroup,
    <OrderPlacedSummary />
  )

  expect(getByTestId('summary-delivery')).toBeTruthy()
})
