import React, { FC } from 'react'

import { useOrder } from './components/OrderContext'
import ProductList from './components/ProductList'
import StorePickUpHeader from './components/PickUpHeader'
import OrderSection from './OrderSection'

const PickupItems: FC = () => {
  const { pickUpParcels } = useOrder()

  if (pickUpParcels.length === 0) {
    return null
  }

  return (
    <OrderSection>
      {pickUpParcels.map((pickup: Parcel, index: number) => (
        <div
          className="mv8 flex-l justify-between flex-column flex-row-m"
          key={index}
        >
          <div>
            <StorePickUpHeader
              shippingData={pickup}
              index={index}
              numPackages={pickUpParcels.length}
            />
          </div>
          <ProductList products={pickup.items} />
        </div>
      ))}
    </OrderSection>
  )
}

export default PickupItems
