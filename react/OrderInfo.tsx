import React, { FunctionComponent } from 'react'

import { OrderContext } from './components/OrderContext'
import OrderTotal from './components/OrderInfo/OrderTotal'

interface Props {
  order: Order
}

const OrderInfo: FunctionComponent<Props> = ({ order, children }) => {
  return (
    <OrderContext.Provider value={order}>
      {children}
      <OrderTotal
        items={order.items}
        totals={order.totals}
        orderValue={order.value}
      />
    </OrderContext.Provider>
  )
}

export default OrderInfo
