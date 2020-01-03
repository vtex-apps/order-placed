import React from 'react'

import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { renderWithOrder } from '../utils/testUtils'
import OrderTitle from '../OrderTitle'

it('should render correct order number', () => {
  const { getByText } = renderWithOrder(oneDelivery.orderGroup, <OrderTitle />)

  const orderId = 'Order #905691102273-01'

  expect(getByText(orderId)).toBeTruthy()
})
