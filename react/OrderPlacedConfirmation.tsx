import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

import SuccessIcon from './icons/Success'
import { useOrderGroup } from './components/OrderGroupContext'

const OrderPlacedConfirmation: FC = () => {
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData

  const hasDelivery = orderGroup.totalDeliveryParcels.length > 0
  const hasPickUp = orderGroup.totalPickUpParcels.length > 0
  const hasTakeAway = orderGroup.totalTakeAwayParcels.length > 0
  const onlyTakeAway = !hasDelivery && !hasPickUp && hasTakeAway

  return (
    <section className={onlyTakeAway ? 'bb b--muted-4 pb6' : ''}>
      <div className="flex justify-center c-success">
        <SuccessIcon size={50} />
      </div>
      <p className="tc c-on-base mt7 mb0 t-heading-4 w-90 center">
        <FormattedMessage id="store/header.thanks" />
      </p>
      <p className="center mt5 t-body tc c-muted-1 lh-copy w-90 center">
        <FormattedMessage
          id="store/header.email"
          values={{
            lineBreak: <br />,
            userEmail: <strong className="nowrap">{profile.email}</strong>,
          }}
        />
      </p>
      <div className="flex justify-center t-action mv8 w-90 center">
        <div className="tr c-action-primary">
          <Button variation="secondary" onClick={() => window.print()}>
            <FormattedMessage id="store/header.print.button" />
          </Button>
        </div>
      </div>
    </section>
  )
}
export default OrderPlacedConfirmation
