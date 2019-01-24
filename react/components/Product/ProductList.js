import React from 'react'
import PropTypes from 'prop-types'
import Product from '.'

const ProductList = ({ products }) =>
  products.map(product => <Product productInfo={product} key={product.id} />)

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList
