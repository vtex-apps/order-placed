import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import Address from '../Address'
import { intlMessage } from '../../utils'

const StorePickUpHeader = ({ shippingData, index, numPackages, intl }) => {
  const multiplePickups = numPackages > 1
  const receiverName = shippingData.address.receiverName
  const additionalInfo =
    shippingData.selectedSlaObj.pickupStoreInfo.additionalInfo
  return (
    <Fragment>
      <p
        data-testid="storepickup-header"
        className="t-heading-4-ns t-heading-5"
      >
        {intlMessage(intl, 'pickup.header.title')}
        {multiplePickups &&
          intlMessage(intl, 'common.header.counter', {
            index: index + 1,
            numPackages,
          })}
        <br />
        <small className="c-muted-2 t-small">
          <TranslateEstimate
            shippingEstimate={shippingData.shippingEstimate}
            scheduled={shippingData.deliveryWindow}
            isPickup
          />
        </small>
      </p>
      <div className="flex flex-column justify-between flex-row-ns justify-start-l">
        <Address address={shippingData.address} pickup={shippingData} />
        <div className="c-on-base ml9-l">
          <p>{receiverName}</p>
          <p className="c-muted-1">{additionalInfo}</p>
        </div>
      </div>
    </Fragment>
  )
}

StorePickUpHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  numPackages: PropTypes.number.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(StorePickUpHeader)
