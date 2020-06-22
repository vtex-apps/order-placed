import React from 'react'

import { orderGroupQuery as bankInvoiceLoggedIn } from '../mocks/bankInvoiceLoggedIn'
import { orderGroupQuery as bankInvoiceNotLoggedIn } from '../mocks/bankInvoiceNotLoggedIn'
import { orderGroupQuery as bankInvoiceNumberLoggedIn } from '../mocks/bankInvoiceNumberLoggedIn'
import { orderGroupQuery as bankInvoiceNumberNotLoggedIn } from '../mocks/bankInvoiceNumberNotLoggedIn'
import BankInvoiceSection from '../BankInvoiceSection'
import { renderWithOrderGroup } from '../utils/testUtils'

test('renders embedded bank invoice for logged in customer, but no number', () => {
  const { getByTestId, queryByTestId } = renderWithOrderGroup(
    bankInvoiceLoggedIn.orderGroup,
    <BankInvoiceSection />
  )

  const bankInvoiceSection = getByTestId('bank-invoice')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeTruthy()
  expect(barCodeNumber).toBeNull()
  expect(embedded).toBeTruthy()
})

test('renders embedded bank invoice for logged in customer, along with barcode number', () => {
  const { getByTestId, queryByTestId } = renderWithOrderGroup(
    bankInvoiceNumberLoggedIn.orderGroup,
    <BankInvoiceSection />
  )

  const bankInvoiceSection = getByTestId('bank-invoice')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeTruthy()
  expect(barCodeNumber).toBeTruthy()
  expect(embedded).toBeTruthy()
})

test("doesn't render bank invoice section for customer not logged in", () => {
  const { queryByTestId } = renderWithOrderGroup(
    bankInvoiceNotLoggedIn.orderGroup,
    <BankInvoiceSection />
  )

  const bankInvoiceSection = queryByTestId('bank-invoice')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeNull()
  expect(barCodeNumber).toBeNull()
  expect(embedded).toBeNull()
})

test('renders bank invoice barcode number for user not logged in', () => {
  const { queryByTestId } = renderWithOrderGroup(
    bankInvoiceNumberNotLoggedIn.orderGroup,
    <BankInvoiceSection />
  )

  const bankInvoiceSection = queryByTestId('bank-invoice')
  const barCodeNumber = queryByTestId('bank-invoice-barcode')
  const embedded = queryByTestId('embedded-bank-invoice')

  expect(bankInvoiceSection).toBeTruthy()
  expect(barCodeNumber).toBeTruthy()
  expect(embedded).toBeNull()
})

test('has the invoice url if the user is logged in.', () => {
  const { container } = renderWithOrderGroup(
    bankInvoiceLoggedIn.orderGroup,
    <BankInvoiceSection />
  )

  const printButton = container.querySelector('a[href]') as HTMLAnchorElement
  expect(printButton.href).not.toContain('login')
})
