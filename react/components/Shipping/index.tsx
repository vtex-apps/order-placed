import React, { Fragment, FunctionComponent } from 'react'

import ProductList from '../ProductList'

import ShippingHeader from './ShippingHeader'

interface Props {
  deliveryPackages: Parcel[]
  giftRegistryData?: GiftRegistry | null
}

const Shipping: FunctionComponent<Props> = ({
  deliveryPackages,
  giftRegistryData,
}) => (
  <Fragment>
    {deliveryPackages.map((delivery, index) => (
      <section
        className="mv8 flex-l justify-between flex-column flex-row-m"
        key={index}
      >
        <ShippingHeader
          shippingData={delivery}
          index={index}
          numPackages={deliveryPackages.length}
          giftRegistry={giftRegistryData}
        />
        <ProductList products={delivery.items} />
      </section>
    ))}
  </Fragment>
)
export default Shipping
