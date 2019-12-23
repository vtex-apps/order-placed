import { FormattedMessage } from 'react-intl'
import React, { ReactNode, FC } from 'react'

import styles from './style.css'

interface Props {
  errorId: string
  messageId?: string
  children?: ReactNode
  icon: ReactNode
}

const ErrorMessage: FC<Props> = ({ icon, errorId, messageId, children }) => {
  return (
    <div className={styles.errorWrapper}>
      <main>
        {icon}
        <h2 className="f2">
          <FormattedMessage id={errorId} />
        </h2>
        {typeof messageId === 'string' && (
          <div className={styles.messageContainer}>
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
