import React from 'react'

import ConfirmationIcon from '../ConfirmationIcon'
import ConfirmationThanks from '../ConfirmationThanks'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { renderWithOrderGroup } from '../utils/testUtils'

it('should render success icon', () => {
  const { getByTestId } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <ConfirmationIcon />
  )

  const icon = getByTestId('sucessIcon')
  expect(icon).toBeTruthy()
})

it('should render thank you message', () => {
  const { getByText } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <ConfirmationThanks />
  )

  const thankYouMessage = getByText(/Thanks for the purchase!/)
  expect(thankYouMessage.textContent).toBeTruthy()
})
