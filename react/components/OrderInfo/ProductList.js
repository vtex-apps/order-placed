import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const ProductList = ({ products, currency }) => (
  <Fragment>
    {
      products.map(product =>
        <Product productInfo={product} currency={currency} key={product.id} />
      )
    }
  </Fragment>
)

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
}

export default ProductList
