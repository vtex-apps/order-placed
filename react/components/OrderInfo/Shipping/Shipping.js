import React from 'react'
import PropTypes from 'prop-types'
import ShippingHeader from './ShippingHeader'
import ProductList from '../ProductList'

const Shipping = ({ data }) => {
  const deliveryPackages = data.filter(parcel => (parcel.deliveryChannel === 'delivery'))
  return (
    deliveryPackages.map((delivery, index) => (
      <div className="mv8 flex flex-column justify-between" key={index}>
        <ShippingHeader shippingData={delivery} />
        <ProductList products={delivery.items} />
      </div>
    ))
  )
}

Shipping.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Shipping
