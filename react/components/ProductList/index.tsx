import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import BundleInfo from './BundleItems'
import Attachment from './Attachments'
import Product from './Product'
import useGetBagsSgrIDs from '../../hooks/useGetBagsSgrIDs'

interface Props {
  products: OrderItem[]
}

const CSS_HANDLES = ['productList', 'productListItem']

const ProductList: FC<Props> = ({ products }) => {
  const { bagsIDs, sgrIDs } = useGetBagsSgrIDs()
  const prodsWithoutBagsOrSgr = products?.filter(prod => !bagsIDs?.includes(prod.id) && !sgrIDs?.includes(prod.id))

  const handles = useCssHandles(CSS_HANDLES)
  return (
    <ul className={`${handles.productList} w-60-l w-100 list pl0`}>
      {prodsWithoutBagsOrSgr.map((product: OrderItem) => (
        <li
          key={product.id}
          className={`${handles.productListItem} db bb b--muted-4 mb7 pb7`}
        >
          <Product product={product} />
          <BundleInfo product={product} />
          <Attachment product={product} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
