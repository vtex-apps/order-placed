import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'

import Price from '../Payment/FormattedPrice'
import { getTotals } from '../../utils'
import TaxTooltip from './TaxTooltip'

const ShippingTotals: FunctionComponent<Props> = ({
  items,
  totals,
  orderValue,
}) => {
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const [newTotals, taxes] = getTotals(totals)

  return (
    <div className="flex-l justify-end pl6-l w-100">
      <div className="mv8 w-100 w-60-l">
        {newTotals.map(total => {
          if (total.value === 0) return null
          return (
            <li
              className="flex justify-between items-center c-muted-1"
              key={total.id}
            >
              <p className="mv3">
                <TranslateTotalizer totalizer={total} />
                {total.id === 'Items' && ` (${numItems})`}
                {total.id === 'Tax' && taxes.length > 0 && (
                  <TaxTooltip taxesTotals={taxes} />
                )}
              </p>
              <div className="c-on-base">
                <Price value={total.value} />
              </div>
            </li>
          )
        })}
        <div className="flex justify-between items-center c-on-base">
          <p className="t-heading-2-ns t-heading-3 mv4">
            <strong>
              <FormattedMessage id="store/order.totals.total" />
            </strong>
          </p>
          <strong className="t-heading-2-ns t-heading-3 mv4">
            <Price value={orderValue} />
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
