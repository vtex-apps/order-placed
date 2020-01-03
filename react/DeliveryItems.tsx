import React, { FC } from 'react'

import ProductList from './components/ProductList'
import DeliveryHeader from './components/DeliveryHeader'
import { useOrder } from './components/OrderContext'
import OrderSection from './OrderSection'

const DeliveryItems: FC = () => {
  const { deliveryParcels, giftRegistryData } = useOrder()

  if (deliveryParcels.length === 0) {
    return null
  }

  return (
    <OrderSection id="delivery-items">
      {deliveryParcels.map((deliveryParcel, index) => (
        <div
          className="mv8 flex-l justify-between flex-column flex-row-m"
          key={index}
        >
          <div>
            <DeliveryHeader
              shippingData={deliveryParcel}
              index={index}
              numPackages={deliveryParcels.length}
              giftRegistry={giftRegistryData}
            />
          </div>
          <ProductList products={deliveryParcel.items} />
        </div>
      ))}
    </OrderSection>
  )
}
export default DeliveryItems
