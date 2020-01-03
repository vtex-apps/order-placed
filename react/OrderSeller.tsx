import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['orderSoldBy', 'orderSeller']

const OrderSeller: FC = () => {
  const runtime = useRuntime()
  const order = useOrder()
  const handles = useCssHandles(CSS_HANDLES)

  const storeAccount = runtime.account
  const orderSeller = order.sellers[0].name

  if (storeAccount === orderSeller) {
    return null
  }

  return (
    <small className={`${handles.orderSoldBy} c-muted-2 t-body lh-copy`}>
      <FormattedMessage
        id="store/order.header.seller"
        values={{
          seller: (
            <span className={`${handles.orderSeller} c-action-primary`}>
              {orderSeller}
            </span>
          ),
        }}
      />
    </small>
  )
}

export default OrderSeller
