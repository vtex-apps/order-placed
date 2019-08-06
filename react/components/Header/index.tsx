import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonLink } from 'vtex.order-details'
import { Button } from 'vtex.styleguide'

import SuccessIcon from '../../Icons/Success'
import {
  getPaymentGroupFromOrder,
  PaymentGroupInfo,
  parseBankInvoiceUrl,
} from '../../utils'
import BankInvoice from './BankInvoice'
import Summary from './Summary'
import Warnings from './Warnings'

const Header: FunctionComponent<Props> = ({ orderGroup, profile, inStore }) => {
  const bankInvoices = orderGroup.orders
    .reduce(
      (acc: PaymentGroupInfo[], currOrder: Order) => [
        ...acc,
        getPaymentGroupFromOrder(currOrder),
      ],
      []
    )
    .filter((order: any) => !!order.url)
  const hasBankInvoice = bankInvoices.length > 0
  const encrypted =
    hasBankInvoice &&
    bankInvoices[0].url &&
    bankInvoices[0].url.match(/(\*.\*.)+\*\w\*/g)
  const hideBankInvoiceInfo = encrypted && !bankInvoices[0].barCodeNumber
  const hasDelivery = orderGroup.totalDeliveryParcels.length > 0
  const hasPickUp = orderGroup.totalPickUpParcels.length > 0
  const hasTakeAway = orderGroup.totalTakeAwayParcels.length > 0
  const onlyTakeAway = !hasDelivery && !hasPickUp && hasTakeAway

  return (
    <header className="pt9 sans-serif">
      <section className={onlyTakeAway ? 'bb b--muted-4 pb6' : ''}>
        <div className="flex justify-center c-success">
          <SuccessIcon size={50} />
        </div>
        <p className="tc c-on-base mt7 mb0 t-heading-4 w-90 center">
          <FormattedMessage id="store/header.thanks" />
        </p>
        <p className="center mt5 t-body tc c-muted-1 lh-copy w-90 center">
          <FormattedMessage
            id="store/header.email"
            values={{
              lineBreak: <br />,
              userEmail: <strong className="nowrap">{profile.email}</strong>,
            }}
          />
        </p>
        <div className="flex justify-center t-action mv8 w-90 center">
          <div className="tr c-action-primary ml4">
            <Button variation="secondary" onClick={() => window.print()}>
              <FormattedMessage id="store/header.print.button" />
            </Button>
          </div>
          {inStore && (
            <div className="tr c-action-primary ml4">
              <ButtonLink variation="primary" to="/checkout/instore#/">
                <FormattedMessage id="store/header.newpurchase.button" />
              </ButtonLink>
            </div>
          )}
        </div>
      </section>
      {(hasDelivery || hasPickUp) && (
        <Warnings
          numOfOrders={orderGroup.orders.length}
          hasDelivery={hasDelivery}
          hasPickUp={hasPickUp}
          bankInvoices={bankInvoices}
        />
      )}
      {hasDelivery && hasPickUp && (
        <Summary
          totalDeliveries={orderGroup.totalDeliveryParcels}
          totalPickUps={orderGroup.totalPickUpParcels}
        />
      )}
      {hasBankInvoice && bankInvoices[0].url && !hideBankInvoiceInfo && (
        <BankInvoice
          url={parseBankInvoiceUrl(bankInvoices[0].url)}
          encrypted={!!encrypted}
          invoiceBarCodeNumber={bankInvoices[0].barCodeNumber}
          paymentSystem={bankInvoices[0].paymentSystemName}
        />
      )}
    </header>
  )
}

interface Props {
  orderGroup: OrderGroup
  profile: ClientProfile
  inStore?: boolean
}

export default Header
