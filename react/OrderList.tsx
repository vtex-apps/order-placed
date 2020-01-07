import React, { FC } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'
import { OrderContext } from './components/OrderContext'

const CSS_HANDLES = ['orderList', 'orderListItem']

const OrderList: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  return (
    <ul className={`${handles.orderList} list`}>
      {orderGroup.orders.map(order => (
        <OrderContext.Provider key={order.orderId} value={order}>
          <li className={`${handles.orderListItem} bb b--muted-4 pb9 mb9`}>
            <ExtensionPoint id="order" />
          </li>
        </OrderContext.Provider>
      ))}
    </ul>
  )
}

export default OrderList
