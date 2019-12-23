import React, { FC } from 'react'

import ProductList from './components/ProductList'
import ShippingHeader from './components/DeliveryHeader'
import { useOrder } from './components/OrderContext'

const Shipping: FC = () => {
  const { deliveryParcels, giftRegistryData } = useOrder()

  if (deliveryParcels.length === 0) {
    return null
  }

  return (
    <section className="bb b--muted-4">
      {deliveryParcels.map((deliveryParcel, index) => (
        <div
          className="mv8 flex-l justify-between flex-column flex-row-m"
          key={index}
        >
          <ShippingHeader
            shippingData={deliveryParcel}
            index={index}
            numPackages={deliveryParcels.length}
            giftRegistry={giftRegistryData}
          />
          <ProductList products={deliveryParcel.items} />
        </div>
      ))}
    </section>
  )
}
export default Shipping
