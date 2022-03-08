import React, { FC, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { Address } from 'thefoschini.order-details'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

interface Props {
  shippingData: Parcel
  index: number
  numPackages: number
}

const CSS_HANDLES = [
  'packageHeader',
  'packageShippingEstimate',
  'packageInfoWrapper',
  'packageAddressWrapper',
  'packageReceiver',
  'packageReceiverName',
  'packageAdditionalInfo',
  'packageAddressTitle',
] as const

const StorePickUpHeader: FC<Props> = ({ shippingData, index, numPackages }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const multiplePickups = numPackages > 1
  const { receiverName } = shippingData.address
  const { additionalInfo } = shippingData.selectedSlaObj.pickupStoreInfo
  return (
    <Fragment>
      <div
        className={`${applyModifiers(
          handles.packageHeader,
          'pickup'
        )} t-heading-4-ns t-heading-5 mb5`}
        data-testid="storepickup-header"
      >
        <FormattedMessage id="store/pickup.header.title" />
        {multiplePickups && (
          <FormattedMessage
            id="store/common.header.counter"
            values={{ index: index + 1, numPackages }}
          />
        )}
        <br />
        <small
          className={`${handles.packageShippingEstimate} c-muted-2 t-small`}
        >
          <TranslateEstimate
            shippingEstimate={shippingData.shippingEstimate}
            scheduled={shippingData.deliveryWindow}
            isPickup
          />
        </small>
      </div>

      <div
        className={`${handles.packageInfoWrapper} flex justify-left-m flex-column-s flex-column-l flex-row-m justify-between-l justify-start-l`}
      >
        <span className={`${handles.packageAddressTitle} dn`}>
          <FormattedMessage id="store/shipping.header.address" />
        </span>
        <div className={`${handles.packageAddressWrapper} mb5 mr10-m`}>
          <Address address={shippingData.address} pickup={shippingData} />
        </div>
        <div className={`${handles.packageReceiver} c-on-base lh-copy`}>
          <p className={`${handles.packageReceiverName}`}>{receiverName}</p>
          <p className={`${handles.packageAdditionalInfo} c-muted-1`}>
            {additionalInfo}
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default StorePickUpHeader
