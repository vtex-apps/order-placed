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
    <div className="flex-l justify-end pl6-l w-60-l w-100">
      <div className="mv8 w-100">
        <div className={totalsLine}>
          <p className="mv3">
            {intl.formatMessage({ id: 'order.totals.subtotal' }, { numItems })}
          </p>
          <div className="c-on-base">
            <Price value={totals[0].value} />
          </div>
        </div>
        <div className={totalsLine}>
          <p className="mv3">
            {intl.formatMessage({ id: 'order.totals.delivery' })}
          </p>
          <div className="c-on-base">
            <Price value={totals[2].value} />
          </div>
        </div>
        <div className="flex justify-between items-center c-on-base">
          <p className="t-heading-2-ns t-heading-3 mv4">
            <strong>{intl.formatMessage({ id: 'order.totals.total' })}</strong>
          </p>
          <strong className="t-heading-2-ns t-heading-3 mv4">
            <Price value={orderValue} />
          </strong>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(ShippingTotals)
