import React from 'react'
import PropTypes from 'prop-types'

import { FormattedPrice } from 'vtex.order-details'
import { PaymentFlagPicker } from 'vtex.payment-flags'

// Still needs to cover all posible values for `pay.group`
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
    <p className="t-heading-6">{paymentGroupSwitch(payment.group)}</p>
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
    <div>
      <FormattedPrice value={payment.value} currency="BRL" />{` (${payment.installments}x)`}
    </div>
  </div>
)

PaymentMethod.propTypes = {
  payment: PropTypes.object.isRequired,
}

export default PaymentMethod
