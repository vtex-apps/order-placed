import React, { FC } from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'
import ProductList from './components/ProductList'
import StorePickUpHeader from './components/PickUpHeader'
import OrderSection from './OrderSection'

const CSS_HANDLES = ['parcel', 'parcelHeaderColumn']

const PickupItems: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { pickUpParcels } = useOrder()

  if (pickUpParcels.length === 0) {
    return null
  }

  return (
    <OrderSection id="pickup-items">
      {pickUpParcels.map((pickup: Parcel, index: number) => (
        <div
          className={`${applyModifiers(
            handles.parcel,
            'pickup'
          )} mv8 flex-l justify-between flex-column flex-row-m`}
          key={index}
        >
          <div className={handles.parcelHeaderColumn}>
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
