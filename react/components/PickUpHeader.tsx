import React, { FC, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { Address } from 'vtex.order-details'

interface Props {
  shippingData: Parcel
  index: number
  numPackages: number
}

const StorePickUpHeader: FC<Props> = ({ shippingData, index, numPackages }) => {
  const multiplePickups = numPackages > 1
  const receiverName = shippingData.address.receiverName
  const additionalInfo =
    shippingData.selectedSlaObj.pickupStoreInfo.additionalInfo
  return (
    <Fragment>
      <div
        className="t-heading-4-ns t-heading-5 mb5"
        data-testid="storepickup-header"
      >
        <FormattedMessage id="store/pickup.header.title" />
        {multiplePickups && (
          <FormattedMessage
            id="store/common.header.counter"
            values={{
              index: index + 1,
              numPackages,
            }}
          />
        )}
        <br />
        <small className="c-muted-2 t-small">
          <TranslateEstimate
            shippingEstimate={shippingData.shippingEstimate}
            scheduled={shippingData.deliveryWindow}
            isPickup
          />
        </small>
      </div>

      <div className="flex justify-left-m flex-column-s flex-column-l flex-row-m justify-between-l justify-start-l">
        <div className="mb5 mr10-m">
          <Address address={shippingData.address} pickup={shippingData} />
        </div>
        <div className="c-on-base lh-copy">
          <p>{receiverName}</p>
          <p className="c-muted-1">{additionalInfo}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default StorePickUpHeader
