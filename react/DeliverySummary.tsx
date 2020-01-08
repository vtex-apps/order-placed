import React, { FC } from 'react'
import estimateCalculator from '@vtex/estimate-calculator'
import { FormattedMessage } from 'react-intl'

import { useOrderGroup } from './components/OrderGroupContext'
import SummaryBox from './components/SummaryBox'

const OrderPlacedSummary: FC = () => {
  const { totalDeliveryParcels } = useOrderGroup()

  if (totalDeliveryParcels.length === 0) {
    return null
  }

  const deliveryItemsQuantity = totalDeliveryParcels.reduce(
    (acc, deliveryPackage) => acc + deliveryPackage.items.length,
    0
  )

  const longestDeliveryEstimate = estimateCalculator.getLatestSla(
    totalDeliveryParcels
  )

  return (
    <SummaryBox
      type="delivery"
      title={<FormattedMessage id="store/summary.delivery" />}
      itemQuantity={
        <FormattedMessage
          id="store/summary.items"
          values={{ itemsQuantity: deliveryItemsQuantity }}
        />
      }
      parcelQuantity={
        <FormattedMessage
          id="store/summary.shipping.quantity"
          values={{ shippings: totalDeliveryParcels.length }}
        />
      }
      shippingEstimate={longestDeliveryEstimate.shippingEstimate}
      shippingAddress={
        <FormattedMessage
          id="store/summary.shipping.address"
          values={{
            addressNumber: totalDeliveryParcels[0].address.number,
            addressStreet: totalDeliveryParcels[0].address.street,
          }}
        />
      }
    />
  )
}

export default OrderPlacedSummary
