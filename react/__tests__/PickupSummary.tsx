import React from 'react'

import OrderPlacedSummary from '../PickupSummary'
import { orderGroupQuery as deliveryAndPickup } from '../mocks/pickupAndDelivery'
import { renderWithOrderGroup } from '../utils/testUtils'

// TODO: better tests
it('renders the pickup summary when there are shippings and store pickups in the same purchase', () => {
  const { getByTestId } = renderWithOrderGroup(
    deliveryAndPickup.orderGroup,
    <OrderPlacedSummary />
  )

  expect(getByTestId('summary-pickup')).toBeTruthy()
})
