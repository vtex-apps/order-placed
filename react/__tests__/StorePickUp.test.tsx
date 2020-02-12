import React from 'react'
import { render } from '@vtex/test-tools/react'

import StorePickUp from '../components/StorePickUp'
import { orderGroupQuery as onePickup } from '../mocks/onePickupSimple'
import { orderGroupQuery as twoPickups } from '../mocks/twoPickups'

describe('Store Pickup', () => {
  it('should render StorePickUpHeader with shipping estimate and receiver info', () => {
    const order = onePickup.orderGroup.orders[0]
    const pickup = order.pickUpParcels
    const { getByText } = render(<StorePickUp pickUpPackages={pickup} />)

    expect(getByText('Pickup')).toBeDefined()
    expect(getByText('TranslateEstimate')).toBeDefined()
    expect(getByText('Victor Hugo')).toBeDefined()
    expect(getByText('não entre de sunga não entre sem sunga')).toBeDefined()
  })

  it('should render pickup counter when multiple store pickups', () => {
    const order = twoPickups.orderGroup.orders[0]
    const pickup = order.pickUpParcels
    const { queryAllByText } = render(<StorePickUp pickUpPackages={pickup} />)

    expect(queryAllByText(/- n˚ \d of \d/)).toBeTruthy()
  })

  it('should not pickup counter when there is only one store pickup', () => {
    const order = onePickup.orderGroup.orders[0]
    const pickup = order.pickUpParcels
    const { queryByText } = render(<StorePickUp pickUpPackages={pickup} />)

    expect(queryByText(/ - n˚ \d of \d/)).toBeNull()
  })

  it('should render product list', () => {
    const order = twoPickups.orderGroup.orders[0]
    const pickup = order.pickUpParcels

    const { queryAllByText } = render(<StorePickUp pickUpPackages={pickup} />)

    expect(queryAllByText('Pickup múltiplas SLAs RJ Tipo 1')).toHaveLength(2)
  })
})
