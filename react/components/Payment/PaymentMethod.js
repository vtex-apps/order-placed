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
  const isBankInvoice = payment.group === 'bankInvoice'

  return (
    <div className="flex justify-between items-center">
      <div className="t-body lh-solid">
        <p className="c-on-base">{paymentGroupSwitch(payment.group, intl)}</p>
        {isCreditCard && (
          <p className="c-muted-1">
            {intlMessage(intl, 'payments.creditcard.lastDigits', {
              lastDigits: payment.lastDigits,
            })}
          </p>
        )}
        <p className="c-muted-1">
          <Price value={payment.value} />
          {` ${intlMessage(intl, 'payments.installments', {
            installments: payment.installments,
          })}`}
        </p>
        {isBankInvoice && (
          <a href={payment.url}>
            <Button variation="primary">
              {intlMessage(intl, 'payments.bankinvoice.print')}
            </Button>
          </a>
        )}
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
