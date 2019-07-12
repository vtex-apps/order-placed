import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { Address } from 'vtex.order-details'

const ShippingHeader: FunctionComponent<Props> = ({
  shippingData,
  index,
  numPackages,
  giftRegistry,
}) => {
  const multipleDeliveries = numPackages > 1
  return (
    <header>
      <p data-testid="shipping-header" className="t-heading-4-ns t-heading-5">
        <FormattedMessage id="store/shipping.header.title" />
        {multipleDeliveries && (
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
          />
        </small>
        <br />
        <small className="c-muted-2 t-small">{shippingData.selectedSla}</small>
      </p>
      {giftRegistry &&
      giftRegistry.addressId === shippingData.address.addressId ? (
        <p className="c-muted-1">
          <FormattedMessage
            id="store/shipping.header.wishlist.address"
            values={{ giftRegistryName: giftRegistry.description }}
          />
        </p>
      ) : (
        <div className="mb5 mr10-m">
          <Address address={shippingData.address} />
        </div>
      )}
    </header>
  )
}

interface Props {
  shippingData: Parcel
  index: number
  numPackages: number
  giftRegistry?: GiftRegistry | null
}

export default ShippingHeader
