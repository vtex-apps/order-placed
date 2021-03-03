import { Button } from 'vtex.styleguide'
import React, { FC } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Link } from 'vtex.render-runtime'

import ForbiddenIcon from '../../Icons/Forbidden'
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
      <Link to={`/login?returnUrl=${window.location.href}`}>
        <Button>
          <FormattedMessage id="store/go-to-login" />
        </Button>
      </Link>
    </ErrorMessage>
  )
}

export default ForbiddenError
