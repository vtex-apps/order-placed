import React from 'react'

import ConfirmationIcon from '../ConfirmationIcon'
import ConfirmationTitle from '../ConfirmationTitle'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { renderWithOrderGroup } from '../utils/testUtils'

test('should render success icon', () => {
  const { getByTestId } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <ConfirmationIcon />
  )

  const icon = getByTestId('sucessIcon')
  expect(icon).toBeTruthy()
})

test('should render thank you message', () => {
  const { getByText } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <ConfirmationTitle />
  )

  const thankYouMessage = getByText(/Thank you for your purchase!/)
  expect(thankYouMessage.textContent).toBeTruthy()
})
