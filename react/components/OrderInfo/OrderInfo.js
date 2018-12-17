import React from 'react'

import BasicInfo from './BasicInfo'
import ShippingInfo from './ShippingInfo'
import StorePickUpInfo from './StorePickUpInfo'
import Summary from './Summary'

const OrderInfo = () => {
  return (
    <div className="mv5">
      <BasicInfo />
      <ShippingInfo />
      <StorePickUpInfo />
      <Summary />
    </div>
  )
}

export default OrderInfo
