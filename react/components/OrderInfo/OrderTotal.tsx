import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'

import FormattedPrice from '../Payment/FormattedPrice'

const ShippingTotals: FunctionComponent<Props> = ({
  items,
  totals,
  orderValue,
}) => {
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="flex-l justify-end pl6-l w-100">
      <div className="mv8 w-100 w-60-l">
        {totals.map(total => (
          <div
            className="flex justify-between items-center c-muted-1"
            key={total.id}
          >
            <p className="mv3">
              <TranslateTotalizer totalizer={total} />
              {total.id === 'Items' && ` (${numItems})`}
            </p>
            <div className="c-on-base">
              <FormattedPrice value={total.value} />
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center c-on-base">
          <p className="t-heading-2-ns t-heading-3 mv4">
            <strong>
              <FormattedMessage id="store/order.totals.total" />
            </strong>
          </p>
          <strong className="t-heading-2-ns t-heading-3 mv4">
            <FormattedPrice value={orderValue} />
          </strong>
        </div>
      </div>
    </div>
  )
}

interface Props {
  items: OrderItem[]
  totals: OrderItemTotal[]
  orderValue: number
}

export default ShippingTotals
