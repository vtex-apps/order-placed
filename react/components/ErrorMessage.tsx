import { FormattedMessage } from 'react-intl'
import React, { ReactNode, FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['errorWrapper', 'messageContainer']

interface Props {
  errorId: string
  messageId?: string
  children?: ReactNode
  icon: ReactNode
}

const ErrorMessage: FC<Props> = ({ icon, errorId, messageId, children }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={handles.errorWrapper}>
      <main>
        {icon}
        <h2 className="f2">
          <FormattedMessage id={errorId} />
        </h2>
        {typeof messageId === 'string' && (
          <div className={handles.errorMessageContainer}>
            <p className="mb7 c-muted-1 lh-copy">
              <FormattedMessage id={messageId} />
            </p>
          </div>
        )}
        {children}
      </main>
    </div>
  )
}

export default ErrorMessage
