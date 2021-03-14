import React, { FC, Fragment } from 'react'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'
import ProductList from './components/ProductList'
import StorePickUpHeader from './components/PickUpHeader'

const CSS_HANDLES = ['package', 'packageHeaderColumn']

interface Props {
  displayTitle?: boolean
  displayProducts?: boolean
}

const PickupPackages: FC<Props> = ({
  displayTitle = false,
  displayProducts = true,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const { pickUpParcels } = useOrder()

  if (pickUpParcels.length === 0) {
    return null
  }

  return (
    <Fragment>
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
              displayTitle={displayTitle}
            />
          </div>
          {displayProducts ? <ProductList products={pickup.items} /> : ''}
        </div>
      ))}
    </Fragment>
  )
}

export default PickupPackages
