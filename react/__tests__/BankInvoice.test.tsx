import React from 'react'

import { render } from '../testUtils'

import { orderGroupQuery as bankInvoiceLoggedIn } from '../mocks/bankInvoiceLoggedIn'
import { orderGroupQuery as bankInvoiceNotLoggedIn } from '../mocks/bankInvoiceNotLoggedIn'
import { orderGroupQuery as bankInvoiceNumberLoggedIn } from '../mocks/bankInvoiceNumberLoggedIn'
import { orderGroupQuery as bankInvoiceNumberNotLoggedIn } from '../mocks/bankInvoiceNumberNotLoggedIn'

import Header from '../components/Header'

describe('Bank invoice scenarios', () => {
  it('should render embedded bank invoice for logged in customer, but no number', () => {
    const { getByTestId, queryByTestId } = render(
      <Header
        orderGroup={bankInvoiceLoggedIn.orderGroup}
        profile={bankInvoiceLoggedIn.orderGroup.orders[0].clientProfileData}
      />
    )

    const bankInvoiceSection = getByTestId('bank-invoice-info')
    const barCodeNumber = queryByTestId('bank-invoice-barcode')
    const embedded = queryByTestId('embedded-bank-invoice')

    expect(bankInvoiceSection).toBeDefined()
    expect(barCodeNumber).toBeNull()
    expect(embedded).toBeDefined()
  })
  it('should render embedded bank invoice for logged in customer, along with barcode number', () => {
    const { getByTestId, queryByTestId } = render(
      <Header
        orderGroup={bankInvoiceNumberLoggedIn.orderGroup}
        profile={
          bankInvoiceNumberLoggedIn.orderGroup.orders[0].clientProfileData
        }
      />
    )

    const bankInvoiceSection = getByTestId('bank-invoice-info')
    const barCodeNumber = queryByTestId('bank-invoice-barcode')
    const embedded = queryByTestId('embedded-bank-invoice')

    expect(bankInvoiceSection).toBeDefined()
    expect(barCodeNumber).toBeDefined()
    expect(embedded).toBeDefined()
  })
  it('should not render embedded bank invoice for customer not logged in', () => {
    const { queryByTestId } = render(
      <Header
        orderGroup={bankInvoiceNotLoggedIn.orderGroup}
        profile={bankInvoiceNotLoggedIn.orderGroup.orders[0].clientProfileData}
      />
    )

    const bankInvoiceSection = queryByTestId('bank-invoice-info')
    const barCodeNumber = queryByTestId('bank-invoice-barcode')
    const embedded = queryByTestId('embedded-bank-invoice')

    expect(bankInvoiceSection).toBeNull()
    expect(barCodeNumber).toBeNull()
    expect(embedded).toBeNull()
  })
  it('should render bank invoice barcode number for user not logged in', () => {
    const { queryByTestId } = render(
      <Header
        orderGroup={bankInvoiceNumberNotLoggedIn.orderGroup}
        profile={
          bankInvoiceNumberNotLoggedIn.orderGroup.orders[0].clientProfileData
        }
      />
    )

    const bankInvoiceSection = queryByTestId('bank-invoice-info')
    const barCodeNumber = queryByTestId('bank-invoice-barcode')
    const embedded = queryByTestId('embedded-bank-invoice')

    expect(bankInvoiceSection).toBeDefined()
    expect(barCodeNumber).toBeDefined()
    expect(embedded).toBeNull()
  })
  it('should not render bank invoice section for user not logged in if there is no barcode number', () => {
    const { queryByTestId } = render(
      <Header
        orderGroup={bankInvoiceNotLoggedIn.orderGroup}
        profile={bankInvoiceNotLoggedIn.orderGroup.orders[0].clientProfileData}
      />
    )

    const bankInvoiceSection = queryByTestId('bank-invoice-info')

    expect(bankInvoiceSection).toBeNull()
  })
})
