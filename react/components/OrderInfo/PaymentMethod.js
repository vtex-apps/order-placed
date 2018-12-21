import React from 'react'
import PropTypes from 'prop-types'

import { FormattedPrice } from 'vtex.order-details'

const paymentGroupSwitch = (payment) => {
  switch (payment) {
    case 'creditCard':
      return 'Cartão de crédito'
    default:
      break
  }
}

const PaymentMethod = ({ pay }) => {
  return (
    <div className="flex flex-column justify-around mr7-ns">
      <p className="t-heading-6">{paymentGroupSwitch(pay.group)}</p>
      <p>Final {pay.lastDigits}</p>
      <div>
        <FormattedPrice value={pay.value} currency="BRL" />{` (${pay.installments}x)`}
      </div>
    </div>
  )
}

PaymentMethod.propTypes = {
  pay: PropTypes.object.isRequired,
}

export default PaymentMethod
