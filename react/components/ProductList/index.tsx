import React, { Fragment, FunctionComponent } from 'react'
import ProductAttachment from './Attachment'
import Product from './Product'

interface Props {
  products: OrderItem[]
}

const ProductList: FunctionComponent<Props> = ({ products }) => {
  return (
    <Fragment>
      {products.map((product: OrderItem) => (
        <Fragment>
          <Product productInfo={product} key={product.id} />
          {(product.bundleItems || product.attachments) && (
            <ProductAttachment
              attachmentsInfo={product.attachments}
              bundleInfo={product.bundleItems}
            />
          )}
        </Fragment>
      ))}
    </Fragment>
  )
}
export default ProductList
