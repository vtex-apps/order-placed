import React, { Fragment, FunctionComponent } from 'react'
import ProductList from '../ProductList'
import ShippingHeader from './ShippingHeader'

interface Props {
  deliveryPackages: Parcel[]
}

const Shipping: FunctionComponent<Props> = ({ deliveryPackages }) => (
  <Fragment>
    {deliveryPackages.map((delivery, index) => (
      <section className="mv8 flex flex-column justify-between" key={index}>
        <ShippingHeader
          shippingData={delivery}
          index={index}
          numPackages={deliveryPackages.length}
        />
        <ProductList products={delivery.items} />
      </section>
    ))}
  </Fragment>
)
export default Shipping
