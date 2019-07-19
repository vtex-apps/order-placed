import PropTypes from 'prop-types'
import React, { FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'

const ConnectorResponseInfo: FunctionComponent<Props & InjectedIntlProps> = ({ label, value, intl }) => {
    return (
        <div className="more-info__data__item f7">
            <span className="more-info__data__item__label mr2 fw5">
            {intl.formatMessage({
                id: `store/paymentData.connectorResponse.${label}`,
                defaultMessage: label,
            })}:
            </span>
            <span className="more-info__data__item__value">{value}</span>
        </div>
    )
}

ConnectorResponseInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

interface Props {
    label: string,
    value: string
}

export default injectIntl(ConnectorResponseInfo)