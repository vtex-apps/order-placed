import React from 'react'

import OrderPlacedNotices from '../OrderPlacedNotices'
import { orderGroupQuery as bankInvoiceDueDate } from '../mocks/bankInvoiceLoggedIn'
import { orderGroupQuery as bankInvoiceNoDueDate } from '../mocks/bankInvoiceNumberLoggedIn'
import { orderGroupQuery as bankInvoiceNotLoggedIn } from '../mocks/bankInvoiceNotLoggedIn'
import { orderGroupQuery as oneDelivery } from '../mocks/oneDeliverySimple'
import { orderGroupQuery as onePickup } from '../mocks/onePickupSimple'
import { orderGroupQuery as splitOrder } from '../mocks/splitOrderTwoSellers'
import { renderWithOrderGroup, queryByTextWithMarkup } from '../utils/testUtils'

it('should render payment confirmation estimate', () => {
  const { getByText } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <OrderPlacedNotices />
  )

  const paymentApproval = getByText(
    /Payment approval may take from \d minutes up to \d bussiness days/i
  )
  expect(paymentApproval).toBeTruthy()
})

it('should render shipping estimate disclaimers if order has shipping items', () => {
  const { getByText } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <OrderPlacedNotices />
  )

  const paymentDisclaimer = getByText(
    /The delivery period starts to count from the moment your payment is confirmed/
  )
  const trackingDisclaimer = getByText(
    /A tracking code will be sent to your email when the delivery process begins./
  )

  expect(paymentDisclaimer).toBeTruthy()
  expect(trackingDisclaimer).toBeTruthy()
})

it('should not render shipping estimate disclaimers if order has no shipping items', () => {
  const { queryByText } = renderWithOrderGroup(
    onePickup.orderGroup,
    <OrderPlacedNotices />
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
  const { getByText } = renderWithOrderGroup(
    onePickup.orderGroup,
    <OrderPlacedNotices />
  )

  const paymentDisclaimer = getByText(
    /The store pickup period starts from the moment your payment is confirmed/
  )

  expect(paymentDisclaimer).toBeTruthy()
})

it('should not render pickup estimate disclaimers if order has no pickup items', () => {
  const { queryByText } = renderWithOrderGroup(
    oneDelivery.orderGroup,
    <OrderPlacedNotices />
  )

  const paymentDisclaimer = queryByText(
    'The store pickup period starts from the moment your payment is confirmed.'
  )

  expect(paymentDisclaimer).toBeNull()
})

it('should render disclaimer for split orders', () => {
  const { queryByText } = renderWithOrderGroup(
    splitOrder.orderGroup,
    <OrderPlacedNotices />
  )

  const splitOrderDisclaimer = queryByText(
    /Your purchase was split into \d orders as some of the items were sold by partners. But this does not affect shipping estimates/
  )
  expect(splitOrderDisclaimer).toBeTruthy()
})

it('should render notice for bank invoices with due date', () => {
  const { container } = renderWithOrderGroup(
    bankInvoiceDueDate.orderGroup,
    <OrderPlacedNotices />
  )

  const bankInvoiceWarning = queryByTextWithMarkup(
    container,
    /Please make a payment of .*? up to .*? according to the data below/
  )
  expect(bankInvoiceWarning).toBeTruthy()
})

it('should render notice for bank invoices without due date', () => {
  const { container } = renderWithOrderGroup(
    bankInvoiceNoDueDate.orderGroup,
    <OrderPlacedNotices />
  )

  const bankInvoiceWarning = queryByTextWithMarkup(
    container,
    /Please make a payment of .*? up to the due date according to the data below/
  )
  expect(bankInvoiceWarning).toBeTruthy()
})

it('redirects to login if the user is not logged in.', () => {
  const { queryByTestId } = renderWithOrderGroup(
    bankInvoiceNotLoggedIn.orderGroup,
    <OrderPlacedNotices />
  )

  const printButton = queryByTestId('button-link') as HTMLAnchorElement

  expect(printButton.href.includes('login')).toBe(true)
})
