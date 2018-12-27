import React from 'react'
import PropTypes from 'prop-types'

import StorePickUpHeader from './StorePickUpHeader'

const StorePickUp = ({ data }) => (
  <div className="mv8 flex flex-column justify-between">
    <StorePickUpHeader shippingData={data.shippingData} />
  </div>
)

StorePickUp.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StorePickUp
