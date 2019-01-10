import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'
import Address from '../Address'

const ShippingHeader = ({ shippingData, index, numPackages }) => {
  const multipleDeliveries = (numPackages > 1)
  return (
    <Fragment>
      <p className="t-heading-4-ns t-heading-5">
        <FormattedMessage
          id={'shipping.header.title'}
        />
        {
          multipleDeliveries &&
            <FormattedMessage
              id={'common.header.counter'}
              values={{
                index: index + 1,
                numPackages,
              }}
            />
        }
        <br />
        <small className="c-muted-2 t-small">
          <TranslateEstimate shippingEstimate={shippingData.shippingEstimate} />
        </small>
      </p>
      <Address address={shippingData.address} />
    </Fragment>
  )
}

ShippingHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  numPackages: PropTypes.number.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(ShippingHeader)
