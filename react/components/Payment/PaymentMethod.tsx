import React, { FunctionComponent, useState } from 'react'
import {
  InjectedIntlProps,
  injectIntl,
  defineMessages,
  FormattedMessage,
} from 'react-intl'
import { ButtonLink } from 'vtex.order-details'

import InfoIcon from '../../Icons/Info'
import {
  transformConnectorResponsesToArray,
  parseBankInvoiceUrl,
} from '../../utils'
import AdditionalInfo from './AdditionalInfo'
import Price from './FormattedPrice'
import ConnectorResponseInfo from './ConnectorResponseInfo'

const messages = defineMessages({
  creditCard: {
    id: 'store/payments.creditcard',
    defaultMessage: '',
  },
  debitCard: {
    id: 'store/payments.debitcard',
    defaultMessage: '',
  },
  installments: {
    id: 'store/payments.installments',
    defaultMessage: '',
  },
})

function paymentGroupSwitch(payment: Payment, intl: ReactIntl.InjectedIntl) {
  switch (payment.group) {
    case 'creditCard':
      return intl.formatMessage(messages.creditCard)
    case 'bankInvoice':
      return payment.paymentSystemName
    case 'promissory':
      return payment.paymentSystemName
    case 'debitCard':
      return intl.formatMessage(messages.debitCard)
    default:
      return payment.paymentSystemName
  }
}

const PaymentMethod: FunctionComponent<Props & InjectedIntlProps> = ({
  payment,
  transactionId,
  intl,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasLastDigits = !!payment.lastDigits
  const isBankInvoice = payment.group === 'bankInvoice'
  const isMultiBanco = payment.group === 'multibanco'

  return (
    <article className="flex justify-between">
      <div className="t-body lh-solid">
        <p className="c-on-base">{paymentGroupSwitch(payment, intl)}</p>
        {hasLastDigits && (
          <p className="c-muted-1 mb3">
            <FormattedMessage
              id="store/payments.creditcard.lastDigits"
              values={{
                lastDigits: payment.lastDigits,
              }}
            />
          </p>
        )}
        <div className="flex items-center">
          <p className="c-muted-1 mv0">
            <Price value={payment.value} />
            {` ${intl.formatMessage(messages.installments, {
              installments: payment.installments,
            })}`}
          </p>
          <div
            className="ml4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <InfoIcon colorToken="c-muted-3" />
          </div>
        </div>
        <div hidden={!isOpen} className="mt2 z-2 absolute">
          <AdditionalInfo
            paymentId={payment.id}
            transactionId={transactionId}
            showTooltip
          />
        </div>
        {isBankInvoice && payment.url && (
          <div className="mt5">
            <ButtonLink
              to={parseBankInvoiceUrl(payment.url)}
              variation="primary"
              openNewWindow
            >
              <FormattedMessage
                id="store/payments.bankinvoice.print"
                values={{ paymentSystemName: payment.paymentSystemName }}
              />
            </ButtonLink>
          </div>
        )}
        {isMultiBanco && payment.connectorResponses && (
          <div className="mt5">
            {transformConnectorResponsesToArray(payment.connectorResponses).map(
              ({ key, value }) => (
                <ConnectorResponseInfo
                  key={`${key}-${value}`}
                  label={key}
                  value={value}
                />
              )
            )}
          </div>
        )}
      </div>
    </article>
  )
}

interface Props {
  payment: Payment
  transactionId: string
}

export default injectIntl(PaymentMethod)
