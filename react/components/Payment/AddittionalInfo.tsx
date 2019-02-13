import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'

import Tooltip from '../../Icons/Tooltip'

interface Props {
  paymentId: string
  transactionId: string
  showTooltip?: boolean
}

const AdditionalInfo: FunctionComponent<Props & InjectedIntlProps> = ({
  paymentId,
  transactionId,
  showTooltip,
  intl,
}) => {
  return (
    <div className="flex flex-column">
      {showTooltip && (
        <div
          className="w-100 mv0 pv0 bw0"
          style={{ paddingLeft: `${7.75}rem` }}
        >
          <Tooltip />
        </div>
      )}
      <div className="bg-base--inverted pa4 br2">
        <p className="white tc">
          {intl.formatMessage({ id: 'payments.id' }, { id: paymentId })}
        </p>
        <p className="white tc">
          {intl.formatMessage(
            { id: 'payments.transaction.id' },
            {
              id: transactionId,
            }
          )}
        </p>
      </div>
    </div>
  )
}

export default injectIntl(AdditionalInfo)
