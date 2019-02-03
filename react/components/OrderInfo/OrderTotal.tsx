import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'

import Price from '../Payment/FormattedPrice'

interface Props {
  items: OrderItem[]
  totals: OrderItemTotal[]
  orderValue: number
}

const ShippingTotals: FunctionComponent<Props & InjectedIntlProps> = ({
  items,
  totals,
  orderValue,
  intl,
}) => {
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalsLine = 'flex justify-between items-center c-muted-1'

  return (
    <div className="bg-muted-5 br2 pa5 mv9">
      <div className={totalsLine}>
        <p>
          {intl.formatMessage({ id: 'order.totals.subtotal' }, { numItems })}
        </p>
        <Price value={totals[0].value} />
      </div>
      <div className={totalsLine}>
        <p>{intl.formatMessage({ id: 'order.totals.delivery' })}</p>
        <Price value={totals[2].value} />
      </div>
      <div className={totalsLine}>
        <p>{intl.formatMessage({ id: 'order.totals.pickup' })}</p>
        <p>{intl.formatMessage({ id: 'order.totals.pickup.free' })}</p>
      </div>
      <hr className="bg-muted-4 bt b--muted-4" />
      <div className="flex justify-between items-center c-on-base">
        <p>
          <strong>{intl.formatMessage({ id: 'order.totals.total' })}</strong>
        </p>
        <strong>
          <Price value={orderValue} />
        </strong>
      </div>
    </div>
  )
}

export default injectIntl(ShippingTotals)
