import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { ProductImage } from 'vtex.order-details'

import FormattedPrice from '../FormattedPrice'

const Product: FC<Props> = ({ productInfo }) => {
  const showMeasurementUnit =
    productInfo.unitMultiplier !== 1 || productInfo.measurementUnit !== 'un'

  return (
    <div className="flex justify-between flex-column-s flex-row-m pv7">
      <div className="flex items-center flex-column flex-row-m mr8-m">
        <div>
          <ProductImage
            url={productInfo.imageUrl}
            alt={productInfo.name}
            className="w4 h4 mr6-m"
          />
        </div>
        <div className="flex flex-column items-between justify-between h-100">
          <a
            href={productInfo.detailUrl}
            className="t-body c-muted-1 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mt3">
              {productInfo.name}
              {showMeasurementUnit && (
                <small className="t-mini c-on-base tc tl-m">
                  <br />
                  {`${productInfo.unitMultiplier} ${productInfo.measurementUnit}`}
                </small>
              )}
            </p>
          </a>
          <p className="t-mini c-muted-1 tc tl-m mb3">
            <FormattedMessage
              id="store/products.quantity"
              values={{
                quantity: productInfo.quantity,
              }}
            />
          </p>
        </div>
      </div>
      <p className="tc tr-m mt3">
        <FormattedPrice value={productInfo.price * productInfo.quantity} />
      </p>
    </div>
  )
}

interface Props {
  productInfo: OrderItem
}

export default Product
