import React, { FC } from 'react'
import estimateCalculator from '@vtex/estimate-calculator'
import { FormattedMessage } from 'react-intl'

import { useOrderGroup } from './components/OrderGroupContext'
import SummaryBox from './components/SummaryBox'

const OrderPlacedSummary: FC = () => {
  const { totalPickUpParcels } = useOrderGroup()

  if (totalPickUpParcels.length === 0) {
    return null
  }

  const pickUpItemsQuantity = totalPickUpParcels.reduce(
    (acc, pickupPackage) => acc + pickupPackage.items.length,
    0
  )

  const longestPickUpEstimate = estimateCalculator.getLatestSla(
    totalPickUpParcels
  )

  return (
    <SummaryBox
      type="pickup"
      title={<FormattedMessage id="store/summary.pickup" />}
      itemQuantity={
        <FormattedMessage
          id="store/summary.items"
          values={{ itemsQuantity: pickUpItemsQuantity }}
        />
      }
      parcelQuantity={
        <FormattedMessage
          id="store/summary.pickup.quantity"
          values={{ pickups: totalPickUpParcels.length }}
        />
      }
      shippingEstimate={longestPickUpEstimate.shippingEstimate}
      shippingAddress={
        <FormattedMessage
          id="store/summary.pickup.friendlyName"
          values={{
            friendlyName: totalPickUpParcels[0].pickupFriendlyName,
          }}
        />
      }
    />
  )
}

export default OrderPlacedSummary
