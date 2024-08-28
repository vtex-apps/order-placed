import React, { FC, useEffect, useState } from 'react'
import { OrderOptions } from 'thefoschini.order-details'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'
import { getCookie } from './utils/functions'

interface Props {
  fullWidth?: boolean
  myAccountPath?: string
}

const CSS_HANDLES = ['orderOptionsWrapper']

const WrappedOrderOptions: FC<Props> = ({
  fullWidth = false,
  myAccountPath = '/account',
}) => {
  const order = useOrder()
  const handles = useCssHandles(CSS_HANDLES)
  const hasTakeAwayParcels = order.takeAwayParcels.length > 0
  const [isApp, setIsApp] = useState(false)

  useEffect(() => {
    const isAppCookie = getCookie('is_app')
    setIsApp(isAppCookie === 'true')
  }, [])

  return (
    <OrderOptions
      className={`${handles.orderOptionsWrapper} flex-l`}
      allowCancellation={order.allowCancellation}
      orderId={order.orderId}
      takeaway={hasTakeAwayParcels}
      fullWidth={fullWidth}
      myAccountPath={myAccountPath}
      isApp={isApp}
    />
  )
}

export default WrappedOrderOptions
