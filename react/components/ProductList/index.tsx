import React, { FunctionComponent } from 'react'

import ProductAttachment from './Attachment'
import Product from './Product'

interface Props {
  products: OrderItem[]
}

const ProductList: FunctionComponent<Props> = ({ products }) => {
  return (
    <div className="flex flex-column justify-between w-60-l w-100">
      {products.map((product: OrderItem, index: number) => (
        <div
          key={product.id}
          className={`${index !== products.length - 1 ? 'bb b--muted-4' : ''}`}
        >
          <Product productInfo={product} />
          {(product.bundleItems || product.attachments) && (
            <ProductAttachment
              attachmentsInfo={product.attachments}
              bundleInfo={product.bundleItems}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProductList
