import React from 'react'
import { PaymentFlagPicker } from 'vtex.payment-flags'
import { paymentShape } from '../../proptypes/shapes'
import Price from './FormattedPrice'

const paymentGroupSwitch = (payment) => {
  switch (payment) {
    case 'creditCard':
      return 'Cartão de crédito'
    default:
      break
  }
}

const PaymentMethod = ({ payment }) => (
  <div className="flex flex-column justify-around mr7-ns">
    <p className="t-body c-on-base">{paymentGroupSwitch(payment.group)}</p>
    <PaymentFlagPicker paymentSystem={payment.paymentSystem}>
      {FlagComponent =>
        FlagComponent && (
          <div className="h2">
            <FlagComponent />
          </div>
        )
      }
    </PaymentFlagPicker>
    <p>Final {payment.lastDigits}</p>
    <Price value={payment.value} />{` (${payment.installments}x)`}
  </div>
)

PaymentMethod.propTypes = {
  payment: paymentShape.isRequired,
}

export default PaymentMethod
