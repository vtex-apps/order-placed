import React from 'react'

import Header from '../components/Header'
import { orderGroupQuery as bankInvoiceNoDueDate } from '../mocks/bankInvoice'
import { orderGroupQuery as bankInvoiceDueDate } from '../mocks/bankInvoiceLoggedIn'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as onePickup } from '../mocks/onePickupSimple'
import { orderGroupQuery as takeAwayOnly } from '../mocks/oneTakeAway'
import { orderGroupQuery as deliveryAndPickup } from '../mocks/pickupAndDelivery'
import { orderGroupQuery as splitOrder } from '../mocks/splitOrderTwoSellers'
import { render } from '../testUtils'

describe('Confirmation messages', () => {
  it('should render success icon', () => {
    const { getByTestId } = render(
      <Header
        data={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup[0].clientProfileData}
      />
    )

    const icon = getByTestId('sucessIcon')
    expect(icon).toBeDefined()
  })

  it('should render thank you message', () => {
    const { getByText } = render(
      <Header
        data={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup[0].clientProfileData}
      />
    )

    const thankYouMessage = getByText(/Thanks for the purchase!/)
    expect(thankYouMessage.textContent).toBeDefined()
  })

  it('should render "Start new order" button if inStore', () => {
    const { getByText } = render(
      <Header
        data={takeAwayOnly.orderGroup}
        profile={takeAwayOnly.orderGroup[0].clientProfileData}
        inStore
      />
    )

    const newOrder = getByText('Start new order')
    expect(newOrder.textContent).toBeDefined()
  })
})

describe('Warnings', () => {
  it('should render payment confirmation estimate', () => {
    const { getByText } = render(
      <Header
        data={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup[0].clientProfileData}
      />
    )

    const paymentApproval = getByText(
      /Payment approval may take up to \d bussiness days/i
    )
    expect(paymentApproval).toBeDefined()
  })

  it('should render shipping estimate disclaimers if order has shipping items', () => {
    const { getByText } = render(
      <Header
        data={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup[0].clientProfileData}
      />
    )

    const paymentDisclaimer = getByText(
      'The delivery period starts from the moment your payment is confirmed'
    )
    const trackingDisclaimer = getByText(
      'When your order is on its way, a tracking code will be sent to your email'
    )

    expect(paymentDisclaimer).toBeDefined()
    expect(trackingDisclaimer).toBeDefined()
  })

  it('should not render shipping estimate disclaimers if order has no shipping items', () => {
    const { queryByText } = render(
      <Header
        data={onePickup.orderGroup}
        profile={onePickup.orderGroup[0].clientProfileData}
      />
    )

    const paymentDisclaimer = queryByText(
      'The delivery period starts from the moment your payment is confirmed'
    )
    const trackingDisclaimer = queryByText(
      'When your order is on its way, a tracking code will be sent to your email'
    )

    expect(paymentDisclaimer).toBeNull()
    expect(trackingDisclaimer).toBeNull()
  })

  it('should render pickup estimate disclaimer if order has pickup items', () => {
    const { getByText } = render(
      <Header
        data={onePickup.orderGroup}
        profile={onePickup.orderGroup[0].clientProfileData}
      />
    )

    const paymentDisclaimer = getByText(
      'The store pickup period starts from the moment your payment is confirmed'
    )

    expect(paymentDisclaimer).toBeDefined()
  })

  it('should not render pickup estimate disclaimers if order has no pickup items', () => {
    const { queryByText } = render(
      <Header
        data={oneDelivery.orderGroup}
        profile={oneDelivery.orderGroup[0].clientProfileData}
      />
    )

    const paymentDisclaimer = queryByText(
      'The store pickup period starts from the moment your payment is confirmed'
    )

    expect(paymentDisclaimer).toBeNull()
  })

  it('should render disclaimer for split orders', () => {
    const { queryByText } = render(
      <Header
        data={splitOrder.orderGroup}
        profile={splitOrder.orderGroup[0].clientProfileData}
      />
    )

    const splitOrderDisclaimer = queryByText(
      /Your purchase was split into \d orders as some of the items were sold by partners. This does not affect shipping estimates/
    )
    expect(splitOrderDisclaimer).toBeDefined()
  })

  it('should render warning for bank invoices with due date', () => {
    const { queryByText } = render(
      <Header
        data={bankInvoiceDueDate.orderGroup}
        profile={bankInvoiceDueDate.orderGroup[0].clientProfileData}
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
        data={bankInvoiceNoDueDate.orderGroup}
        profile={bankInvoiceNoDueDate.orderGroup[0].clientProfileData}
      />
    )

    const bankInvoiceWarning = queryByText(
      /Please make a payment of \d+ up to the due date according to the data below/
    )
    expect(bankInvoiceWarning).toBeDefined()
  })

  it('should not render Warnings if that are only take away items', () => {
    const { queryByTestId } = render(
      <Header
        data={takeAwayOnly.orderGroup}
        profile={takeAwayOnly.orderGroup[0].clientProfileData}
      />
    )

    expect(queryByTestId('warnings-section')).toBeNull()
  })
})

describe('Purchase summary', () => {
  it('should render summary when that are shippings and store pickups in the same purchase', () => {
    const { getByTestId } = render(
      <Header
        data={deliveryAndPickup.orderGroup}
        profile={deliveryAndPickup.orderGroup[0].clientProfileData}
      />
    )

    const summaryPageBlock = getByTestId('summary')

    expect(summaryPageBlock).toBeDefined()
  })
})
