import React from 'react'
import PropTypes from 'prop-types'
import ShippingHeader from './ShippingHeader'
import ProductList from '../ProductList'

const Shipping = ({ deliveryPackages }) => {
  return deliveryPackages.map((delivery, index) => (
    <section className="mv8 flex flex-column justify-between" key={index}>
      <ShippingHeader
        shippingData={delivery}
        index={index}
        numPackages={deliveryPackages.length}
      />
      <ProductList products={delivery.items} />
    </section>
  ))
}

Shipping.propTypes = {
  deliveryPackages: PropTypes.array.isRequired,
}

export default Shipping
