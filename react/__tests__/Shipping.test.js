import React from 'react'
import parcelify from '@vtex/delivery-packages'

import { render } from '../testUtils'
import Shipping from '../components/Shipping'
import { getDeliveryPackagesFromParcels } from '../utils'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as twoDeliveries } from '../mocks/twoDeliveries'

describe('Shipping (delivery)', () => {
  it('should render ShippingHeader with shipping estimate', () => {
    const order = oneDelivery.orderGroup[0]
    const parcels = parcelify(order)
    const delivery = getDeliveryPackagesFromParcels(parcels)
    const { getByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(getByText('Delivery')).toBeDefined()
    expect(getByText('TranslateEstimate')).toBeDefined()
  })

  it('should render delivery counter when multiple deliveries', () => {
    const order = twoDeliveries.orderGroup[0]
    const parcels = parcelify(order)
    const delivery = getDeliveryPackagesFromParcels(parcels)

    const { getByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(getByText(/ - n˚ \d of \d/)).toBeDefined()
  })

  it('should not render delivery counter when there is only one delivery', () => {
    const order = oneDelivery.orderGroup[0]
    const parcels = parcelify(order)
    const delivery = getDeliveryPackagesFromParcels(parcels)

    const { queryByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(queryByText(/ - n˚ \d of \d/)).toBeNull()
  })

  it('should render product list', () => {
    const order = twoDeliveries.orderGroup[0]
    const parcels = parcelify(order)
    const delivery = getDeliveryPackagesFromParcels(parcels)

    const { getByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(
      getByText('Delivery entrega agendada e Delivery com várias SLAs Tipo 1')
    ).toBeDefined()
    expect(getByText('Camisa Seleção Brasileira')).toBeDefined()
    expect(getByText('Camisa America Vermelha')).toBeDefined()
  })
})
