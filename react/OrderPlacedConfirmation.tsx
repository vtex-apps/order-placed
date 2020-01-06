import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import SuccessIcon from './icons/Success'
import { useOrderGroup } from './components/OrderGroupContext'
import OrderSection from './OrderSection'

const CSS_HANDLES = [
  'confirmationWrapper',
  'confirmationIconWrapper',
  'confirmationTitle',
  'confirmationMessage',
  'confirmationButtonWrapper',
]

const OrderPlacedConfirmation: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData

  const hasDelivery = orderGroup.totalDeliveryParcels.length > 0
  const hasPickUp = orderGroup.totalPickUpParcels.length > 0
  const hasTakeAway = orderGroup.totalTakeAwayParcels.length > 0

  return (
    <OrderSection
      name="confirmation"
      borderless={(hasDelivery || hasPickUp) && !hasTakeAway}
    >
      <div className={`${handles.confirmationWrapper} tc w-90 center`}>
        <div className={`${handles.confirmationIconWrapper} c-success`}>
          <SuccessIcon size={50} />
        </div>
        <h4
          className={`${handles.confirmationTitle} tc c-on-base mt7 mb0 t-heading-4`}
        >
          <FormattedMessage id="store/header.thanks" />
        </h4>
        <p
          className={`${handles.confirmationMessage}mt5 t-body tc c-muted-1 lh-copy`}
        >
          <FormattedMessage
            id="store/header.email"
            values={{
              lineBreak: <br />,
              userEmail: <strong className="nowrap">{profile.email}</strong>,
            }}
          />
        </p>
        <div className={`${handles.confirmationButtonWrapper} mv8`}>
          <Button variation="secondary" onClick={() => window.print()}>
            <FormattedMessage id="store/header.print.button" />
          </Button>
        </div>
      </div>
    </OrderSection>
  )
}
export default OrderPlacedConfirmation
