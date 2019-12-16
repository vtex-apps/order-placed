import React, { FC, Fragment } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'

import { useOrderGroup } from './components/OrderGroupContext'

const OrdersList: FC = () => {
  const orderGroup = useOrderGroup()
  return (
    <Fragment>
      {orderGroup.orders.map((order, i, { length }) => (
        <Fragment key={order.orderId}>
          <ExtensionPoint id="order-info" order={order} />
          {i < length - 1 && <hr className="bg-muted-4 bt b--muted-4" />}
        </Fragment>
      ))}
    </Fragment>
  )
}

export default OrdersList
