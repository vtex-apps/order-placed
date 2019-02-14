import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { ProductImage } from 'vtex.order-details'

import FormattedPrice from '../Payment/FormattedPrice'

interface Props {
  productInfo: OrderItem
}

const Product: FunctionComponent<Props & InjectedIntlProps> = ({
  productInfo,
  intl,
}) => {
  const showMeasurementUnit =
    productInfo.unitMultiplier !== 1 || productInfo.measurementUnit !== 'un'

  return (
    <div className="flex justify-between flex-column-s flex-row-m pv5">
      <div className="flex items-center flex-column flex-row-m mr8-m">
        <ProductImage
          url={productInfo.imageUrl}
          alt={productInfo.name}
          className="w3 mr5"
        />
        <div className="flex flex-column items-between h-100">
          <a
            href={productInfo.detailUrl}
            className="t-body c-muted-1 no-underline"
            target="_blank"
          >
            <p>
              {productInfo.name}
              {showMeasurementUnit && (
                <small className="t-mini c-on-base tc tl-m">
                  <br />
                  {`${productInfo.unitMultiplier} ${
                    productInfo.measurementUnit
                  }`}
                </small>
              )}
            </p>
          </a>
          <p className="t-mini c-muted-1 tc tl-m">
            {intl.formatMessage(
              { id: 'products.quantity' },
              {
                quantity: productInfo.quantity,
              }
            )}
          </p>
        </div>
      </div>
      <p className="tc tr-m">
        <FormattedPrice value={productInfo.price * productInfo.quantity} />
      </p>
    </div>
  )
}

export default injectIntl(Product)
