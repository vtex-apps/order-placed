import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { PageBlock } from 'vtex.styleguide'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'
import parcelify from '@vtex/delivery-packages'
import estimateCalculator from '@vtex/estimate-calculator'

const OrderSummary = ({ data }) => {
  const totalParcels = data.reduce((acc, currOrder) => ([...acc, ...parcelify(currOrder)]), [])
  const delivery = totalParcels.filter((deliveryPackage) => deliveryPackage.deliveryChannel === 'delivery')
  const pickup = totalParcels.filter((pickupPackage) => pickupPackage.deliveryChannel === 'pickup-in-point')
  const deliveryItemsQuantity = delivery.reduce((acc, deliveryPackage) => acc + deliveryPackage.items.length, 0)
  const pickUpItemsQuantity = pickup.reduce((acc, pickupPackage) => acc + pickupPackage.items.length, 0)
  const longestDeliveryEstimate = estimateCalculator.getLatestSla(delivery)
  const longestPickUpEstimate = estimateCalculator.getLatestSla(pickup)

  return (delivery.length > 0 && pickup.length > 0) &&
  (
    <div className="w-80 center">
      <PageBlock variation="half">
        <div className="mb8 center">
          <p className="t-heading-4 tc">
            <FormattedMessage id={'summary.shipping'} />
          </p>
          <hr className="bg-muted-4 bt b--muted-4" />
          <p>
            <FormattedMessage
              id={'summary.items'}
              values={
                { itemsQuantity: deliveryItemsQuantity }
              }
            />
            <FormattedMessage
              id={'summary.shipping.quantity'}
              values={
                { shippings: delivery.length }
              }
            />
          </p>
          <p className="t-heading-4">
            <TranslateEstimate shippingEstimate={longestDeliveryEstimate.shippingEstimate} />
          </p>
          <small className="t-small c-muted-2">
            <FormattedMessage
              id={'summary.shipping.address'}
              values={{
                addressStreet: delivery[0].address.street,
                addressNumber: delivery[0].address.number,
              }}
            />
          </small>
        </div>
        <div className="mb8 center">
          <p className="t-heading-4 tc">
            <FormattedMessage id={'summary.pickup'} />
          </p>
          <hr className="bg-muted-4 bt b--muted-4" />
          <p>
            <FormattedMessage
              id={'summary.items'}
              values={
                { itemsQuantity: pickUpItemsQuantity }
              }
            />
            <FormattedMessage
              id={'summary.pickup.quantity'}
              values={
                { pickups: pickup.length }
              }
            />
          </p>
          <p className="t-heading-4">
            <TranslateEstimate shippingEstimate={longestPickUpEstimate.shippingEstimate} />
          </p>
          <small className="t-small c-muted-2">
            <FormattedMessage
              id={'summary.pickup.friendlyName'}
              values={{ friendlyName: pickup[0].pickupFriendlyName }}
            />
          </small>
        </div>
      </PageBlock>
    </div>
  )
}

OrderSummary.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(OrderSummary)
