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
        <div className="pv5 t-heading-5 tc bb b--muted-5 bw1 c-on-base">
          <FormattedMessage id="store/summary.shipping" />
        </div>
        <div className="pa6 t-body">
          <div className="mb4">
            <strong>
              <FormattedMessage
                id="store/summary.items"
                values={{ itemsQuantity: deliveryItemsQuantity }}
              />
            </strong>
            <FormattedMessage
              id="store/summary.shipping.quantity"
              values={{ shippings: totalDeliveryParcels.length }}
            />
          </div>
          <div className="t-heading-5 mb8">
            <TranslateEstimate
              shippingEstimate={longestDeliveryEstimate.shippingEstimate}
            />
          </div>
          <div className="c-muted-2 lh-copy">
            <FormattedMessage
              id="store/summary.shipping.address"
              values={{
                addressNumber: totalDeliveryParcels[0].address.number,
                addressStreet: totalDeliveryParcels[0].address.street,
              }}
            />
          </div>
        </div>
      </div>
      <div className="ba b--muted-5 bw1 br3 w-50-m w-100 ml4-m mt4 mt0-m">
        <div className="pv5 t-heading-5 tc bb b--muted-5 bw1 c-on-base">
          <FormattedMessage id="store/summary.pickup" />
        </div>
        <div className="pa6 t-body">
          <div className="mb4">
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
          </div>
          <div className="t-heading-5 mb8">
            <TranslateEstimate
              shippingEstimate={longestPickUpEstimate.shippingEstimate}
            />
          </div>
          <div className="c-muted-2 lh-copy">
            <FormattedMessage
              id="store/summary.pickup.friendlyName"
              values={{
                friendlyName: totalPickUpParcels[0].pickupFriendlyName,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderSummary
