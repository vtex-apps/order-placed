import React from 'react'
import { FormattedMessage, FormattedTime, FormattedDate } from 'react-intl'

import { useOrder } from './components/OrderContext'

const OrderDate = () => {
  const { creationDate } = useOrder()

  return (
    <small className="c-muted-2 t-body lh-copy">
      <FormattedMessage
        id="store/order.header.date"
        values={{
          orderDate: <FormattedDate value={creationDate} />,
          orderTime: <FormattedTime value={creationDate} />,
        }}
      />
    </small>
  )
}

export default OrderDate
