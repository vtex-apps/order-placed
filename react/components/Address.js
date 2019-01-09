import React from 'react'
import PropTypes from 'prop-types'

import { addressShape } from '../proptypes/shapes'

const Address = ({ address, pickup }) => {
  const {
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    postalCode,
  } = address

  return (
    <div className="c-muted-1">
      {
        pickup && (<p className="c-on-base">{ pickup.pickupFriendlyName }</p>)
      }
      <p>
        {street}, {number}{complement ? ` - ${complement}` : null}
      </p>
      <p>
        CEP {postalCode}, {neighborhood}
      </p>
      <p>
        {city}, {state}
      </p>
    </div>
  )
}

Address.propTypes = {
  address: addressShape.isRequired,
  pickup: PropTypes.object,
}

export default Address
