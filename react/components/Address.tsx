import React, { FunctionComponent } from 'react'
import { AddressRules, AddressSummary } from 'vtex.address-form'

interface Props {
  address: Address
  pickup?: Parcel
}

const Address: FunctionComponent<Props> = ({ address, pickup }) => {
  return (
    <div className="c-muted-1 mb5 mr10-m lh-copy" data-testid="address-component">
      {pickup && <p className="c-on-base lh-copy">{pickup.pickupFriendlyName}</p>}
      <AddressRules country={address.country} shouldUseIOFetching>
        <AddressSummary address={address} />
      </AddressRules>
    </div>
  )
}

export default Address
