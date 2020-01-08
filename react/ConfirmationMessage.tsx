import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'

const CSS_HANDLES = ['confirmationMessage']

const ConfirmationMessage: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData

  return (
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
  )
}
export default ConfirmationMessage
