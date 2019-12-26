import React, { FC, Fragment } from 'react'

import ProductAttachment from './Attachment'
import Product from './Product'

interface Props {
  products: OrderItem[]
}

const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className="w-60-l w-100">
      {products.map((product, index, { length }) => (
        <Fragment key={product.id}>
          <Product product={product} />
          <ProductAttachment product={product} />
          <div className={`${index < length - 1 ? 'bb b--muted-4 mb7' : ''}`} />
        </Fragment>
      ))}
    </div>
  )
}

export default ProductList
