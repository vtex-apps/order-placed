import React from 'react'

import { render } from '../testUtils'
import OrderHeader from '../components/OrderInfo/OrderHeader'
import OrderInfo from '../components/OrderInfo'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as onePickUp } from '../mocks/onePickupSimple'
import { orderGroupQuery as twoCreditCards } from '../mocks/twoCreditCards'
import { orderGroupQuery as splitOrder } from '../mocks/splitOrderTwoSellers'
import { orderGroupQuery as promissory } from '../mocks/promissoryPayment'
import { orderGroupQuery as multipleDeliveries } from '../mocks/bankInvoice'
import { orderGroupQuery as takeAwayOnly } from '../mocks/oneTakeAway'

const getOrderFromOrderGroup = (orderGroup, index) => {
  return orderGroup[index]
}

describe('OrderHeader', () => {
  it('should render correct order number and options', () => {
    const orderInfo = getOrderFromOrderGroup(oneDelivery.orderGroup, 0)
    const { getByText } = render(
      <OrderHeader orderInfo={orderInfo} runtime={{ account: 'vtexgame1' }} />
    )

    const orderId = 'Order #905691102273-01'
    const updateOrder = 'Update order'
    const myOrders = 'My Orders'
    const cancelOrder = 'Cancel order'

    expect(getByText(orderId)).toBeDefined()
    expect(getByText(updateOrder)).toBeDefined()
    expect(getByText(myOrders)).toBeDefined()
    expect(getByText(cancelOrder)).toBeDefined()
  })

  it('should render different buttons for take away orders', () => {
    const orderInfo = getOrderFromOrderGroup(takeAwayOnly.orderGroup, 0)
    const { getByText } = render(
      <OrderHeader
        orderInfo={orderInfo}
        runtime={{ account: 'vtexgame1' }}
        takeaway
      />
    )

    const reprintReceipt = 'Reprint receipt'
    const cancelOrder = 'Cancel purchase'

    expect(getByText(reprintReceipt)).toBeDefined()
    expect(getByText(cancelOrder)).toBeDefined()
  })

  it('should render seller name for an order processed by another seller', () => {
    const orderInfo = getOrderFromOrderGroup(splitOrder.orderGroup, 1)
    const { getByText } = render(
      <OrderHeader
        orderInfo={orderInfo}
        splitOrder
        runtime={{ account: 'vtexgame1' }}
      />
    )

    const seller = 'Sold and deliveried by'

    expect(getByText(seller)).toBeDefined()
  })
})

describe('Order split notice', () => {
  it('should render OrderSplitNotice', () => {
    const orderInfo = getOrderFromOrderGroup(multipleDeliveries.orderGroup, 0)
    const { getByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={multipleDeliveries.orderGroup.length > 1}
      />
    )

    expect(
      getByText(
        'Your order was split into 3 deliveries. Products that are closer to their delivery address will arrive faster!'
      )
    ).toBeDefined()
  })
})

describe('Payment methods', () => {
  it('should render credit card info', () => {
    const orderInfo = getOrderFromOrderGroup(oneDelivery.orderGroup, 0)
    const { getByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={oneDelivery.orderGroup.length > 1}
      />
    )
    expect(getByText('Credit card')).toBeDefined()
  })

  it('should render credit card info for two credit cards', () => {
    const orderInfo = getOrderFromOrderGroup(twoCreditCards.orderGroup, 0)
    const { queryAllByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={twoCreditCards.orderGroup.length > 1}
      />
    )
    expect(queryAllByText('Credit card')).toHaveLength(2)
  })

  it('should render bank invoice payment method', () => {
    const orderInfo = getOrderFromOrderGroup(multipleDeliveries.orderGroup, 0)
    const { getByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={multipleDeliveries.orderGroup.length > 1}
      />
    )

    expect(getByText('Boleto Bancário')).toBeDefined()
  })

  it('should render custom payment method (Cash)', () => {
    const orderInfo = getOrderFromOrderGroup(promissory.orderGroup, 0)
    const { getByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={promissory.orderGroup.length > 1}
      />
    )

    expect(getByText('Cash')).toBeDefined()
  })
})

describe('Shippings', () => {
  it('should render Shipping if there are items for delivery', () => {
    const orderInfo = getOrderFromOrderGroup(oneDelivery.orderGroup, 0)
    const { getByTestId } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={oneDelivery.orderGroup.length > 1}
      />
    )
    expect(getByTestId('shipping-header')).toBeDefined()
  })

  it('should not render Shipping if there are no items for delivery', () => {
    const orderInfo = getOrderFromOrderGroup(onePickUp.orderGroup, 0)
    const { queryByTestId } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={onePickUp.orderGroup.length > 1}
      />
    )
    expect(queryByTestId('shipping-header')).toBeNull()
  })
})

describe('Store Pickups', () => {
  it('should render StorePickUp if there are items to be picked-up', () => {
    const orderInfo = getOrderFromOrderGroup(onePickUp.orderGroup, 0)
    const { queryByTestId } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={onePickUp.orderGroup.length > 1}
      />
    )
    expect(queryByTestId('storepickup-header')).toBeDefined()
  })

  it('should not render StorePickUp if there are no items for pickup', () => {
    const orderInfo = getOrderFromOrderGroup(oneDelivery.orderGroup, 0)
    const { queryByTestId } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={oneDelivery.orderGroup.length > 1}
      />
    )
    expect(queryByTestId('storepickup-header')).toBeNull()
  })
})
