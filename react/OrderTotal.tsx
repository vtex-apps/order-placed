import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'
import { applyModifiers, useCssHandles } from 'vtex.css-handles'

import FormattedPrice from './components/FormattedPrice'
import { useOrder } from './components/OrderContext'
import { getTotals } from './utils'
import TaxInfo from './TaxInfo'
import useTracking from './hooks/useTracking'

const CSS_HANDLES = [
  'totalListWrapper',
  'totalList',
  'totalListItem',
  'totalListItemLabel',
  'totalListItemValue',
] as const

const OrderTotal: FC = () => {
  const { items, totals, value: totalValue } = useOrder()
  const handles = useCssHandles(CSS_HANDLES)
  useTracking({ orderTotal: totalValue || 0 })

  const numItems = items.reduce((acc, item) => {
    if (item.parentItemIndex === null) {
      return acc + item.quantity
    }
    return acc
  }, 0)
  const [newTotals, taxes] = getTotals(totals)

  return (
    <div className={`${handles.totalListWrapper} flex-l justify-end w-100`}>
      <ul
        className={`${handles.totalList} list pa0 mt8 w-100 w-60-l c-muted-1`}
      >
        {newTotals.map((total, i) => {
          if (total.value === 0) {
            return null
          }

          return (
            <li
              className={`${applyModifiers(
                handles.totalListItem,
                total.id
              )} pv3 flex justify-between items-center`}
              key={`${total.id}_${i}`}
            >
              <span className={`${handles.totalListItemLabel} flex`}>
                <TranslateTotalizer totalizer={total} />
                {total.id === 'Items' && ` (${numItems})`}
                {total.id === 'Tax' && taxes.length > 0 && (
                  <div className="ml2 mt1">
                    <TaxInfo taxesTotals={taxes} />
                  </div>
                )}
              </span>
              <span className={`${handles.totalListItemValue} c-on-base`}>
                <FormattedPrice value={total.value} />
              </span>
            </li>
          )
        })}
        <li
          className={`${handles.totalListItem} pv3 flex justify-between items-center c-on-base t-heading-2-ns t-heading-3`}
        >
          <strong className={`${handles.totalListItemLabel}`}>
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
