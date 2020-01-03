import React from 'react'

import { orderGroupQuery as splitOrder } from '../mocks/splitOrderTwoSellers'
import { renderWithOrder } from '../utils/testUtils'
import OrderSeller from '../OrderSeller'

it('should render seller name for an order processed by another seller', () => {
  const { getByText } = renderWithOrder(splitOrder.orderGroup, <OrderSeller />)

  const seller = 'Sold and delivered by'
  expect(getByText(seller)).toBeTruthy()
  expect(
    getByText(splitOrder.orderGroup.orders[0].sellers[0].name)
  ).toBeTruthy()
})
