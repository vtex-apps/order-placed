import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

import SuccessIcon from './icons/Success'
import { useOrderGroup } from './components/OrderGroupContext'
import OrderSection from './OrderSection'

const OrderPlacedConfirmation: FC = () => {
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData

  const hasDelivery = orderGroup.totalDeliveryParcels.length > 0
  const hasPickUp = orderGroup.totalPickUpParcels.length > 0
  const hasTakeAway = orderGroup.totalTakeAwayParcels.length > 0

  return (
    <OrderSection borderless={(hasDelivery || hasPickUp) && !hasTakeAway}>
      <div className="tc w-90 center">
        <div className="flex justify-center c-success">
          <SuccessIcon size={50} />
        </div>
        <h4 className="tc c-on-base mt7 mb0 t-heading-4">
          <FormattedMessage id="store/header.thanks" />
        </h4>
        <p className="mt5 t-body tc c-muted-1 lh-copy ">
          <FormattedMessage
            id="store/header.email"
            values={{
              lineBreak: <br />,
              userEmail: <strong className="nowrap">{profile.email}</strong>,
            }}
          />
        </p>
        <div className="mv8">
          <Button variation="secondary" onClick={() => window.print()}>
            <FormattedMessage id="store/header.print.button" />
          </Button>
        </div>
      </div>
    </OrderSection>
  )
}
export default OrderPlacedConfirmation
