import React from 'react'
import PropTypes from 'prop-types'

import StorePickUpHeader from './StorePickUpHeader'
import ProductList from '../Product/ProductList'

const StorePickUp = ({ pickUpPackages }) => {
  return pickUpPackages.map((pickup, index) => (
    <section className="mv8 flex flex-column justify-between" key={index}>
      <StorePickUpHeader
        shippingData={pickup}
        index={index}
        numPackages={pickUpPackages.length}
      />
      <ProductList products={pickup.items} />
    </section>
  ))
}

StorePickUp.propTypes = {
  pickUpPackages: PropTypes.array.isRequired,
}

export default StorePickUp
