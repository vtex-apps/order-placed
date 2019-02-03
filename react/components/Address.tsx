import React, { FunctionComponent } from 'react'
import { AddressRules, AddressSummary } from 'vtex.address-form'

interface Props {
  address: Address
  pickup?: Parcel
}

const Address: FunctionComponent<Props> = ({ address, pickup }) => {
  return (
    <div className="c-muted-1 mb5">
      {pickup && <p className="c-on-base">{pickup.pickupFriendlyName}</p>}
      <AddressRules country={address.country} shouldUseIOFetching>
        <AddressSummary address={address} />
      </AddressRules>
    </div>
  )
}

export default Address
