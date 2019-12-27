import React from 'react'

import OrderPlacedConfirmation from '../OrderPlacedConfirmation'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { renderWithOrderGroup } from './utils'

it('should render success icon', () => {
  const { getByTestId } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <OrderPlacedConfirmation />
  )

  const icon = getByTestId('sucessIcon')
  expect(icon).toBeTruthy()
})

it('should render thank you message', () => {
  const { getByText } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <OrderPlacedConfirmation />
  )

  const thankYouMessage = getByText(/Thanks for the purchase!/)
  expect(thankYouMessage.textContent).toBeTruthy()
})
