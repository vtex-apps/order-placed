import React, { FC } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'

import Forbidden from '../../icons/Forbidden'
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
      icon={<Forbidden />}
      errorId={messages.notLoggedTitle.id}
      messageId={messages.notLoggedMessage.id}
    >
      <a href={`/login?returnUrl=${window.location.href}`}>
        <Button>
          <FormattedMessage id="store/go-to-login" />
        </Button>
      </a>
    </ErrorMessage>
  )
}

export default ForbiddenError
