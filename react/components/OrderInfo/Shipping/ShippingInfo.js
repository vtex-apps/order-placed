import React from 'react'
import PropTypes from 'prop-types'

import ShippingHeader from './ShippingHeader'

const ShippingInfo = ({ data }) => {
  return (
    <div className="mv8 flex flex-column justify-between">
      <ShippingHeader shippingData={data.shippingData} />
    </div>
  )
}

ShippingInfo.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ShippingInfo
