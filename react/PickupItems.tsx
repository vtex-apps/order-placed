import React, { FC } from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'
import ProductList from './components/ProductList'
import StorePickUpHeader from './components/PickUpHeader'
import Section from './Section'

const CSS_HANDLES = ['package', 'packageHeaderColumn']

const PickupItems: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { pickUpParcels } = useOrder()

  if (pickUpParcels.length === 0) {
    return null
  }

  return (
    <Section name="pickupItems">
      {pickUpParcels.map((pickup: Parcel, index: number) => (
        <div
          className={`${applyModifiers(
            handles.package,
            'pickup'
          )} mv8 flex-l justify-between flex-column flex-row-m`}
          key={index}
        >
          <div className={handles.packageHeaderColumn}>
            <StorePickUpHeader
              shippingData={pickup}
              index={index}
              numPackages={pickUpParcels.length}
            />
          </div>
          <ProductList products={pickup.items} />
        </div>
      ))}
    </Section>
  )
}

export default PickupItems
