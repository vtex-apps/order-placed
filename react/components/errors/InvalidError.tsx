import React, { FC } from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Button } from 'vtex.styleguide'

import ErrorMessage from './ErrorMessage'
import NotFound from '../../icons/NotFound'

const messages = defineMessages({
  invalidTitle: {
    id: 'store/order.error.invalid.title',
    defaultMessage: '',
  },
  invalidMessage: {
    id: 'store/order.error.invalid.message',
    defaultMessage: '',
  },
})

const InvalidError: FC = () => {
  return (
    <ErrorMessage
      icon={<NotFound />}
      errorId={messages.invalidTitle.id}
      messageId={messages.invalidMessage.id}
    >
      <Button href="/">
        <FormattedMessage id="store/go-to-home" />
      </Button>
    </ErrorMessage>
  )
}

export default InvalidError
