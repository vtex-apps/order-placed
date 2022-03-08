import React, { FC, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { Address } from 'thefoschini.order-details'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

interface Props {
  shippingData: Parcel
  index: number
  numPackages: number
  giftRegistry?: GiftRegistry | null
}

const CSS_HANDLES = [
  'packageHeader',
  'packageShippingEstimate',
  'packageSLA',
  'packageGiftDescription',
  'packageAddressWrapper',
  'packageAddressTitle',
  'packageDeliveryTitle',
] as const

const DeliveryHeader: FC<Props> = ({
  shippingData,
  index,
  numPackages,
  giftRegistry,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const multipleDeliveries = numPackages > 1

  return (
    <Fragment>
      <div
        className={`${applyModifiers(
          handles.packageHeader,
          'delivery'
        )} t-heading-4-ns t-heading-5 mb5`}
        data-testid="shipping-header"
      >
        <span className={`${handles.packageDeliveryTitle}`}>
          <FormattedMessage id="store/shipping.header.title" />
          {multipleDeliveries && (
            <FormattedMessage
              id="store/common.header.counter"
              values={{ index: index + 1, numPackages }}
            />
          )}
        </span>
        <br />
        <small
          className={`${handles.packageShippingEstimate} c-muted-2 t-small`}
        >
          <TranslateEstimate
            shippingEstimate={shippingData.shippingEstimate}
            scheduled={shippingData.deliveryWindow}
          />
        </small>
        <br />
        <small className={`${handles.packageSLA} c-muted-2 t-small`}>
          {shippingData.selectedSla}
        </small>
      </div>

      {giftRegistry &&
      giftRegistry.addressId === shippingData.address.addressId ? (
        <div className={`${handles.packageGiftDescription} c-muted-1`}>
          <span className={`${handles.packageAddressTitle} dn`}>
            <FormattedMessage id="store/shipping.header.address" />
          </span>
          <FormattedMessage
            id="store/shipping.header.wishlist.address"
            values={{ giftRegistryName: giftRegistry.description }}
          />
        </div>
      ) : (
        <div className={`${handles.packageAddressWrapper} mb5 mr10-m`}>
          <span className={`${handles.packageAddressTitle} dn`}>
            <FormattedMessage id="store/shipping.header.address" />
          </span>
          <Address address={shippingData.address} />
        </div>
      )}
    </Fragment>
  )
}

export default DeliveryHeader
