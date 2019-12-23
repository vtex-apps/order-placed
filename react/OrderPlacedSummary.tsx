import React, { FC } from 'react'
import estimateCalculator from '@vtex/estimate-calculator'
import { FormattedMessage } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'

import { useOrderGroup } from './components/OrderGroupContext'

const OrderSummary: FC = () => {
  const { totalDeliveryParcels, totalPickUpParcels } = useOrderGroup()

  if (totalDeliveryParcels.length === 0 || totalPickUpParcels.length === 0) {
    return null
  }

  const deliveryItemsQuantity = totalDeliveryParcels.reduce(
    (acc, deliveryPackage) => acc + deliveryPackage.items.length,
    0
  )
  const pickUpItemsQuantity = totalPickUpParcels.reduce(
    (acc, pickupPackage) => acc + pickupPackage.items.length,
    0
  )

  const longestDeliveryEstimate = estimateCalculator.getLatestSla(
    totalDeliveryParcels
  )
  const longestPickUpEstimate = estimateCalculator.getLatestSla(
    totalPickUpParcels
  )

  return (
    <section
      data-testid="summary"
      className="bb b--muted-4 mb9 pb9 w-90 w-80-ns center flex-m justify-between"
    >
      <div className="ba b--muted-5 bw1 br3 w-50-m w-100 mr4-m mb4 mb0-m">
        <p className="t-heading-5 tc bb b--muted-5 bw1 pb5 c-on-base">
          <FormattedMessage id="store/summary.shipping" />
        </p>
        <p className="mb0 t-body ph6 mt6">
          <strong>
            <FormattedMessage
              id="store/summary.items"
              values={{
                itemsQuantity: deliveryItemsQuantity,
              }}
            />
          </strong>
          <FormattedMessage
            id="store/summary.shipping.quantity"
            values={{
              shippings: totalDeliveryParcels.length,
            }}
          />
        </p>
        <p className="t-heading-5 mt4 mb8 ph6">
          <TranslateEstimate
            shippingEstimate={longestDeliveryEstimate.shippingEstimate}
          />
        </p>
        <p className="c-muted-2 self-baseline mv6 lh-copy ph6">
          <FormattedMessage
            id="store/summary.shipping.address"
            values={{
              addressNumber: totalDeliveryParcels[0].address.number,
              addressStreet: totalDeliveryParcels[0].address.street,
            }}
          />
        </p>
      </div>
      <div className="ba b--muted-5 bw1 br3 w-50-m w-100 ml4-m mt4 mt0-m">
        <p className="t-heading-5 tc bb b--muted-5 bw1 pb5 c-on-base">
          <FormattedMessage id="store/summary.pickup" />
        </p>
        <p className="mb0 t-body ph6 mt6">
          <strong>
            <FormattedMessage
              id="store/summary.items"
              values={{
                itemsQuantity: pickUpItemsQuantity,
              }}
            />
          </strong>
          <FormattedMessage
            id="store/summary.pickup.quantity"
            values={{
              pickups: totalPickUpParcels.length,
            }}
          />
        </p>
        <p className="t-heading-5 mt4 mb8 ph6">
          <TranslateEstimate
            shippingEstimate={longestPickUpEstimate.shippingEstimate}
          />
        </p>
        <p className="c-muted-2 self-baseline mv6 lh-copy ph6">
          <FormattedMessage
            id="store/summary.pickup.friendlyName"
            values={{
              friendlyName: totalPickUpParcels[0].pickupFriendlyName,
            }}
          />
        </p>
      </div>
    </section>
  )
}

export default OrderSummary
