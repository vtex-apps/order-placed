import estimateCalculator from '@vtex/estimate-calculator'
import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'

interface Props {
  totalDeliveries: Parcel[]
  totalPickUps: Parcel[]
}

const OrderSummary: FunctionComponent<Props & InjectedIntlProps> = ({
  totalDeliveries,
  totalPickUps,
  intl,
}) => {
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
    <section
      data-testid="summary"
      className="w-90 w-80-ns center bb b--muted-4 pb8 flex justify-between flex-wrap flex-nowrap-m"
    >
      <article className="ba b--muted-5 bw1 br3 w-50-m w-100 mr4-m mb4 mb0-m">
        <p className="t-heading-5 tc bb b--muted-5 bw1 pb5 c-on-base">
          {intl.formatMessage({ id: 'summary.shipping' })}
        </p>
        <p className="mb0 t-body ph6 mt6">
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
        <p className="t-heading-5 mt4 mb8 ph6">
          <TranslateEstimate
            shippingEstimate={longestDeliveryEstimate.shippingEstimate}
          />
        </p>
        <p className="c-muted-2 self-baseline mv6 lh-copy ph6">
          {intl.formatMessage(
            { id: 'summary.shipping.address' },
            {
              addressNumber: totalDeliveries[0].address.number,
              addressStreet: totalDeliveries[0].address.street,
            }
          )}
        </p>
      </article>
      <article className="ba b--muted-5 bw1 br3 w-50-m w-100 ml4-m mt4 mt0-m">
        <p className="t-heading-5 tc bb b--muted-5 bw1 pb5 c-on-base">
          {intl.formatMessage({ id: 'summary.pickup' })}
        </p>
        <p className="mb0 t-body ph6 mt6">
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
        <p className="t-heading-5 mt4 mb8 ph6">
          <TranslateEstimate
            shippingEstimate={longestPickUpEstimate.shippingEstimate}
          />
        </p>
        <p className="c-muted-2 self-baseline mv6 lh-copy ph6">
          {intl.formatMessage(
            { id: 'summary.pickup.friendlyName' },
            {
              friendlyName: totalPickUps[0].pickupFriendlyName,
            }
          )}
        </p>
      </article>
    </section>
  )
}

export default injectIntl(OrderSummary)
