import React from 'react'
import PropTypes from 'prop-types'

import { addressShape } from '../proptypes/shapes'

const Address = ({ address, pickup }) => {
  return (
    <div></div>
  )
}

Address.propTypes = {
  address: addressShape.isRequired,
  pickup: PropTypes.object,
}

export default Address
