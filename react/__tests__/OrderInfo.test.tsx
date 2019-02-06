import React from 'react'

import OrderInfo from '../components/OrderInfo'
import OrderHeader from '../components/OrderInfo/OrderHeader'
import { orderGroupQuery as bankInvoicePayment } from '../mocks/bankInvoiceLoggedIn'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as onePickUp } from '../mocks/onePickupSimple'
import { orderGroupQuery as promissory } from '../mocks/promissoryPayment'
import { orderGroupQuery as splitOrder } from '../mocks/splitOrderTwoSellers'
import { orderGroupQuery as twoCreditCards } from '../mocks/twoCreditCards'
import { orderGroupQuery as multipleDeliveries } from '../mocks/twoDeliveries'
import { render } from '../testUtils'

const getOrderFromOrderGroup = (orderGroup: OrderGroup, index: number) => {
  return orderGroup.orders[index]
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

  it('should render seller name for an order processed by another seller', () => {
    const orderInfo = getOrderFromOrderGroup(splitOrder.orderGroup, 0)
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
        numOfOrders={1}
        index={0}
      />
    )

    expect(
      getByText(
        'Your order was split into 2 deliveries. Products that are closer to their delivery address will arrive faster!'
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
        numOfOrders={1}
        index={0}
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
        numOfOrders={1}
        index={0}
      />
    )
    expect(queryAllByText('Credit card')).toHaveLength(2)
  })

  it('should render bank invoice payment method', () => {
    const orderInfo = getOrderFromOrderGroup(bankInvoicePayment.orderGroup, 0)
    const { getByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        numOfOrders={1}
        index={0}
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
        numOfOrders={1}
        index={0}
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
        numOfOrders={1}
        index={0}
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
        numOfOrders={1}
        index={0}
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
        numOfOrders={1}
        index={0}
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
        numOfOrders={1}
        index={0}
      />
    )
    expect(queryByTestId('storepickup-header')).toBeNull()
  })
})
