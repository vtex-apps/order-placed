import React, { FC } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'

import ForbiddenIcon from '../../icons/Forbidden'
import ErrorMessage from './ErrorMessage'

const messages = defineMessages({
  notLoggedTitle: {
    id: 'store/order.error.not-logged-in.title',
    defaultMessage: '',
  },
  notLoggedMessage: {
    id: 'store/order.error.not-logged-in.message',
    defaultMessage: '',
  },
})

const ForbiddenError: FC = () => {
  return (
    <ErrorMessage
      icon={<ForbiddenIcon />}
      errorId={messages.notLoggedTitle.id}
      messageId={messages.notLoggedMessage.id}
    >
      <Button href={`/login?returnUrl=${window.location.href}`}>
        <FormattedMessage id="store/go-to-login" />
      </Button>
    </ErrorMessage>
  )
}

export default ForbiddenError
