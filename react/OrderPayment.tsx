import React from 'react'
import { PaymentMethod } from 'vtex.order-details'

import { useOrder } from './components/OrderContext'
import { useCurrency } from './components/CurrencyContext'

const OrderPayment = () => {
  const order = useOrder()
  const currency = useCurrency()

  const { payments, transactionId } = order.paymentData.transactions[0]

  return (
    <div className="flex flex-column flex-row-m">
      {payments.map((payment, idx) => (
        <div key={idx} className="pb8-s mr9-m">
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
