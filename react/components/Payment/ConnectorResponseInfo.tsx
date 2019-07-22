import React, { FunctionComponent } from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

defineMessages({
  entity: {
    id: 'store/paymentData.connectorResponse.mb.entity',
    defaultMessage: ''
  },
  reference: {
    id: 'store/paymentData.connectorResponse.mb.reference',
    defaultMessage: ''
  }
})

const ConnectorResponseInfo: FunctionComponent<Props> = ({
  label,
  value
}) => {
  return (
    <div className="f7">
      <span className="mr2 fw5">
        <FormattedMessage id={`store/paymentData.connectorResponse.${label}`}/>:
      </span>
      <span>{value}</span>
    </div>
  )
}

interface Props {
  label: string
  value: string
}

export default ConnectorResponseInfo
