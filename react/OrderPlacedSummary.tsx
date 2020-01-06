import React, { FC } from 'react'
import estimateCalculator from '@vtex/estimate-calculator'
import { FormattedMessage } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'
import OrderSection from './OrderSection'

const CSS_HANDLES = [
  'summarySection',
  'summaryBox',
  'summaryTitle',
  'summaryContent',
  'summaryItems',
  'summaryShipping',
  'summaryAddress',
  'summaryBoxPickup',
  'summaryBoxDelivery',
]

const OrderPlacedSummary: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
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

  const boxClass = `${handles.summaryBox} ba b--muted-5 bw1 br3 w-50-m w-100`
  const titleClass = `${handles.summaryTitle} mv0 pv5 t-heading-5 tc bb b--muted-5 bw1 c-on-base`
  const contentClass = `${handles.summaryContent} pa6 t-body`
  const itemsClass = `${handles.summaryItems} mb4`
  const estimateClass = `${handles.summaryShipping} t-heading-5 mb8`
  const addressClass = `${handles.summaryAddress} c-muted-2 lh-copy`

  return (
    <OrderSection
      name="summary"
      className={`${handles.summarySection} w-90 w-80-ns center mb9 pb9 flex-m justify-between`}
    >
      <div
        className={`${boxClass} ${handles.summaryBoxDelivery} mr4-m mb4 mb0-m`}
      >
        <h5 className={titleClass}>
          <FormattedMessage id="store/summary.shipping" />
        </h5>
        <div className={contentClass}>
          <div className={itemsClass}>
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
          <div className={estimateClass}>
            <TranslateEstimate
              shippingEstimate={longestDeliveryEstimate.shippingEstimate}
            />
          </div>
          <div className={addressClass}>
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
      <div
        className={`${boxClass} ${handles.summaryBoxPickup} ml4-m mt4 mt0-m`}
      >
        <h5 className={titleClass}>
          <FormattedMessage id="store/summary.pickup" />
        </h5>
        <div className={contentClass}>
          <div className={itemsClass}>
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
          <div className={estimateClass}>
            <TranslateEstimate
              shippingEstimate={longestPickUpEstimate.shippingEstimate}
            />
          </div>
          <div className={addressClass}>
            <FormattedMessage
              id="store/summary.pickup.friendlyName"
              values={{
                friendlyName: totalPickUpParcels[0].pickupFriendlyName,
              }}
            />
          </div>
        </div>
      </div>
    </OrderSection>
  )
}

export default OrderPlacedSummary
