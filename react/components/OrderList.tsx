import React, { FC } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './OrderGroupContext'
import { OrderContext } from './OrderContext'

const CSS_HANDLES = ['orderList', 'orderListItem']

const OrderList: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  return (
    <ul className={`${handles.orderList} list pa0 ma0`}>
      {orderGroup.orders.map(order => (
        <OrderContext.Provider key={order.orderId} value={order}>
          <li className={`${handles.orderListItem} db bb b--muted-4 pb9 mb9`}>
            <ExtensionPoint id="op-order" />
          </li>
        </OrderContext.Provider>
      ))}
    </ul>
  )
}

export default OrderList
