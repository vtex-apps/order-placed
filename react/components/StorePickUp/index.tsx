import React, { Fragment, FunctionComponent } from 'react'

import ProductList from '../ProductList'
import StorePickUpHeader from './StorePickUpHeader'

interface Props {
  pickUpPackages: Parcel[]
}

const StorePickUp: FunctionComponent<Props> = ({ pickUpPackages }) => (
  <Fragment>
    {pickUpPackages.map((pickup: Parcel, index: number) => (
      <section
        className="mv8 flex-l justify-between flex-column flex-row-m"
        key={index}
      >
        <StorePickUpHeader
          shippingData={pickup}
          index={index}
          numPackages={pickUpPackages.length}
        />
        <ProductList products={pickup.items} />
      </section>
    ))}
  </Fragment>
)

export default StorePickUp
