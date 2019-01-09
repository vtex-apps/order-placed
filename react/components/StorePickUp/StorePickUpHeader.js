import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'
import Address from '../Address'

const StorePickUpHeader = ({ shippingData, index, numPackages }) => {
  const multiplePickups = (numPackages > 1)
  return (
    <Fragment>
      <p className="t-heading-4-ns t-heading-5">
        Retirada no ponto
        {
          multiplePickups &&
          ` - n˚ ${index + 1} de ${numPackages}`
        }
        <br />
        <small className="c-muted-2 t-small">
          <TranslateEstimate shippingEstimate={shippingData.shippingEstimate} />
        </small>
      </p>
      <Address address={shippingData.address} pickup={shippingData} />
    </Fragment>
  )
}

StorePickUpHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  numPackages: PropTypes.number.isRequired,
}

export default StorePickUpHeader
