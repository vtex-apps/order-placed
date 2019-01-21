import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { ProductImage } from 'vtex.order-details'
import { intlMessage } from '../../utils'
import FormattedPrice from '../Payment/FormattedPrice'

const Product = ({ productInfo, intl }) => (
  <div className="flex justify-between mv4">
    <div className="flex items-center">
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
            {productInfo.measurementUnit !== 'un' && (
              <small className="t-mini c-on-base">
                <br />
                {`${productInfo.unitMultiplier} ${productInfo.measurementUnit}`}
              </small>
            )}
          </p>
        </a>
        <p className="t-mini c-muted-1">
          {intlMessage(intl, 'products.quantity', {
            quantity: productInfo.quantity,
          })}
        </p>
      </div>
    </div>
    <p>
      <FormattedPrice value={productInfo.price * productInfo.quantity} />
    </p>
  </div>
)

Product.propTypes = {
  productInfo: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Product)
