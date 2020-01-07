import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'
import { useCssHandles } from 'vtex.css-handles'

import FormattedPrice from './components/FormattedPrice'
import { useOrder } from './components/OrderContext'

const CSS_HANDLES = [
  'totalListWrapper',
  'totalList',
  'totalListItem',
  'totalListItemName',
  'totalListItemValue',
]

const OrderTotal: FC = () => {
  const { items, totals, value: totalValue } = useOrder()
  const handles = useCssHandles(CSS_HANDLES)
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className={`${handles.totalListWrapper} flex-l justify-end w-100`}>
      <ul
        className={`${handles.totalList} list pa0 mt8 w-100 w-60-l c-muted-1`}
      >
        {totals.map(total => (
          <li
            className={`${handles.totalListItem} pv3 flex justify-between items-center`}
            key={total.id}
          >
            <span className={`${handles.totalListItemName}`}>
              <TranslateTotalizer totalizer={total} />
              {total.id === 'Items' && ` (${numItems})`}
            </span>
            <span className={`${handles.totalListItemValue} c-on-base`}>
              <FormattedPrice value={total.value} />
            </span>
          </li>
        ))}
        <li
          className={`${handles.totalListItem} pv3 flex justify-between items-center c-on-base t-heading-2-ns t-heading-3`}
        >
          <strong className={`${handles.totalListItemName}`}>
            <FormattedMessage id="store/order.totals.total" />
          </strong>
          <strong className={`${handles.totalListItemValue}`}>
            <FormattedPrice value={totalValue} />
          </strong>
        </li>
      </ul>
    </div>
  )
}

export default OrderTotal
