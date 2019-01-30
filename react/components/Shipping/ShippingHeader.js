import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import Address from '../Address'
import { intlMessage } from '../../utils'

const ShippingHeader = ({ shippingData, index, numPackages, intl }) => {
  const multipleDeliveries = numPackages > 1
  return (
    <header>
      <p data-testid="shipping-header" className="t-heading-4-ns t-heading-5">
        {intlMessage(intl, 'shipping.header.title')}
        {multipleDeliveries &&
          intlMessage(intl, 'common.header.counter', {
            index: index + 1,
            numPackages,
          })}
        <br />
        <small className="c-muted-2 t-small">
          <TranslateEstimate
            shippingEstimate={shippingData.shippingEstimate}
            scheduled={shippingData.deliveryWindow}
          />
        </small>
        <br />
        <small className="c-muted-2 t-small">{shippingData.selectedSla}</small>
      </p>
      <Address address={shippingData.address} />
    </header>
  )
}

ShippingHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  numPackages: PropTypes.number.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(ShippingHeader)
