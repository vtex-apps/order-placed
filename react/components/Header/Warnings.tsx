import React, { Fragment, FunctionComponent } from 'react'
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl'
import { FormattedDate } from 'vtex.order-details'

import { getPaymentGroupFromOrder, PaymentGroupInfo } from '../../utils'
import ButtonLink from '../ButtonLink'
import Price from '../Payment/FormattedPrice'

interface Props {
  data: Order[]
  hasDelivery: boolean
  hasPickUp: boolean
}

const Warnings: FunctionComponent<Props & InjectedIntlProps> = ({
  data,
  hasDelivery,
  hasPickUp,
  intl,
}) => {
  const orderWasSplit = data.length > 1
  const bankInvoices = data
    .reduce(
      (acc: PaymentGroupInfo[], currOrder: Order) => [
        ...acc,
        getPaymentGroupFromOrder(currOrder),
      ],
      []
    )
    .filter((order: any) => order.paymentGroup === 'bankInvoice')
  const hasBankInvoice = bankInvoices.length > 0
  const listItem = 'mv0 w-80-ns w-90 center c-on-base'
  const bottomBorder = 'b--muted-4 bb'

  return (
    <section data-testid="warnings-section">
      <ul className="mt7 mb9 list ml0 pl0 t-body bg-muted-5 pv4 tc-m">
        {!hasBankInvoice && (
          <li className={`${listItem} ${bottomBorder}`}>
            <p className="pb2">
              {intl.formatMessage({ id: 'warnings.payment.approval' })}
            </p>
          </li>
        )}
        {hasDelivery && (
          <Fragment>
            <li className={`${listItem} ${bottomBorder}`}>
              <p className="pv2">
                {intl.formatMessage({ id: 'warnings.delivery.time' })}
              </p>
            </li>
            <li
              className={`${listItem} ${
                orderWasSplit || hasPickUp || hasBankInvoice ? bottomBorder : ''
              }`}
            >
              <p className="pv2">
                {intl.formatMessage({ id: 'warnings.delivery.tracking' })}
              </p>
            </li>
          </Fragment>
        )}
        {hasPickUp && (
          <li className={`${listItem} ${orderWasSplit ? bottomBorder : ''}`}>
            <p className="pt2">
              {intl.formatMessage({ id: 'warnings.pickup.time' })}
            </p>
          </li>
        )}
        {orderWasSplit && (
          <li className={`${listItem} ${hasBankInvoice ? bottomBorder : ''}`}>
            <p className="pt2">
              {intl.formatMessage(
                { id: 'warnings.order.split' },
                {
                  numOrders: data.length,
                }
              )}
            </p>
          </li>
        )}
        {hasBankInvoice && (
          <Fragment>
            <li className={`${listItem} ${bottomBorder}`}>
              <p className="pv2">
                {intl.formatMessage(
                  {
                    id: 'warnings.payment.bankInvoice.approval',
                  },
                  { paymentSystemName: bankInvoices[0].paymentSystemName }
                )}
              </p>
            </li>
            <li className={listItem}>
              <div className="pt2 pb3">
                <p>
                  {bankInvoices[0].dueDate ? (
                    <FormattedMessage
                      id={'warnings.payment.bankInvoice.value.duedate'}
                      values={{
                        paymentDueDate: (
                          <strong>
                            <FormattedDate
                              date={bankInvoices[0].dueDate}
                              style="short"
                            />
                          </strong>
                        ),
                        paymentValue: (
                          <strong>
                            <Price value={bankInvoices[0].value} />
                          </strong>
                        ),
                      }}
                    />
                  ) : (
                    <FormattedMessage
                      id={'warnings.payment.bankInvoice.value'}
                      values={{
                        paymentValue: (
                          <strong>
                            <Price value={bankInvoices[0].value} />
                          </strong>
                        ),
                      }}
                    />
                  )}
                </p>
                {bankInvoices[0].url && (
                  <ButtonLink url={bankInvoices[0].url} variation="primary">
                    {intl.formatMessage(
                      { id: 'payments.bankinvoice.print' },
                      { paymentSystemName: bankInvoices[0].paymentSystemName }
                    )}
                  </ButtonLink>
                )}
              </div>
            </li>
          </Fragment>
        )}
      </ul>
    </section>
  )
}

export default injectIntl(Warnings)
