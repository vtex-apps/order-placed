import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import { IconCaretDown, Button } from 'vtex.styleguide'
import { paymentShape } from '../../shapes'
import Price from './FormattedPrice'
import { intlMessage } from '../../utils'

const paymentGroupSwitch = (payment, intl) => {
  switch (payment) {
    case 'creditCard':
      return intl.formatMessage({ id: 'payments.creditcard' })
    case 'bankInvoice':
      return intl.formatMessage({ id: 'payments.bankinvoice' })
    case 'promissory':
      return intl.formatMessage({ id: 'payments.promissory' })
    default:
      break
  }
}

const PaymentMethod = ({ payment, intl }) => {
  const isCreditCard = payment.group === 'creditCard'

  return (
    <div className="flex justify-between items-center">
      <div className="t-body">
        <p className="c-on-base">
          {paymentGroupSwitch(payment.group, intl)}
        </p>
        <p className="c-muted-1">
          {isCreditCard &&
            intlMessage(intl, 'payments.creditcard.lastDigits', { lastDigits: payment.lastDigits })
          }
          <Price value={payment.value} />
          {` ${intlMessage(intl, 'payments.installments', { installments: payment.installments })}`}
        </p>
        <Button variation="primary">
          { intlMessage(intl, 'payments.bankinvoice.print') }
        </Button>
      </div>
      <div className="c-action-primary">
        <IconCaretDown />
      </div>
    </div>
  )
}

PaymentMethod.propTypes = {
  payment: paymentShape.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(PaymentMethod)
