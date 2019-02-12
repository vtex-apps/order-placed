import React, { Fragment, FunctionComponent } from 'react'
import ProductAttachment from './Attachment'
import Product from './Product'

interface Props {
  products: OrderItem[]
}

const ProductList: FunctionComponent<Props> = ({ products }) => {
  return (
    <div className="flex flex-column justify-between w-75">
      {products.map((product: OrderItem, index: number) => (
        <Fragment key={product.id}>
          <Product
            productInfo={product}
            useBorder={index !== products.length - 1}
          />
          {(product.bundleItems || product.attachments) && (
            <ProductAttachment
              attachmentsInfo={product.attachments}
              bundleInfo={product.bundleItems}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default ProductList
