import React from 'react'
import { OrderSplitNotice } from 'vtex.order-details'
import { useIntl } from 'react-intl'

import { useOrder } from './components/OrderContext'

const WrappedOrderSplitNotice = () => {
  const order = useOrder()
  const intl = useIntl()

  if (order.deliveryParcels.length < 2) {
    return null
  }

  return (
    <OrderSplitNotice
      deliveries={order.deliveryParcels.length}
      pickups={order.pickUpParcels.length}
      takeaways={order.takeAwayParcels.length}
      intl={intl}
    />
  )
}

export default WrappedOrderSplitNotice
