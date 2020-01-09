import React, { FC } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'

import ForbiddenIcon from '../../icons/Forbidden'
import ErrorMessage from './ErrorMessage'

const messages = defineMessages({
  notLoggedInTitle: {
    id: 'store/order.error.not-logged-in.title',
    defaultMessage: '',
  },
  notLoggedInMessage: {
    id: 'store/order.error.not-logged-in.message',
    defaultMessage: '',
  },
})

const ForbiddenError: FC = () => {
  return (
    <ErrorMessage
      icon={<ForbiddenIcon />}
      errorId={messages.notLoggedInTitle.id}
      messageId={messages.notLoggedInMessage.id}
    >
      <Button href={`/login?returnUrl=${window.location.href}`}>
        <FormattedMessage id="store/go-to-login" />
      </Button>
    </ErrorMessage>
  )
}

export default ForbiddenError
