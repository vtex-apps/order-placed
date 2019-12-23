import React, { FunctionComponent } from 'react'

import { OrderContext } from './components/OrderContext'

interface Props {
  order: Order
}

const OrderInfo: FunctionComponent<Props> = ({ order, children }) => {
  return <OrderContext.Provider value={order}>{children}</OrderContext.Provider>
}

export default OrderInfo
