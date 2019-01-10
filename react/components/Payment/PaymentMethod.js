import React from 'react'
import { PaymentFlagPicker } from 'vtex.payment-flags'
import { paymentShape } from '../../proptypes/shapes'
import Price from './FormattedPrice'
import { FormattedMessage, intlShape, injectIntl } from 'react-intl'

const paymentGroupSwitch = (payment, intl) => {
  switch (payment) {
    case 'creditCard':
      return intl.formatMessage({ id: 'payments.creditcard' })
    default:
      break
  }
}

const PaymentMethod = ({ payment, intl }) => {
  const isCreditCard = payment.group === 'creditCard'

  return (
    <div className="flex flex-column justify-around mr7-ns">
      <p className="t-body c-on-base">{paymentGroupSwitch(payment.group, intl)}</p>
      <PaymentFlagPicker paymentSystem={payment.paymentSystem}>
        {FlagComponent =>
          FlagComponent && (
            <div className="h2">
              <FlagComponent />
            </div>
          )
        }
      </PaymentFlagPicker>
      {isCreditCard &&
        <p>
          <FormattedMessage
            id={'payments.creditcard.lastDigits'}
            values={
              { lastDigits: payment.lastDigits }
            }
          />
        </p>
      }
      <Price value={payment.value} />{` (${payment.installments}x)`}
    </div>
  )
}

PaymentMethod.propTypes = {
  payment: paymentShape.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(PaymentMethod)
