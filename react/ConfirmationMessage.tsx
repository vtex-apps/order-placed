import React, { FC, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'
import { useSessionResponse } from './utils/useSessionResponse'

const CSS_HANDLES = ['confirmationMessage']

interface Props {
  enableGuestMessage: boolean
}

const ConfirmationMessage: FC<Props> = ({
  enableGuestMessage = false,
}: Props) => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData
  const { status } = orderGroup
  const sessionResponse = useSessionResponse()
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    setIsLoggedIn(!!sessionResponse?.namespaces?.profile?.email)
  }, [sessionResponse, setIsLoggedIn])

  // by default "header.email" and "header.guest-email" texts are the same
  // if the customer enables the guest message option, they will also need to change the guest text via GraphQL

  return (
    <p
      className={`${handles.confirmationMessage} mt5 t-body tc c-muted-1 lh-copy`}
    >
      {status === 'pending' ? (
        <FormattedMessage id="store/header.reviewing.order.information" />
      ) : !isLoggedIn && enableGuestMessage ? (
        <FormattedMessage
          id="store/header.guest-email"
          values={{
            lineBreak: <br />,
            userEmail: <strong className="nowrap">{profile.email}</strong>,
          }}
        />
      ) : (
        <FormattedMessage
          id="store/header.email"
          values={{
            lineBreak: <br />,
            userEmail: <strong className="nowrap">{profile.email}</strong>,
          }}
        />
      )}
    </p>
  )
}
export default ConfirmationMessage
