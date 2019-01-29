import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { PageBlock } from 'vtex.styleguide'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
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
      <section className="w-80 center bb b--muted-4 pb8">
        <PageBlock variation="half">
          <article className="center flex flex-column">
            <div>
              <p className="t-heading-4 tc bb b--muted-5 mv0 pb5 c-on-base">
                {intlMessage(intl, 'summary.shipping')}
              </p>
              <p className="mv0 pt5 t-body">
                <strong>
                  {intlMessage(intl, 'summary.items', {
                    itemsQuantity: deliveryItemsQuantity,
                  })}
                </strong>
                {intlMessage(intl, 'summary.shipping.quantity', {
                  shippings: totalDeliveries.length,
                })}
              </p>
              <p className="t-heading-4 mt4">
                <TranslateEstimate
                  shippingEstimate={longestDeliveryEstimate.shippingEstimate}
                />
              </p>
            </div>
            <p className="c-muted-2 self-baseline mb0">
              {intlMessage(intl, 'summary.shipping.address', {
                addressStreet: totalDeliveries[0].address.street,
                addressNumber: totalDeliveries[0].address.number,
              })}
            </p>
          </article>
          <article className="center flex flex-column">
            <p className="t-heading-4 tc bb b--muted-5 mv0 pb5 c-on-base">
              {intlMessage(intl, 'summary.pickup')}
            </p>

            <p className="mv0 pt5 t-body">
              <strong>
                {intlMessage(intl, 'summary.items', {
                  itemsQuantity: pickUpItemsQuantity,
                })}
              </strong>
              {intlMessage(intl, 'summary.pickup.quantity', {
                pickups: totalPickUps.length,
              })}
            </p>
            <p className="t-heading-4 mt4">
              <TranslateEstimate
                shippingEstimate={longestPickUpEstimate.shippingEstimate}
              />
            </p>
            <p className="c-muted-2 self-baseline mb0">
              {intlMessage(intl, 'summary.pickup.friendlyName', {
                friendlyName: totalPickUps[0].pickupFriendlyName,
              })}
            </p>
          </article>
        </PageBlock>
      </section>
    )
  )
}

OrderSummary.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(OrderSummary)
