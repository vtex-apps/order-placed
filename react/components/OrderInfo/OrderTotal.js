import React from 'react'
import PropTypes from 'prop-types'
import { FormattedPrice } from 'vtex.order-details'
import { CurrencyContext } from '../../OrderPlaced'
import { injectIntl, intlShape } from 'react-intl'
import { intlMessage } from '../../utils'

const ShippingTotals = ({ items, totals, orderValue, intl }) => {
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalsLine = 'flex justify-between items-center c-muted-1'

  return (
    <CurrencyContext.Consumer>
      {currency => (
        <div className="bg-muted-5 br2 pa5 mv9">
          <div className={totalsLine}>
            { intlMessage(intl, 'order.totals.subtotal', { numItems }) }
            <FormattedPrice value={totals[0].value} currency={currency} />
          </div>
          <div className={totalsLine}>
            <p>{ intlMessage(intl, 'order.totals.delivery') }</p>
            <FormattedPrice value={totals[2].value} currency={currency} />
          </div>
          <div className={totalsLine}>
            <p>{ intlMessage(intl, 'order.totals.pickup') }</p>
            <p>{ intlMessage(intl, 'order.totals.pickup.free') }</p>
          </div>
          <hr className="bg-muted-4 bt b--muted-4" />
          <div className="flex justify-between items-center c-on-base">
            <p><strong>{ intlMessage(intl, 'order.totals.total') }</strong></p>
            <strong><FormattedPrice value={orderValue} currency={currency} /></strong>
          </div>
        </div>)
      }
    </CurrencyContext.Consumer>
  )
}

ShippingTotals.propTypes = {
  items: PropTypes.array,
  currency: PropTypes.string,
  totals: PropTypes.array,
  orderValue: PropTypes.number,
  intl: intlShape.isRequired,
}

export default injectIntl(ShippingTotals)
