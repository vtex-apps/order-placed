import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { PageBlock } from 'vtex.styleguide'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'
import estimateCalculator from '@vtex/estimate-calculator'
import { getTotalParcelsFromOrderGroup, intlMessage } from '../../utils'

const OrderSummary = ({ data, intl }) => {
  const { totalDeliveries, totalPickUps } = getTotalParcelsFromOrderGroup(data)

  const deliveryItemsQuantity = totalDeliveries.reduce(
    (acc, deliveryPackage) => acc + deliveryPackage.items.length,
    0
  )
  const pickUpItemsQuantity = totalPickUps.reduce(
    (acc, pickupPackage) => acc + pickupPackage.items.length,
    0
  )
  const longestDeliveryEstimate = estimateCalculator.getLatestSla(
    totalDeliveries
  )
  const longestPickUpEstimate = estimateCalculator.getLatestSla(totalPickUps)

  return (
    totalDeliveries.length > 0 &&
    totalPickUps.length > 0 && (
      <div className="w-80 center">
        <PageBlock variation="half">
          <div className="mb8 center">
            <p className="t-heading-4 tc">
              {intlMessage(intl, 'summary.shipping')}
            </p>
            <hr className="bg-muted-4 bt b--muted-4" />
            <p>
              {intlMessage(intl, 'summary.items', {
                itemsQuantity: deliveryItemsQuantity,
              })}
              {intlMessage(intl, 'summary.shipping.quantity', {
                shippings: totalDeliveries.length,
              })}
            </p>
            <p className="t-heading-4">
              <TranslateEstimate
                shippingEstimate={longestDeliveryEstimate.shippingEstimate}
              />
            </p>
            <small className="t-small c-muted-2">
              {intlMessage(intl, 'summary.shipping.address', {
                addressStreet: totalDeliveries[0].address.street,
                addressNumber: totalDeliveries[0].address.number,
              })}
            </small>
          </div>
          <div className="mb8 center">
            <p className="t-heading-4 tc">
              {intlMessage(intl, 'summary.pickup')}
            </p>
            <hr className="bg-muted-4 bt b--muted-4" />
            <p>
              {intlMessage(intl, 'summary.items', {
                itemsQuantity: pickUpItemsQuantity,
              })}
              {intlMessage(intl, 'summary.pickup.quantity', {
                pickups: totalPickUps.length,
              })}
            </p>
            <p className="t-heading-4">
              <TranslateEstimate
                shippingEstimate={longestPickUpEstimate.shippingEstimate}
              />
            </p>
            <small className="t-small c-muted-2">
              {intlMessage(intl, 'summary.pickup.friendlyName', {
                friendlyName: totalPickUps[0].pickupFriendlyName,
              })}
            </small>
          </div>
        </PageBlock>
      </div>
    )
  )
}

OrderSummary.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(OrderSummary)
