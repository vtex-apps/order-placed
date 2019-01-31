import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, intlShape, injectIntl } from 'react-intl'
import { Button } from 'vtex.styleguide'

import { profileShape } from '../../types'
import {
  getTotalParcelsFromOrderGroup,
  getPaymentGroupFromOrder,
} from '../../utils'
import SuccessIcon from '../../Icons/Success'
import Warnings from './Warnings'
import Summary from './Summary'
import BankInvoice from './BankInvoice'

const Header = ({ data, profile, inStore, intl }) => {
  const {
    totalDeliveries,
    totalPickUps,
    totalTakeAways,
  } = getTotalParcelsFromOrderGroup(data)
  const bankInvoices = data
    .reduce(
      (acc, currOrder) => [...acc, getPaymentGroupFromOrder(currOrder)],
      []
    )
    .filter(order => !!order.url)
  const hasBankInvoice = bankInvoices.length > 0
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
              userEmail: <strong className="nowrap">{profile.email}</strong>,
              lineBreak: <br />,
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

      {hasBankInvoice && (
        <BankInvoice
          url={bankInvoices[0].url}
          invoiceBarCodeNumber={bankInvoices[0].barCodeNumber}
          paymentSystem={bankInvoices[0].paymentSystemName}
        />
      )}
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
  profile: profileShape.isRequired,
  inStore: PropTypes.bool,
  intl: intlShape.isRequired,
}

export default injectIntl(Header)
