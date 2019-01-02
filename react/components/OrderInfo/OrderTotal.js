import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyContext } from '../../OrderPlaced'

import { FormattedPrice } from 'vtex.order-details'

const ShippingTotals = ({ items, totals, orderValue }) => {
  let numItems = 0

  items.forEach(item => {
    numItems += item.quantity
  })

  return (
    <CurrencyContext.Consumer>
      {currency => (
        <div className="bg-muted-5 br2 pa5 mv4">
          <div className="flex justify-between items-center">
            <p>{`Subtotal (${numItems} itens)`}</p>
            <FormattedPrice value={totals[0].value} currency={currency} />
          </div>
          <div className="flex justify-between items-center">
            <p>Entrega</p>
            <FormattedPrice value={totals[2].value} currency={currency} />
          </div>
          <div className="flex justify-between items-center">
            <p>Retirada</p>
            <p>Grátis</p>
          </div>
          <hr className="bg-muted-4 bt b--muted-4" />
          <div className="flex justify-between items-center">
            <p>Total</p>
            <FormattedPrice value={orderValue} currency={currency} />
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
