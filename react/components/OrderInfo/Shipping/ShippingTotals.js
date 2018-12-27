import React from 'react'
import PropTypes from 'prop-types'

import { FormattedPrice } from 'vtex.order-details'

const ShippingTotals = ({ items }) => {
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
        <FormattedPrice value={totalValue} currency="BRL" />
      </div>
      <p>Entrega</p>
      <hr className="c-muted-4" size="1" />
      <div className="flex justify-between items-center">
        <p>Total</p>
        <FormattedPrice value={totalValue} currency="BRL" />
      </div>
    </div>
  )
}

ShippingTotals.propTypes = {
  items: PropTypes.array,
}

export default ShippingTotals
