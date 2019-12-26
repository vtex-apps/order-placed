import React, { FC } from 'react'

import { useOrder } from './components/OrderContext'
import ProductList from './components/ProductList'
import StorePickUpHeader from './components/PickUpHeader'

const PickupItems: FC = () => {
  const { pickUpParcels } = useOrder()

  if (pickUpParcels.length === 0) {
    return null
  }

  return (
    <section className="bb b--muted-4">
      {pickUpParcels.map((pickup: Parcel, index: number) => (
        <div
          className="mv8 flex-l justify-between flex-column flex-row-m"
          key={index}
        >
          <StorePickUpHeader
            shippingData={pickup}
            index={index}
            numPackages={pickUpParcels.length}
          />
          <ProductList products={pickup.items} />
        </div>
      ))}
    </section>
  )
}

export default PickupItems
