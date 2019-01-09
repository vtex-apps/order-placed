import React from 'react'
import PropTypes from 'prop-types'
import { AddressSummary, AddressRules } from 'vtex.address-form'

import { addressShape } from '../proptypes/shapes'

const Address = ({ address, pickup }) => {
  return (
    <div className="c-muted-1 mb5">
      {
        pickup && (<p className="c-on-base">{ pickup.pickupFriendlyName }</p>)
      }
      <AddressRules
        country={address.country}
        shouldUseIOFetching>
        <AddressSummary address={address} />
      </AddressRules>
    </div>
  )
}

Address.propTypes = {
  address: addressShape.isRequired,
  pickup: PropTypes.object,
}

export default Address
