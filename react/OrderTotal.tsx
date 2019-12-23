import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'

import FormattedPrice from './components/Payment/FormattedPrice'
import { useOrder } from './components/OrderContext'

const OrderTotal: FC = () => {
  const { items, totals, value: totalValue } = useOrder()
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="flex-l justify-end w-100">
      <ul className="list pa0 mv8 w-100 w-60-l c-muted-1">
        {totals.map(total => (
          <li className="pv3 flex justify-between items-center" key={total.id}>
            <span>
              <TranslateTotalizer totalizer={total} />
              {total.id === 'Items' && ` (${numItems})`}
            </span>
            <span className="c-on-base">
              <FormattedPrice value={total.value} />
            </span>
          </li>
        ))}
        <li className="pv3 flex justify-between items-center c-on-base t-heading-2-ns t-heading-3">
          <strong>
            <FormattedMessage id="store/order.totals.total" />
          </strong>
          <strong>
            <FormattedPrice value={totalValue} />
          </strong>
        </li>
      </ul>
    </div>
  )
}

export default OrderTotal
