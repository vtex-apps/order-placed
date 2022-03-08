import React from 'react'
import { PaymentMethod } from 'thefoschini.order-details'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'
import { useCurrency } from './components/CurrencyContext'

const CSS_HANDLES = ['orderPaymentWrapper', 'orderPaymentItem']

const OrderPayment = () => {
  const order = useOrder()
  const currency = useCurrency()
  const handles = useCssHandles(CSS_HANDLES)

  const [{ payments, transactionId }] = order.paymentData.transactions

  return (
    <div
      className={`${handles.orderPaymentWrapper} flex flex-column flex-row-m`}
    >
      {payments.map((payment, idx) => (
        <div key={idx} className={`${handles.orderPaymentItem} pb8-s mr9-m`}>
          <PaymentMethod
            payment={payment}
            transactionId={transactionId}
            currency={currency}
          />
        </div>
      ))}
    </div>
  )
}

export default OrderPayment
