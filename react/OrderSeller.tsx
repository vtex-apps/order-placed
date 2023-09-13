import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['orderSoldBy', 'orderSeller']

const OrderSeller: FC = () => {
  const runtime = useRuntime()
  const handles = useCssHandles(CSS_HANDLES)

  const storeAccount = runtime.account
  const orderSeller = "Foschini Retail Group (Pty) Ltd" // https://tfginfotec.atlassian.net/browse/TLF-968 hardcoded for now

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
