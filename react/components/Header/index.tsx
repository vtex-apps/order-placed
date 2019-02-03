import React, { FunctionComponent } from 'react'
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl'
import { Button } from 'vtex.styleguide'

import SuccessIcon from '../../Icons/Success'
import {
  getPaymentGroupFromOrder,
  getTotalParcelsFromOrderGroup,
  PaymentGroupInfo
} from '../../utils'
import BankInvoice from './BankInvoice'
import Summary from './Summary'
import Warnings from './Warnings'

interface Props {
  data: Order[]
  profile: ClientProfile
  inStore: boolean
}

const Header: FunctionComponent<Props & InjectedIntlProps> = ({
  data,
  profile,
  inStore,
  intl,
}) => {
  const {
    totalDeliveries,
    totalPickUps,
    totalTakeAways,
  } = getTotalParcelsFromOrderGroup(data)
  const bankInvoices = data
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
    hasBankInvoice && bankInvoices[0].url.match(/(\*.\*.)+\*\w\*/g)
  const hideBankInvoiceInfo = encrypted && !bankInvoices[0].barCodeNumber
  const hasDelivery = totalDeliveries.length > 0
  const hasPickUp = totalPickUps.length > 0
  const hasTakeAway = totalTakeAways.length > 0
  const onlyTakeAway = !hasDelivery && !hasPickUp && hasTakeAway

  return (
    <header className="pt9 sans-serif">
      <section className={onlyTakeAway ? 'bb b--muted-4 pb6' : ''}>
        <div className="flex justify-center c-success">
          <SuccessIcon size={50} />
        </div>

        <p className="tc c-on-base mt7 mb0 t-heading-4 w-90 center">
          {intl.formatMessage({ id: 'header.thanks' })}
        </p>

        <p className="center mt4 t-body tc c-muted-1 lh-copy w-90 center">
          <FormattedMessage
            id="header.email"
            values={{
              lineBreak: <br />,
              userEmail: <strong className="nowrap">{profile.email}</strong>,
            }}
          />
        </p>

        <div className="flex justify-center t-action mv8 w-90 center">
          <div className="tr c-action-primary">
            <Button variation="secondary">
              {intl.formatMessage({ id: 'header.email.button' })}
            </Button>
          </div>
          <div className="tr c-action-primary ml4">
            <Button variation="secondary">
              {intl.formatMessage({ id: 'header.print.button' })}
            </Button>
          </div>
          {inStore && (
            <div className="tr c-action-primary ml4">
              <Button variation="primary">
                {intl.formatMessage({ id: 'header.newpurchase.button' })}
              </Button>
            </div>
          )}
        </div>
      </section>

      {(hasDelivery || hasPickUp) && (
        <Warnings data={data} hasDelivery={hasDelivery} hasPickUp={hasPickUp} />
      )}

      {hasDelivery && hasPickUp && <Summary data={data} />}

      {hasBankInvoice && !hideBankInvoiceInfo && (
        <BankInvoice
          url={bankInvoices[0].url}
          encrypted={!!encrypted}
          invoiceBarCodeNumber={bankInvoices[0].barCodeNumber}
          paymentSystem={bankInvoices[0].paymentSystemName}
        />
      )}
    </header>
  )
}

export default injectIntl(Header)
