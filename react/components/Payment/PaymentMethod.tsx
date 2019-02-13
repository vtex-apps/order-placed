import React, { FunctionComponent, useState } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'

import InfoIcon from '../../Icons/Info'
import ButtonLink from '../ButtonLink'
import AdditionalInfo from './AddittionalInfo'
import Price from './FormattedPrice'

interface Props {
  payment: Payment
  transactionId: string
}

const paymentGroupSwitch = (payment: Payment, intl: any) => {
  switch (payment.group) {
    case 'creditCard':
      return intl.formatMessage({ id: 'payments.creditcard' })
    case 'bankInvoice':
      return payment.paymentSystemName
    case 'promissory':
      return payment.paymentSystemName
    case 'debitCard':
      return intl.formatMessage({ id: 'payments.debitcard' })
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

  return (
    <article className="flex justify-between">
      <div className="t-body lh-solid">
        <p className="c-on-base">{paymentGroupSwitch(payment, intl)}</p>
        {hasLastDigits && (
          <p className="c-muted-1">
            {intl.formatMessage(
              { id: 'payments.creditcard.lastDigits' },
              {
                lastDigits: payment.lastDigits,
              }
            )}
          </p>
        )}
        <div className="flex items-center">
          <p className="c-muted-1 mv0">
            <Price value={payment.value} />
            {` ${intl.formatMessage(
              { id: 'payments.installments' },
              {
                installments: payment.installments,
              }
            )}`}
          </p>
          <div
            className="ml4"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <InfoIcon />
          </div>
        </div>
        {isBankInvoice && payment.url && (
          <ButtonLink url={payment.url} variation="primary" openNewWindow>
            {intl.formatMessage(
              { id: 'payments.bankinvoice.print' },
              { paymentSystemName: payment.paymentSystemName }
            )}
          </ButtonLink>
        )}
        <div hidden={!isOpen} className="z-9999">
          <AdditionalInfo
            paymentId={payment.id}
            transactionId={transactionId}
          />
        </div>
      </div>
    </article>
  )
}

export default injectIntl(PaymentMethod)
