import React from 'react'

import Shipping from '../components/Shipping'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as twoDeliveries } from '../mocks/twoDeliveries'
import { render } from '../testUtils'

describe('Shipping (delivery)', () => {
  it('should render ShippingHeader with shipping estimate', () => {
    const order = oneDelivery.orderGroup.orders[0]
    const delivery = order.deliveryParcels
    const { getByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(getByText('Delivery')).toBeDefined()
    expect(getByText('TranslateEstimate')).toBeDefined()
  })

  it('should render delivery counter when multiple deliveries', () => {
    const order = twoDeliveries.orderGroup.orders[0]
    const delivery = order.deliveryParcels

    const { getByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(getByText(/ - n˚ \d of \d/)).toBeDefined()
  })

  it('should not render delivery counter when there is only one delivery', () => {
    const order = oneDelivery.orderGroup.orders[0]
    const delivery = order.deliveryParcels

    const { queryByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(queryByText(/ - n˚ \d of \d/)).toBeNull()
  })

  it('should render product list', () => {
    const order = twoDeliveries.orderGroup.orders[0]
    const delivery = order.deliveryParcels

    const { getByText } = render(<Shipping deliveryPackages={delivery} />)

    expect(
      getByText('Delivery entrega agendada e Delivery com várias SLAs Tipo 1')
    ).toBeDefined()
    expect(getByText('Camisa Seleção Brasileira')).toBeDefined()
    expect(getByText('Camisa America Vermelha')).toBeDefined()
  })
})
