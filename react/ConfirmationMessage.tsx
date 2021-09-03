import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'
import GreenShippingIcon from './Icons/GreenShippingIcon'

const CSS_HANDLES = ['confirmationMessage']

const ConfirmationMessage: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData

  return (
    <>
      <p
        className={`${handles.confirmationMessage} mt5 t-body tc c-muted-1 lh-copy`}
      >
        <FormattedMessage
          id="store/header.email"
          values={{
            lineBreak: <br />,
            userEmail: <strong className="nowrap">{profile.email}</strong>,
          }}
        />
      </p>
      <div className="mt5 flex-column items-center tc">
        <GreenShippingIcon />
        <p className="mt3 c-muted-1 t-heading-6">
          You offset <span className="c-success">102.7kg</span> carbon with this
          purchase
        </p>
        <p className="mt3 c-muted-1 t-small">
          <span className="c-link pointer">Click here</span> for more
          information on how you contributed to the environment.
        </p>
      </div>
    </>
  )
}
export default ConfirmationMessage
