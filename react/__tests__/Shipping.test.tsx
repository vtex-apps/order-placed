import { render } from '@vtex/test-tools/react'
import React from 'react'

import Shipping from '../components/Shipping'
import { orderGroupQuery as giftRegistry } from '../mocks/giftRegistry'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as twoDeliveries } from '../mocks/twoDeliveries'

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

  it('should render correct messsage when order is from a Gift Registry and not render address component', () => {
    const order = giftRegistry.orderGroup.orders[0]
    const delivery = order.deliveryParcels
    const registry = order.giftRegistryData

    const { queryByText, queryByTestId } = render(
      <Shipping deliveryPackages={delivery} giftRegistryData={registry} />
    )

    expect(queryByText('Address from: Lista Lucas QA')).toBeDefined()
    expect(queryByTestId('address-component')).toBeNull()
  })
})
