import React from 'react'
import PropTypes from 'prop-types'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import { PrettyAddress } from 'vtex.order-details'

const StorePickUpHeader = ({ shippingData }) => (
  <div className="flex flex-column flex-wrap">
    <p className="t-heading-4-ns t-heading-5 self-start">
      Retirada no ponto
      <br />
      <small className="c-muted-2 t-small">
        <TranslateEstimate shippingEstimate={shippingData.shippingEstimate} isPickup />
      </small>
    </p>
    <PrettyAddress address={shippingData.address}/>
  </div>
)

StorePickUpHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
}

export default StorePickUpHeader
