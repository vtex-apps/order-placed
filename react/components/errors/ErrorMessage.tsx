import React, { ReactNode, FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['errorWrapper', 'errorTitle', 'errorMessage']

interface Props {
  errorId: string
  messageId?: string
  children?: ReactNode
  icon: ReactNode
}

const ErrorMessage: FC<Props> = ({ icon, errorId, messageId, children }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.errorWrapper} tc`}>
      <main>
        {icon}
        <h2 className={`${handles.errorTitle} f2`}>
          <FormattedMessage id={errorId} />
        </h2>
        {typeof messageId === 'string' && (
          <p className={`${handles.errorMessage} center mb7 c-muted-1 lh-copy`}>
            <FormattedMessage id={messageId} />
          </p>
        )}
        {children}
      </main>
    </div>
  )
}

export default ErrorMessage
