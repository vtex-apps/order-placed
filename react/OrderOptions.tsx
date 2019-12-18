import React, { FC } from 'react'
import { OrderOptions } from 'vtex.order-details'

import { useOrder } from './components/OrderContext'
import styles from './styles.css'

interface Props {
  fullWidth?: boolean
}

const WrappedOrderOptions: FC<Props> = ({ fullWidth = false }) => {
  const order = useOrder()
  const hasTakeAwayParcels = order.takeAwayParcels.length > 0

  return (
    <div className={styles['orderOptionsWrapper--mobile']}>
      <OrderOptions
        className="flex-l"
        allowCancellation={order.allowCancellation}
        orderId={order.orderId}
        takeaway={hasTakeAwayParcels}
        fullWidth={fullWidth}
      />
    </div>
  )
}

export default WrappedOrderOptions
