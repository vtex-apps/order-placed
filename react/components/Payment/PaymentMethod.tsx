import React, { Component } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'

import ButtonLink from '../ButtonLink'
import Price from './FormattedPrice'

interface Props {
  payment: Payment
  transactionId: string
}

interface State {
  open: boolean
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

class PaymentMethod extends Component<Props & InjectedIntlProps> {
  public state = { open: false }

  public handleClick = () => {
    this.setState((prevState: State) => ({ open: !prevState.open }))
  }

  public render() {
    const { payment, transactionId, intl } = this.props
    const open = this.state.open
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
          <p className="c-muted-1">
            <Price value={payment.value} />
            {` ${intl.formatMessage(
              { id: 'payments.installments' },
              {
                installments: payment.installments,
              }
            )}`}
          </p>
          {isBankInvoice && (
            <ButtonLink url={payment.url} variation="primary">
              {intl.formatMessage(
                { id: 'payments.bankinvoice.print' },
                { paymentSystemName: payment.paymentSystemName }
              )}
            </ButtonLink>
          )}
          <div hidden={!open}>
            <p className="c-muted-2">
              {intl.formatMessage({ id: 'payments.id' }, { id: payment.id })}
            </p>
            <p className="c-muted-2">
              {intl.formatMessage(
                { id: 'payments.transaction.id' },
                {
                  id: transactionId,
                }
              )}
            </p>
          </div>
        </div>
        <div className="c-action-primary pt8" onClick={this.handleClick}>
          {open ? <IconCaretUp /> : <IconCaretDown />}
        </div>
      </article>
    )
  }
}

export default injectIntl(PaymentMethod)
