import React from 'react'
import parcelify from '@vtex/delivery-packages'

import { render } from '../testUtils'
import StorePickUp from '../components/StorePickUp'
import { getPickUpPackagesFromParcels } from '../utils'
import { orderGroupQuery as onePickup } from '../mocks/onePickupSimple'
import { orderGroupQuery as twoPickups } from '../mocks/twoPickups'

describe('Store Pickup', () => {
  it('should render StorePickUpHeader with shipping estimate and receiver info', () => {
    const order = onePickup.orderGroup[0]
    const parcels = parcelify(order)
    const pickup = getPickUpPackagesFromParcels(parcels)
    const { getByText } = render(<StorePickUp pickUpPackages={pickup} />)

    expect(
      getByText('Pickup') &&
        getByText('TranslateEstimate') &&
        getByText('Victor Hugo') &&
        getByText('não entre de sunga não entre sem sunga')
    ).toBeDefined()
  })

  it('should render pickup counter when multiple store pickups', () => {
    const order = twoPickups.orderGroup[0]
    const parcels = parcelify(order)
    const pickup = getPickUpPackagesFromParcels(parcels)
    const { getByText } = render(<StorePickUp pickUpPackages={pickup} />)

    expect(getByText(/ - n˚ \d of \d/)).toBeDefined()
  })

  it('should render product list', () => {
    const order = twoPickups.orderGroup[0]
    const parcels = parcelify(order)
    const pickup = getPickUpPackagesFromParcels(parcels)

    const { queryAllByText } = render(<StorePickUp pickUpPackages={pickup} />)

    expect(
      queryAllByText('Pickup múltiplas SLAs RJ Tipo 1').length === 3
    ).toBeTruthy()
  })
})
