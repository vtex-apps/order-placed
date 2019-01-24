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

    expect(getByText(orderId)).toBeDefined() &&
      expect(getByText(updateOrder)).toBeDefined() &&
      expect(getByText(myOrders)).toBeDefined() &&
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

    expect(getByText('Alert')).toBeDefined()
  })
})

describe('Payment methods', () => {
  it('should render credit card info (one or two)', () => {
    let orderInfo = getOrderFromOrderGroup(oneDelivery.orderGroup, 0)
    const { getByText, queryAllByText, rerender } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={oneDelivery.orderGroup.length > 1}
      />
    )

    const singleCard = getByText('Credit card')

    orderInfo = getOrderFromOrderGroup(twoCreditCards.orderGroup, 0)
    rerender(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={twoCreditCards.orderGroup.length > 1}
      />
    )

    const multipleCards = queryAllByText('Credit card')

    expect(singleCard).toBeDefined() && expect(multipleCards.length).toEqual(2)
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

    expect(getByText('Bank Invoice')).toBeDefined()
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
  it('should render Shipping only if there are items for delivery', () => {
    let orderInfo = getOrderFromOrderGroup(oneDelivery.orderGroup, 0)
    const { getByTestId, rerender, queryByTestId } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={oneDelivery.orderGroup.length > 1}
      />
    )
    expect(getByTestId('shipping-header')).toBeDefined()

    orderInfo = getOrderFromOrderGroup(onePickUp.orderGroup, 0)
    rerender(
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
  it('should render StorePickUp only if there are items to be picked-up', () => {
    let orderInfo = getOrderFromOrderGroup(oneDelivery.orderGroup, 0)
    const { rerender, queryByTestId } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={oneDelivery.orderGroup.length > 1}
      />
    )
    expect(queryByTestId('storepickup-header')).toBeNull()

    orderInfo = getOrderFromOrderGroup(onePickUp.orderGroup, 0)
    rerender(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        splitOrder={onePickUp.orderGroup.length > 1}
      />
    )
    expect(queryByTestId('storepickup-header')).toBeDefined()
  })
})
