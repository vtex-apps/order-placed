import React from 'react'
import { FormattedPrice } from 'vtex.order-details'
import { PaymentFlagPicker } from 'vtex.payment-flags'
import { paymentShape } from '../../proptypes/shapes'
import { CurrencyContext } from '../../OrderPlaced'

const paymentGroupSwitch = (payment) => {
  switch (payment) {
    case 'creditCard':
      return 'Cartão de crédito'
    default:
      break
  }
}

const PaymentMethod = ({ payment }) => (
  <CurrencyContext.Consumer>
    {currency => (<div className="flex flex-column justify-around mr7-ns">
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
      <FormattedPrice value={payment.value} currency={currency} />{` (${payment.installments}x)`}
    </div>)}
  </CurrencyContext.Consumer>
)

PaymentMethod.propTypes = {
  payment: paymentShape.isRequired,
}

export default PaymentMethod
