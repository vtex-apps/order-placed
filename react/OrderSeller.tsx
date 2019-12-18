import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'

import { useOrder } from './components/OrderContext'

const OrderDate = () => {
  const runtime = useRuntime()
  const order = useOrder()

  const storeAccount = runtime.account
  const orderSeller = order.sellers[0].name

  return (
    storeAccount !== orderSeller && (
      <small className="c-muted-2 t-body lh-copy">
        <FormattedMessage
          id="store/order.header.seller"
          values={{
            seller: <span className="c-action-primary">{orderSeller}</span>,
          }}
        />
      </small>
    )
  )
}

export default OrderDate
