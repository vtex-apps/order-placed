import React, { FunctionComponent } from 'react'
import ProductAttachment from './Attachment'
import Product from './Product'

interface Props {
  products: OrderItem[]
}

const ProductList: FunctionComponent<Props> = ({ products }) => {
  return (
    <div className="flex flex-column justify-between w-75-m w-100">
      {products.map((product: OrderItem, index: number) => (
        <article
          className={`${
            index !== products.length - 1 ? 'bb b--muted-5 pb4' : ''
          }`}
          key={product.id}
        >
          <Product productInfo={product} />
          {(product.bundleItems || product.attachments) && (
            <ProductAttachment
              attachmentsInfo={product.attachments}
              bundleInfo={product.bundleItems}
            />
          )}
        </article>
      ))}
    </div>
  )
}

export default ProductList
