import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'vtex.styleguide'
import { parcelShape } from '../../proptypes/shapes'
import estimateCalculator from '@vtex/estimate-calculator'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'

const OrderSummary = ({ delivery, pickup }) => {
  let deliveryItemsQuantity = 0
  delivery.forEach(deliveryPackage => { deliveryItemsQuantity += deliveryPackage.items.length })

  let pickUpItemsQuantity = 0
  pickup.forEach(pickupPackage => { pickUpItemsQuantity += pickupPackage.items.length })

  const longestDeliveryEstimate = estimateCalculator.getLatestSla(delivery)
  const longestPickUpEstimate = estimateCalculator.getLatestSla(pickup)

  return (
    <div className="flex justify-around mv7 flex-wrap">
      <div className="w-40-l w-90">
        <Box>
          <p className="t-heading-4 tc">A receber</p>
          <hr className="bg-muted-4 bt b--muted-4" />
          <p><strong>{`${deliveryItemsQuantity} itens`}</strong>{`, separados em ${delivery.length} entregas`}</p>
          <p className="t-heading-4"><TranslateEstimate shippingEstimate={longestDeliveryEstimate.shippingEstimate}/></p>
          <small className="t-small">{`Em ${delivery[0].address.street}, ${delivery[0].address.number}`}</small>
        </Box>
      </div>
      <div className="w-40-l w-90">
        <Box>
          <p className="t-heading-4 tc">A retirar</p>
          <hr className="bg-muted-4 bt b--muted-4" />
          <p><strong>{`${pickUpItemsQuantity} itens`}</strong>{`, separados em ${pickup.length} retiradas`}</p>
          <p className="t-heading-4"><TranslateEstimate shippingEstimate={longestPickUpEstimate.shippingEstimate}/></p>
          <small className="t-small">{`Em ${pickup[0].pickupFriendlyName}`}</small>
        </Box>
      </div>
    </div>
  )
}

OrderSummary.propTypes = {
  delivery: PropTypes.arrayOf(parcelShape).isRequired,
  pickup: PropTypes.arrayOf(parcelShape).isRequired,
}

export default OrderSummary
