import React from 'react'
import PropTypes from 'prop-types'

const StorePickUpHeader = ({ shippingData }) => (
  <div className="flex flex-column flex-wrap">
    <p className="t-heading-4-ns t-heading-5 self-start">
      Retirada no ponto
      <br />
      <small className="c-muted-2 t-small">
        Pronto em até {shippingData.shippingEstimate} dias úteis
      </small>
    </p>
  </div>
)

StorePickUpHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
}

export default StorePickUpHeader
