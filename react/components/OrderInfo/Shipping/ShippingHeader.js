import React from 'react'
import PropTypes from 'prop-types'
import { PrettyAddress } from 'vtex.order-details'

const ShippingHeader = ({ shippingData }) => (
  <div className="flex justify-around flex-wrap">
    <div>
      <p className="t-heading-4-ns t-heading-5 self-start">
          Entrega em casa
        <br />
        <small className="c-muted-2 t-small">
            Em até {shippingData.shippingEstimate} dias úteis
        </small>
      </p>
    </div>
    <PrettyAddress address={shippingData.address} />
  </div>
)

ShippingHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
}

export default ShippingHeader
