import React from 'react'

import OrderPlacedSummary from '../OrderPlacedSummary'
import { orderGroupQuery as deliveryAndPickup } from '../mocks/pickupAndDelivery'
import { renderWithOrderGroup } from './utils'

it('should render summary when there are shippings and store pickups in the same purchase', () => {
  const { getByTestId } = renderWithOrderGroup(
    deliveryAndPickup.orderGroup,
    <OrderPlacedSummary />
  )

  const summaryPageBlock = getByTestId('summary')

  expect(summaryPageBlock).toBeTruthy()
})
