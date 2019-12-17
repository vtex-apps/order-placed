import React, { FC } from 'react'
import { OrderOptions } from 'vtex.order-details'

import { useOrder } from './components/OrderContext'

const WrappedOrderOptions: FC = () => {
  const order = useOrder()
  const hasTakeAwayParcels = order.takeAwayParcels.length > 0

  return (
    <OrderOptions
      className="dn-s flex-l"
      allowCancellation={order.allowCancellation}
      orderId={order.orderId}
      takeaway={hasTakeAwayParcels}
    />
  )
}

export default WrappedOrderOptions
