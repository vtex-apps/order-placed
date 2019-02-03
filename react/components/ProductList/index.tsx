import React, { Fragment, FunctionComponent } from 'react'
import Product from './Product'

interface Props {
  products: OrderItem[]
}

const ProductList: FunctionComponent<Props> = ({ products }) => (
  <Fragment>
    {products.map((product: OrderItem) => (
      <Product productInfo={product} key={product.id} />
    ))}
  </Fragment>
)
export default ProductList
