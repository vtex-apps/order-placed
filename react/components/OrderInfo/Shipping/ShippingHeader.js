import React from 'react'
import PropTypes from 'prop-types'
import { PrettyAddress } from 'vtex.order-details'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'

const ShippingHeader = ({ shippingData, index, numPackages }) => {
  const multipleDeliveries = (numPackages > 1)
  return (
    <div className="flex flex-column">
      <p className="t-heading-4-ns t-heading-5">
        Entrega em casa
        {
          multipleDeliveries
          && ` - n˚ ${index+1} de ${numPackages}`
        }
        <br />
        <small className="c-muted-2 t-small">
          <TranslateEstimate shippingEstimate={shippingData.shippingEstimate} />
        </small>
      </p>
      <PrettyAddress address={shippingData.address} />
    </div>
)}

ShippingHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
}

export default ShippingHeader
