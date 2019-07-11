import React, { Fragment, FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedDate } from 'vtex.order-details'
import { ButtonLink } from 'vtex.order-details'

import { PaymentGroupInfo } from '../../utils'
import Price from '../Payment/FormattedPrice'

const Warnings: FunctionComponent<Props> = ({
  numOfOrders,
  hasDelivery,
  hasPickUp,
  bankInvoices,
}) => {
  const orderWasSplit = numOfOrders > 1
  const hasBankInvoice = bankInvoices.length > 0
  const listItem = 'mv0 w-80-ns w-90 center c-on-base'
  const bottomBorder = 'b--muted-4 bb'

  return (
    <section data-testid="warnings-section">
      <ul className="mt7 mb9 list ml0 pl0 t-body bg-muted-5 pv4 tc-m lh-copy">
        {!hasBankInvoice && (
          <li className={`${listItem} ${bottomBorder}`}>
            <p className="pb4">
              <FormattedMessage id="store/warnings.payment.approval" />
            </p>
          </li>
        )}
        {hasDelivery && (
          <Fragment>
            <li className={`${listItem} ${bottomBorder}`}>
              <p className="pv4">
                <FormattedMessage id="store/warnings.delivery.time" />
              </p>
            </li>
            <li
              className={`${listItem} ${
                orderWasSplit || hasPickUp || hasBankInvoice ? bottomBorder : ''
              }`}
            >
              <p className="pv4">
                <FormattedMessage id="store/warnings.delivery.tracking" />
              </p>
            </li>
          </Fragment>
        )}
        {hasPickUp && (
          <li className={`${listItem} ${orderWasSplit ? bottomBorder : ''}`}>
            <p className="pv4">
              <FormattedMessage id="store/warnings.pickup.time" />
            </p>
          </li>
        )}
        {orderWasSplit && (
          <li className={`${listItem} ${hasBankInvoice ? bottomBorder : ''}`}>
            <p className="pv4">
              <FormattedMessage
                id="store/warnings.order.split"
                values={{
                  numOrders: numOfOrders,
                }}
              />
            </p>
          </li>
        )}
        {hasBankInvoice && (
          <Fragment>
            <li className={`${listItem} ${bottomBorder}`}>
              <p className="pv4">
                <FormattedMessage
                  id="store/warnings.payment.bankInvoice.approval"
                  values={{
                    paymentSystemName: bankInvoices[0].paymentSystemName,
                  }}
                />
              </p>
            </li>
            <li className={listItem}>
              <div className="pv4">
                <p>
                  {bankInvoices[0].dueDate ? (
                    <FormattedMessage
                      id="store/warnings.payment.bankInvoice.value.duedate"
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
                      id="store/warnings.payment.bankInvoice.value"
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
                  <ButtonLink
                    to={bankInvoices[0].url}
                    variation="primary"
                    openNewWindow
                  >
                    <FormattedMessage
                      id="store/payments.bankinvoice.print"
                      values={{
                        paymentSystemName: bankInvoices[0].paymentSystemName,
                      }}
                    />
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

interface Props {
  numOfOrders: number
  hasDelivery: boolean
  hasPickUp: boolean
  bankInvoices: PaymentGroupInfo[]
}

export default Warnings
