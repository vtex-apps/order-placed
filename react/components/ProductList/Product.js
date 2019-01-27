import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { ProductImage } from 'vtex.order-details'
import { intlMessage } from '../../utils'
import FormattedPrice from '../Payment/FormattedPrice'

const Product = ({ productInfo, intl }) => (
  <article className="flex justify-between mv4 flex-column-s flex-row-m">
    <div className="flex items-center flex-column flex-row-m">
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
              <small className="t-mini c-on-base tc tl-m">
                <br />
                {`${productInfo.unitMultiplier} ${productInfo.measurementUnit}`}
              </small>
            )}
          </p>
        </a>
        <p className="t-mini c-muted-1 tc tl-m">
          {intlMessage(intl, 'products.quantity', {
            quantity: productInfo.quantity,
          })}
        </p>
      </div>
    </div>
    <p className="tc-s tr-m">
      <FormattedPrice value={productInfo.price * productInfo.quantity} />
    </p>
  </article>
)

Product.propTypes = {
  productInfo: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Product)
