import React from 'react'
import { CustomerInfo } from 'thefoschini.order-details'

import { useOrder } from './components/OrderContext'

const OrderCustomerInfo = () => {
  const { clientProfileData } = useOrder()

  if (
    clientProfileData.firstName == null ||
    clientProfileData.lastName == null
  ) {
    return null
  }

  return <CustomerInfo profile={clientProfileData} />
}

export default OrderCustomerInfo
