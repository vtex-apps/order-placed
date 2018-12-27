import React from 'react'
import PropTypes from 'prop-types'

import { FormattedPrice } from 'vtex.order-details'

const ShippingTotals = ({ items, currency }) => {
  let numItems = 0
  let totalValue = 0

  items.forEach(item => {
    numItems += item.quantity
    totalValue += (item.quantity * item.sellingPrice)
  })

  return (
    <div className="bg-muted-5 br2 pa5 mv4">
      <div className="flex justify-between items-center">
        <p>{`Subtotal (${numItems} itens)`}</p>
        <FormattedPrice value={totalValue} currency={currency} />
      </div>
      <div className="flex justify-between items-center">
        <p>Entrega</p>
        <FormattedPrice value={0.0} currency={currency} />
      </div>
      <div className="flex justify-between items-center">
        <p>Retirada</p>
        <FormattedPrice value={0.0} currency={currency} />
      </div>
      <hr className="bg-muted-4 bt b--muted-4" />
      <div className="flex justify-between items-center">
        <p>Total</p>
        <FormattedPrice value={totalValue} currency={currency} />
      </div>
    </div>
  )
}

ShippingTotals.propTypes = {
  items: PropTypes.array,
  currency: PropTypes.string,
}

export default ShippingTotals
