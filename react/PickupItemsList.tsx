import React, { Fragment, FC } from 'react'

import { useOrder } from './components/OrderContext'
import ProductList from './components/ProductList'
import StorePickUpHeader from './components/StorePickUp/StorePickUpHeader'

const PickupItemsList: FC = () => {
  const { pickUpParcels } = useOrder()

  if (pickUpParcels.length === 0) {
    return null
  }

  return (
    <Fragment>
      {pickUpParcels.map((pickup: Parcel, index: number) => (
        <section
          className="mv8 flex-l justify-between flex-column flex-row-m"
          key={index}
        >
          <StorePickUpHeader
            shippingData={pickup}
            index={index}
            numPackages={pickUpParcels.length}
          />
          <ProductList products={pickup.items} />
        </section>
      ))}
    </Fragment>
  )
}

export default PickupItemsList
