import React, { FC, Fragment } from 'react'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

import ProductList from './components/ProductList'
import DeliveryHeader from './components/DeliveryHeader'
import { useOrder } from './components/OrderContext'

const CSS_HANDLES = ['package', 'packageHeaderColumn']

const DeliveryItems: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { deliveryParcels, giftRegistryData } = useOrder()

  if (deliveryParcels.length === 0) {
    return null
  }

  return (
    <Fragment>
      {deliveryParcels.map((deliveryParcel, index) => (
        <div
          className={`${applyModifiers(
            handles.package,
            'delivery'
          )} mv8 flex-l justify-between flex-column flex-row-m`}
          key={index}
        >
          <div className={handles.packageHeaderColumn}>
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
    </Fragment>
  )
}
export default DeliveryItems
