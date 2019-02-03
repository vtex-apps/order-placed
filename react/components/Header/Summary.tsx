import estimateCalculator from '@vtex/estimate-calculator'
import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { PageBlock } from 'vtex.styleguide'

import { getTotalParcelsFromOrderGroup } from '../../utils'

interface Props {
  data: Order[]
}

const OrderSummary: FunctionComponent<Props & InjectedIntlProps> = ({
  data,
  intl,
}) => {
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
    <section className="w-80 center bb b--muted-4 pb8">
      <PageBlock variation="half">
        <article className="center">
          <p className="t-heading-4 tc bb b--muted-5 mv0 pb5 c-on-base">
            {intl.formatMessage({ id: 'summary.shipping' })}
          </p>
          <p className="mb0 pt5 t-body mt2">
            <strong>
              {intl.formatMessage(
                { id: 'summary.items' },
                {
                  itemsQuantity: deliveryItemsQuantity,
                }
              )}
            </strong>
            {intl.formatMessage(
              { id: 'summary.shipping.quantity' },
              {
                shippings: totalDeliveries.length,
              }
            )}
          </p>
          <p className="t-heading-4 mt4">
            <TranslateEstimate
              shippingEstimate={longestDeliveryEstimate.shippingEstimate}
            />
          </p>
          <p className="c-muted-2 self-baseline mb0">
            {intl.formatMessage(
              { id: 'summary.shipping.address' },
              {
                addressNumber: totalDeliveries[0].address.number,
                addressStreet: totalDeliveries[0].address.street,
              }
            )}
          </p>
        </article>
        <article className="center">
          <p className="t-heading-4 tc bb b--muted-5 mv0 pb5 c-on-base">
            {intl.formatMessage({ id: 'summary.pickup' })}
          </p>
          <p className="mb0 pt5 t-body mt2">
            <strong>
              {intl.formatMessage(
                { id: 'summary.items' },
                {
                  itemsQuantity: pickUpItemsQuantity,
                }
              )}
            </strong>
            {intl.formatMessage(
              { id: 'summary.pickup.quantity' },
              {
                pickups: totalPickUps.length,
              }
            )}
          </p>
          <p className="t-heading-4 mt4">
            <TranslateEstimate
              shippingEstimate={longestPickUpEstimate.shippingEstimate}
            />
          </p>
          <p className="c-muted-2 self-baseline mb0">
            {intl.formatMessage(
              { id: 'summary.pickup.friendlyName' },
              {
                friendlyName: totalPickUps[0].pickupFriendlyName,
              }
            )}
          </p>
        </article>
      </PageBlock>
    </section>
  )
}

export default injectIntl(OrderSummary)
