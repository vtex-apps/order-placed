import React, { FC } from 'react'
import { OrderOptions } from 'vtex.order-details'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['orderOptionsWrapper']

interface Props {
  fullWidth?: boolean
}

const WrappedOrderOptions: FC<Props> = ({ fullWidth = false }) => {
  const order = useOrder()
  const handles = useCssHandles(CSS_HANDLES)
  const hasTakeAwayParcels = order.takeAwayParcels.length > 0

  return (
    <OrderOptions
      className={`${handles.orderOptionsWrapper} flex-l`}
      allowCancellation={order.allowCancellation}
      orderId={order.orderId}
      takeaway={hasTakeAwayParcels}
      fullWidth={fullWidth}
    />
  )
}

export default WrappedOrderOptions
