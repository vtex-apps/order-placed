import { render } from '@vtex/test-tools/react'
import React from 'react'

import Header from '../components/Header'
import { orderGroupQuery as bankInvoiceDueDate } from '../mocks/bankInvoiceLoggedIn'
import { orderGroupQuery as bankInvoiceNoDueDate } from '../mocks/bankInvoiceNumberLoggedIn'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as onePickup } from '../mocks/onePickupSimple'
import { orderGroupQuery as deliveryAndPickup } from '../mocks/pickupAndDelivery'
import { orderGroupQuery as splitOrder } from '../mocks/splitOrderTwoSellers'

describe('Confirmation messages', () => {
  it('should render success icon', () => {
    const { getByTestId } = render(
      <Header
        orderGroup={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup.orders[0].clientProfileData}
      />
    )

    const icon = getByTestId('sucessIcon')
    expect(icon).toBeDefined()
  })

  it('should render thank you message', () => {
    const { getByText } = render(
      <Header
        orderGroup={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup.orders[0].clientProfileData}
      />
    )

    const thankYouMessage = getByText(/Thanks for the purchase!/)
    expect(thankYouMessage.textContent).toBeDefined()
  })
})

describe('Warnings', () => {
  it('should render payment confirmation estimate', () => {
    const { getByText } = render(
      <Header
        orderGroup={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup.orders[0].clientProfileData}
      />
    )

    const paymentApproval = getByText(
      /Payment approval may take from \d minutes up to \d bussiness days/i
    )
    expect(paymentApproval).toBeDefined()
  })

  it('should render shipping estimate disclaimers if order has shipping items', () => {
    const { getByText } = render(
      <Header
        orderGroup={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup.orders[0].clientProfileData}
      />
    )

    const paymentDisclaimer = getByText(
      /The delivery period starts to count from the moment your payment is confirmed/
    )
    const trackingDisclaimer = getByText(
      /A tracking code will be sent to your email when the delivery process begins./
    )

    expect(paymentDisclaimer).toBeDefined()
    expect(trackingDisclaimer).toBeDefined()
  })

  it('should not render shipping estimate disclaimers if order has no shipping items', () => {
    const { queryByText } = render(
      <Header
        orderGroup={onePickup.orderGroup}
        profile={onePickup.orderGroup.orders[0].clientProfileData}
      />
    )

    const paymentDisclaimer = queryByText(
      'The delivery period starts to count from the moment your payment is confirmed'
    )
    const trackingDisclaimer = queryByText(
      'A tracking code will be sent to your email when the delivery process begins.'
    )

    expect(paymentDisclaimer).toBeNull()
    expect(trackingDisclaimer).toBeNull()
  })

  it('should render pickup estimate disclaimer if order has pickup items', () => {
    const { getByText } = render(
      <Header
        orderGroup={onePickup.orderGroup}
        profile={onePickup.orderGroup.orders[0].clientProfileData}
      />
    )

    const paymentDisclaimer = getByText(
      /The store pickup period starts from the moment your payment is confirmed/
    )

    expect(paymentDisclaimer).toBeDefined()
  })

  it('should not render pickup estimate disclaimers if order has no pickup items', () => {
    const { queryByText } = render(
      <Header
        orderGroup={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup.orders[0].clientProfileData}
      />
    )

    const paymentDisclaimer = queryByText(
      'The store pickup period starts from the moment your payment is confirmed.'
    )

    expect(paymentDisclaimer).toBeNull()
  })

  it('should render disclaimer for split orders', () => {
    const { queryByText } = render(
      <Header
        orderGroup={splitOrder.orderGroup}
        profile={splitOrder.orderGroup.orders[0].clientProfileData}
      />
    )

    const splitOrderDisclaimer = queryByText(
      /Your purchase was split into \d orders as some of the items were sold by partners. But this does not affect shipping estimates/
    )
    expect(splitOrderDisclaimer).toBeDefined()
  })

  it('should render warning for bank invoices with due date', () => {
    const { queryByText } = render(
      <Header
        orderGroup={bankInvoiceDueDate.orderGroup}
        profile={bankInvoiceDueDate.orderGroup.orders[0].clientProfileData}
      />
    )
    const bankInvoiceWarning = queryByText(
      /Please make a payment of \d+ up to \d{1,2}\/\d{1,2}\/\d{4} according to the data below/
    )
    expect(bankInvoiceWarning).toBeDefined()
  })

  it('should render warning for bank invoices without due date', () => {
    const { queryByText } = render(
      <Header
        orderGroup={bankInvoiceNoDueDate.orderGroup}
        profile={bankInvoiceNoDueDate.orderGroup.orders[0].clientProfileData}
      />
    )

    const bankInvoiceWarning = queryByText(
      /Please make a payment of \d+ up to the due date according to the data below/
    )
    expect(bankInvoiceWarning).toBeDefined()
  })
})

describe('Purchase summary', () => {
  it('should render summary when there are shippings and store pickups in the same purchase', () => {
    const { getByTestId } = render(
      <Header
        orderGroup={deliveryAndPickup.orderGroup}
        profile={deliveryAndPickup.orderGroup.orders[0].clientProfileData}
      />
    )

    const summaryPageBlock = getByTestId('summary')

    expect(summaryPageBlock).toBeDefined()
  })
})
