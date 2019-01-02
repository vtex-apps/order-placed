import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ShippingHeader from './ShippingHeader'
import ProductList from '../ProductList'

const Shipping = ({ data, currency }) => {
  data = data.filter(parcel => (parcel.deliveryChannel === 'delivery'))
  return (
    <Fragment>
      {
        data.map((delivery, index) => (
          <div className="mv8 flex flex-column justify-between" key={index}>
            <ShippingHeader shippingData={delivery} />
            <ProductList products={delivery.items} currency={currency} />
          </div>
        ))
      }
    </Fragment>
  )
}

Shipping.propTypes = {
  data: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
}

export default Shipping
