import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'vtex.styleguide'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'
import parcelify from '@vtex/delivery-packages'
import estimateCalculator from '@vtex/estimate-calculator'

const OrderSummary = ({ data }) => {
  const totalParcels = data.reduce((acc, currOrder) => {
    acc.push(...parcelify(currOrder))
    return acc
  }, [])

  const delivery = totalParcels.filter((deliveryPackage) => deliveryPackage.deliveryChannel === 'delivery')
  const pickup = totalParcels.filter((pickupPackage) => pickupPackage.deliveryChannel === 'pickup-in-point')
  const deliveryItemsQuantity = delivery.reduce((acc, deliveryPackage) => acc + deliveryPackage.items.length, 0)
  const pickUpItemsQuantity = pickup.reduce((acc, pickupPackage) => acc + pickupPackage.items.length, 0)
  const longestDeliveryEstimate = estimateCalculator.getLatestSla(delivery)
  const longestPickUpEstimate = estimateCalculator.getLatestSla(pickup)

  return (
    <div className="flex justify-around mt7 mb9 flex-wrap">
      <div className="w-40-l w-90">
        <Box>
          <p className="t-heading-4 tc">A receber</p>
          <hr className="bg-muted-4 bt b--muted-4" />
          <p><strong>{`${deliveryItemsQuantity} itens`}</strong>, separados em <strong>{delivery.length} entregas</strong></p>
          <p className="t-heading-4"><TranslateEstimate shippingEstimate={longestDeliveryEstimate.shippingEstimate}/></p>
          <small className="t-small c-muted-2">{`Em ${delivery[0].address.street}, ${delivery[0].address.number}`}</small>
        </Box>
      </div>
      <div className="w-40-l w-90">
        <Box>
          <p className="t-heading-4 tc">A retirar</p>
          <hr className="bg-muted-4 bt b--muted-4" />
          <p><strong>{`${pickUpItemsQuantity} itens`}</strong>, separados em <strong>{pickup.length} retiradas</strong></p>
          <p className="t-heading-4"><TranslateEstimate shippingEstimate={longestPickUpEstimate.shippingEstimate}/></p>
          <small className="t-small c-muted-2">{`Em ${pickup[0].pickupFriendlyName}`}</small>
        </Box>
      </div>
    </div>
  )
}

OrderSummary.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired
}

export default OrderSummary
