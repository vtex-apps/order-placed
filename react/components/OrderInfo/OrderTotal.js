import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyContext } from '../../OrderPlaced'

import { FormattedPrice } from 'vtex.order-details'

const ShippingTotals = ({ items, totals, orderValue }) => {
  const numItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalsLine = 'flex justify-between items-center c-muted-1'

  return (
    <CurrencyContext.Consumer>
      {currency => (
        <div className="bg-muted-5 br2 pa5 mv9">
          <div className={totalsLine}>
            <p>{`Subtotal (${numItems} itens)`}</p>
            <FormattedPrice value={totals[0].value} currency={currency} />
          </div>
          <div className={totalsLine}>
            <p>Entrega</p>
            <FormattedPrice value={totals[2].value} currency={currency} />
          </div>
          <div className={totalsLine}>
            <p>Retirada</p>
            <p>Grátis</p>
          </div>
          <hr className="bg-muted-4 bt b--muted-4" />
          <div className="flex justify-between items-center c-on-base">
            <p><strong>Total</strong></p>
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
}

export default ShippingTotals
