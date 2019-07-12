import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import Tooltip from '../../Icons/Tooltip'

const AdditionalInfo: FunctionComponent<Props> = ({
  paymentId,
  transactionId,
  showTooltip,
}) => (
  <div className="flex flex-column">
    {showTooltip && <Tooltip colorToken="c-on-base" />}
    <div className="bg-base--inverted pa4 br2">
      <p className="c-on-base--inverted tc">
        <FormattedMessage id="store/payments.id" values={{ id: paymentId }} />
      </p>
      <p className="c-on-base--inverted tc">
        <FormattedMessage
          id="store/payments.transaction.id"
          values={{
            id: transactionId,
          }}
        />
      </p>
    </div>
  </div>
)

interface Props {
  paymentId: string
  transactionId: string
  showTooltip?: boolean
}

export default AdditionalInfo
