import React from 'react'
import PropTypes from 'prop-types'
import ShippingHeader from './ShippingHeader'
import ShippingProducts from './ShippingProducts'
import ShippingTotals from './ShippingTotals'

const Shipping = ({ data }) => (
  <div className="mv8 flex flex-column justify-between">
    <ShippingHeader shippingData={data.shippingData} />
    <ShippingProducts products={data.items} />
    <ShippingTotals items={data.items} />
  </div>
)

Shipping.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Shipping
