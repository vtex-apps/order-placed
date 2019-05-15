import { InjectedIntlProps, injectIntl } from 'react-intl'
import React, { FunctionComponent } from 'react'
import { Alert } from 'vtex.styleguide'

const ErrorMessage: FunctionComponent<Props & InjectedIntlProps> = ({
  intl: { formatMessage },
  errorId,
}) => {
  return (
    <div className="pv9 mw7 center">
      <main>
        <Alert type="error">{formatMessage({ id: errorId })}</Alert>
      </main>
    </div>
  )
}

interface Props {
  errorId: string
}

export default injectIntl(ErrorMessage)
