import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'

import Address from '../Address'

interface Props {
  shippingData: Parcel
  index: number
  numPackages: number
}

const StorePickUpHeader: FunctionComponent<Props & InjectedIntlProps> = ({
  shippingData,
  index,
  numPackages,
  intl,
}) => {
  const multiplePickups = numPackages > 1
  const receiverName = shippingData.address.receiverName
  const additionalInfo =
    shippingData.selectedSlaObj.pickupStoreInfo.additionalInfo
  return (
    <header className="flex flex-column-m flex-row">
      <p
        data-testid="storepickup-header"
        className="t-heading-4-ns t-heading-5"
      >
        {intl.formatMessage({ id: 'pickup.header.title' })}
        {multiplePickups &&
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
            isPickup
          />
        </small>
      </p>
      <div className="flex flex-column justify-between justify-start-l">
        <Address address={shippingData.address} pickup={shippingData} />
        <div className="c-on-base">
          <p>{receiverName}</p>
          <p className="c-muted-1">{additionalInfo}</p>
        </div>
      </div>
    </header>
  )
}

export default injectIntl(StorePickUpHeader)
