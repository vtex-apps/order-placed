import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { ProductImage } from 'vtex.order-details'

import FormattedPrice from '../FormattedPrice'

interface Props {
  product: OrderItem
}

const Product: FC<Props> = ({ product }) => {
  const {
    detailUrl,
    imageUrl,
    measurementUnit,
    name,
    price,
    quantity,
    unitMultiplier,
  } = product

  const showMeasurementUnit = unitMultiplier !== 1 || measurementUnit !== 'un'

  return (
    <div className="w-100 flex-m tc tl-m">
      <div className="mr6-m mb6-s mb0-m">
        <div className="w4 h4 center">
          <ProductImage url={imageUrl} alt={name} />
        </div>
      </div>
      <div className="flex-m flex-column justify-between lh-copy">
        <a
          href={detailUrl}
          className="t-body c-muted-1 no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
          {showMeasurementUnit && (
            <small className="db mt3 t-mini c-on-base">
              {`${unitMultiplier} ${measurementUnit}`}
            </small>
          )}
        </a>
        <div className="t-mini c-muted-1 mt3 mt0-m">
          <FormattedMessage
            id="store/products.quantity"
            values={{
              quantity: quantity,
            }}
          />
        </div>
      </div>
      <div className="ml-auto mt3 mt0-m">
        <FormattedPrice value={price * quantity} />
      </div>
    </div>
  )
}

export default Product
