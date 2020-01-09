import React from 'react'
import { FormattedMessage, FormattedTime, FormattedDate } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['orderDatetime']

const OrderDate = () => {
  const { creationDate } = useOrder()
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <small className={`${handles.orderDatetime} c-muted-2 t-body lh-copy`}>
      <FormattedMessage
        id="store/order.header.date"
        values={{
          orderDate: (
            <time dateTime={creationDate}>
              <FormattedDate value={creationDate} />
            </time>
          ),
          orderTime: (
            <time dateTime={creationDate}>
              <FormattedTime value={creationDate} />
            </time>
          ),
        }}
      />
    </small>
  )
}

export default OrderDate
