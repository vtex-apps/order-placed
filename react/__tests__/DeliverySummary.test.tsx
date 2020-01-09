import React from 'react'

import DeliverySummary from '../DeliverySummary'
import { orderGroupQuery as fiftyItemOrder } from '../mocks/fiftyItemOrder'
import { renderWithOrderGroup } from '../utils/testUtils'

it('renders the number of items', () => {
  const { queryByText } = renderWithOrderGroup(
    fiftyItemOrder.orderGroup,
    <DeliverySummary />
  )

  expect(queryByText(/20 items/)).toBeTruthy()
})

it('renders the number of deliveries', () => {
  const { queryByText } = renderWithOrderGroup(
    fiftyItemOrder.orderGroup,
    <DeliverySummary />
  )

  expect(queryByText(/9 deliveries/)).toBeTruthy()
})

it('renders the shipping address', () => {
  const { queryByText } = renderWithOrderGroup(
    fiftyItemOrder.orderGroup,
    <DeliverySummary />
  )

  expect(queryByText(/praia de botafogo, 300/i)).toBeTruthy()
})
