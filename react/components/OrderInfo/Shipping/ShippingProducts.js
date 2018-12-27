import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Product from '../Product'

const ShippingProducts = ({ products }) => (
  <Fragment>
    {
      products.map(product => {
        return (
          <Product
            productInfo={product}
            key={product.id}
          />
        )
      })
    }
  </Fragment>
)

ShippingProducts.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ShippingProducts
