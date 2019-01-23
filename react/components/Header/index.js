import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, intlShape, injectIntl } from 'react-intl'
import { Button } from 'vtex.styleguide'
import { profileShape } from '../../shapes'
import { intlMessage, getPaymentGroupFromOrder } from '../../utils'
import SuccessIcon from '../../Icons/Success'
import Warnings from './Warnings'
import Summary from './Summary'
import BankInvoice from './BankInvoice/BankInvoice'

const Header = ({ data, profile, intl }) => {
  const bankInvoices = data
    .reduce(
      (acc, currOrder) => [...acc, getPaymentGroupFromOrder(currOrder)],
      []
    )
    .filter(order => !!order.url)
  const hasBankInvoice = bankInvoices.length > 0

  return (
    <div className="pt7 sans-serif">
      <div className="flex justify-center c-success">
        <SuccessIcon size={50} />
      </div>

      <p className="tc c-on-base mt7 mb0 t-heading-4">
        {intlMessage(intl, 'header.thanks')}
      </p>

      <p className="center mt4 t-body tc c-muted-1 lh-copy">
        <FormattedMessage
          id="header.email"
          values={{
            userEmail: <strong className="nowrap">{profile.email}</strong>,
            lineBreak: <br />,
          }}
        />
      </p>

      <div className="flex justify-center t-action mv8">
        <div className="tr c-action-primary mr2">
          <Button variation="secondary">
            {intlMessage(intl, 'header.email.button')}
          </Button>
        </div>
        <div className="tr c-action-primary ml2">
          <Button variation="secondary">
            {intlMessage(intl, 'header.print.button')}
          </Button>
        </div>
      </div>
      <Warnings data={data} />
      <Summary data={data} />
      {hasBankInvoice && (
        <BankInvoice
          url={bankInvoices[0].url}
          invoiceBarCodeNumber={bankInvoices[0].barCodeNumber}
        />
      )}
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
  profile: profileShape.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Header)
