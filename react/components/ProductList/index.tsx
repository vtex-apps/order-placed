import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import BundleInfo from './BundleItems'
import Attachment from './Attachments'
import Product from './Product'

const CSS_HANDLES = ['productListWrapper', 'productListItem']

interface Props {
  products: OrderItem[]
}

const ProductList: FC<Props> = ({ products }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.productListWrapper} w-60-l w-100`}>
      {products.map(product => (
        <div
          key={product.id}
          className={`${handles.productListItem} bb b--muted-4 mb7 pb7`}
        >
          <Product product={product} />
          <BundleInfo product={product} />
          <Attachment product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
