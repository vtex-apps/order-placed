import React from 'react'

import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as pickupAndDelivery } from '../mocks/pickupAndDelivery'
import { renderWithOrder } from '../utils/testUtils'
import SummaryDisplayController from '../SummaryDisplayController'

it("doesn't render children if order has no pickup and delivery packages", () => {
  const { queryByText } = renderWithOrder(
    oneDelivery.orderGroup,
    <SummaryDisplayController>foo</SummaryDisplayController>
  )

  expect(queryByText('foo')).toBeFalsy()
})

it('renders children if order has both pickup and delivery packages', () => {
  const { queryByText } = renderWithOrder(
    pickupAndDelivery.orderGroup,
    <SummaryDisplayController>foo</SummaryDisplayController>
  )

  expect(queryByText('foo')).toBeTruthy()
})
