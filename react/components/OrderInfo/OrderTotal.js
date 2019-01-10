import React from 'react'
import PropTypes from 'prop-types'
import { FormattedPrice } from 'vtex.order-details'
import { CurrencyContext } from '../../OrderPlaced'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

const ShippingTotals = ({ items, totals, orderValue }) => {
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalsLine = 'flex justify-between items-center c-muted-1'

  return (
    <CurrencyContext.Consumer>
      {currency => (
        <div className="bg-muted-5 br2 pa5 mv9">
          <div className={totalsLine}>
            <FormattedMessage
              id={'order.totals.subtotal'}
              values={
                { numItems }
              }
            />
            <FormattedPrice value={totals[0].value} currency={currency} />
          </div>
          <div className={totalsLine}>
            <p><FormattedMessage id={'order.totals.delivery'} /></p>
            <FormattedPrice value={totals[2].value} currency={currency} />
          </div>
          <div className={totalsLine}>
            <p><FormattedMessage id={'order.totals.pickup'} /></p>
            <p><FormattedMessage id={'order.totals.pickup.free'} /></p>
          </div>
          <hr className="bg-muted-4 bt b--muted-4" />
          <div className="flex justify-between items-center c-on-base">
            <p><strong><FormattedMessage id={'order.totals.total'} /></strong></p>
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
