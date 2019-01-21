import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { ProductImage, ProductPrice } from 'vtex.order-details'
import { CurrencyContext } from '../../OrderPlaced'
import { intlMessage } from '../../utils'

const Product = ({ productInfo, intl }) => (
  <CurrencyContext.Consumer>
    {currency => (
      <div className="flex justify-between mv4">
        <div className="flex items-center">
          <ProductImage
            url={productInfo.imageUrl}
            alt={productInfo.name}
            className="w3 mr5"
          />
          <div className="flex flex-column items-between h-100">
            <p
              href={productInfo.detailUrl}
              className="t-body c-muted-1"
              target="_blank"
            >
              {productInfo.name}
              {productInfo.measurementUnit !== 'un' && (
                <small className="t-mini c-on-base">
                  <br />
                  {`${productInfo.unitMultiplier} ${
                    productInfo.measurementUnit
                  }`}
                </small>
              )}
            </p>
            <p className="t-mini c-muted-1">
              {intlMessage(intl, 'products.quantity', {
                quantity: productInfo.quantity,
              })}
            </p>
          </div>
        </div>
        <p>
          <ProductPrice
            value={productInfo.price * productInfo.quantity}
            currency={currency}
          />
        </p>
      </div>
    )}
  </CurrencyContext.Consumer>
)

Product.propTypes = {
  productInfo: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Product)
