import React from 'react'

import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { renderWithOrder } from '../utils/testUtils'
import OrderNumber from '../OrderNumber'

test('should render correct order number', () => {
  const { getByText } = renderWithOrder(oneDelivery.orderGroup, <OrderNumber />)

  const orderId = 'Order #905691102273-01'

  expect(getByText(orderId)).toBeTruthy()
})
