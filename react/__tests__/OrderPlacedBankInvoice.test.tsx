import React from 'react'

import { orderGroupQuery as bankInvoiceLoggedIn } from '../mocks/bankInvoiceLoggedIn'
import { orderGroupQuery as bankInvoiceNotLoggedIn } from '../mocks/bankInvoiceNotLoggedIn'
import { orderGroupQuery as bankInvoiceNumberLoggedIn } from '../mocks/bankInvoiceNumberLoggedIn'
import { orderGroupQuery as bankInvoiceNumberNotLoggedIn } from '../mocks/bankInvoiceNumberNotLoggedIn'
import OrderPlacedBankInvoice from '../OrderPlacedBankInvoice'
import { renderWithOrderGroup } from './utils'

it('renders embedded bank invoice for logged in customer, but no number', () => {
  const { getByTestId, queryByTestId } = renderWithOrderGroup(
    bankInvoiceLoggedIn.orderGroup,
    <OrderPlacedBankInvoice />
  )

  const bankInvoiceSection = getByTestId('bank-invoice-info')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeTruthy()
  expect(barCodeNumber).toBeNull()
  expect(embedded).toBeTruthy()
})

it('renders embedded bank invoice for logged in customer, along with barcode number', () => {
  const { getByTestId, queryByTestId } = renderWithOrderGroup(
    bankInvoiceNumberLoggedIn.orderGroup,
    <OrderPlacedBankInvoice />
  )

  const bankInvoiceSection = getByTestId('bank-invoice-info')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeTruthy()
  expect(barCodeNumber).toBeTruthy()
  expect(embedded).toBeTruthy()
})

it("doesn't render bank invoice section for customer not logged in", () => {
  const { queryByTestId } = renderWithOrderGroup(
    bankInvoiceNotLoggedIn.orderGroup,
    <OrderPlacedBankInvoice />
  )

  const bankInvoiceSection = queryByTestId('bank-invoice-info')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeNull()
  expect(barCodeNumber).toBeNull()
  expect(embedded).toBeNull()
})

it('renders bank invoice barcode number for user not logged in', () => {
  const { queryByTestId } = renderWithOrderGroup(
    bankInvoiceNumberNotLoggedIn.orderGroup,
    <OrderPlacedBankInvoice />
  )

  const bankInvoiceSection = queryByTestId('bank-invoice-info')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeTruthy()
  expect(barCodeNumber).toBeTruthy()
  expect(embedded).toBeNull()
})

it('has the invoice url if the user is logged in.', () => {
  const { queryByTestId } = renderWithOrderGroup(
    bankInvoiceLoggedIn.orderGroup,
    <OrderPlacedBankInvoice />
  )

  const printButton = queryByTestId('button-link') as HTMLAnchorElement

  expect(printButton.href.includes('login')).toBe(false)
})
