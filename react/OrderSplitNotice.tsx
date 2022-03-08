import React from 'react'
import { OrderSplitNotice } from 'thefoschini.order-details'
import { useIntl } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['splitNotice']

const WrappedOrderSplitNotice = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const order = useOrder()
  const intl = useIntl()

  if (order.deliveryParcels.length < 2) {
    return null
  }

  return (
    <div className={`${handles.splitNotice} mb5`}>
      <OrderSplitNotice
        deliveries={order.deliveryParcels.length}
        pickups={order.pickUpParcels.length}
        takeaways={order.takeAwayParcels.length}
        intl={intl}
      />
    </div>
  )
}

export default WrappedOrderSplitNotice
