import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'

import Address from '../Address'

interface Props {
  shippingData: Parcel
  index: number
  numPackages: number
  giftRegistry?: GiftRegistry | null
}

const ShippingHeader: FunctionComponent<Props & InjectedIntlProps> = ({
  shippingData,
  index,
  numPackages,
  giftRegistry,
  intl,
}) => {
  const multipleDeliveries = numPackages > 1
  return (
    <header>
      <p data-testid="shipping-header" className="t-heading-4-ns t-heading-5">
        {intl.formatMessage({ id: 'shipping.header.title' })}
        {multipleDeliveries &&
          intl.formatMessage(
            { id: 'common.header.counter' },
            {
              index: index + 1,
              numPackages,
            }
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
          {intl.formatMessage(
            { id: 'shipping.header.wishlist.address' },
            { giftRegistryName: giftRegistry.description }
          )}
        </p>
      ) : (
        <Address address={shippingData.address} />
      )}
    </header>
  )
}

export default injectIntl(ShippingHeader)
