import React from 'react'

import { orderGroupQuery as onePickup } from '../mocks/onePickupSimple'
import { orderGroupQuery as twoPickups } from '../mocks/twoPickups'
import { renderWithOrder } from '../utils/testUtils'
import PickupItems from '../PickupItems'

it('should render StorePickUpHeader with shipping estimate and receiver info', () => {
  const { getByText } = renderWithOrder(onePickup.orderGroup, <PickupItems />)

  expect(getByText('Pickup')).toBeDefined()
  expect(getByText('TranslateEstimate')).toBeDefined()
  expect(getByText('Victor Hugo')).toBeDefined()
  expect(getByText('não entre de sunga não entre sem sunga')).toBeDefined()
})

it('should render pickup counter when multiple store pickups', () => {
  const { queryAllByText } = renderWithOrder(
    twoPickups.orderGroup,
    <PickupItems />
  )

  expect(queryAllByText(/- n˚ \d of \d/)).toHaveLength(2)
})

it('should not pickup counter when there is only one store pickup', () => {
  const { queryByText } = renderWithOrder(onePickup.orderGroup, <PickupItems />)

  expect(queryByText(/ - n˚ \d of \d/)).toBeNull()
})

it('should render product list', () => {
  const { queryAllByText } = renderWithOrder(
    twoPickups.orderGroup,
    <PickupItems />
  )

  expect(queryAllByText('Pickup múltiplas SLAs RJ Tipo 1')).toHaveLength(2)
})
