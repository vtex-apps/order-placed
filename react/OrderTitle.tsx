import React from 'react'
import { FormattedMessage } from 'react-intl'

import { useOrder } from './components/OrderContext'

const OrderTitle = () => {
  const { orderId } = useOrder()

  return (
    <div className="t-heading-3 lh-copy">
      <FormattedMessage id="store/order.header.number" values={{ orderId }} />
    </div>
  )
}

export default OrderTitle
