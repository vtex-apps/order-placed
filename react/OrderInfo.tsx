import React, { FC } from 'react'

import { OrderContext } from './components/OrderContext'

interface Props {
  order: Order
}

const OrderInfo: FC<Props> = ({ order, children }) => {
  return <OrderContext.Provider value={order}>{children}</OrderContext.Provider>
}

export default OrderInfo
