import React, { Fragment, FC } from 'react'
import { FormattedMessage, FormattedDate } from 'react-intl'
import { ButtonLink } from 'vtex.order-details'
import { useCssHandles } from 'vtex.css-handles'

import FormattedPrice from './components/FormattedPrice'
import { useOrderGroup } from './components/OrderGroupContext'
import { parseBankInvoiceUrl, getPaymentInfoFromOrder } from './utils'
import OrderSection from './OrderSection'

const CSS_HANDLES = ['noticesList', 'noticeListItem']

// TODO: add json schema to add/remove extra notice messages
const OrderPlacedNotices: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { orders, totalDeliveryParcels, totalPickUpParcels } = useOrderGroup()
  const hasDelivery = totalDeliveryParcels.length > 0
  const hasPickUp = totalPickUpParcels.length > 0

  if (!hasDelivery && !hasPickUp) {
    return null
  }

  const numOrders = orders.length
  const isSplitOrder = numOrders > 1
  const bankInvoice = orders
    .map(getPaymentInfoFromOrder)
    .find(
      paymentInfo =>
        paymentInfo.paymentGroup === 'bankInvoice' && !!paymentInfo.url
    )

  const listItems = [
    bankInvoice == null && (
      <FormattedMessage id="store/warnings.payment.approval" />
    ),
    hasDelivery && <FormattedMessage id="store/warnings.delivery.time" />,
    hasDelivery && <FormattedMessage id="store/warnings.delivery.tracking" />,
    hasPickUp && <FormattedMessage id="store/warnings.pickup.time" />,
    isSplitOrder && (
      <FormattedMessage
        id="store/warnings.order.split"
        values={{ numOrders }}
      />
    ),
    bankInvoice != null && (
      <FormattedMessage
        id="store/warnings.payment.bankInvoice.approval"
        values={{ paymentSystemName: bankInvoice.paymentSystemName }}
      />
    ),
    bankInvoice != null && (
      <Fragment>
        {bankInvoice.dueDate ? (
          <FormattedMessage
            id="store/warnings.payment.bankInvoice.value.duedate"
            values={{
              paymentDueDate: (
                <strong>
                  <FormattedDate value={bankInvoice.dueDate} timeZone="utc" />
                </strong>
              ),
              paymentValue: (
                <strong>
                  <FormattedPrice value={bankInvoice.value} />
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
                  <FormattedPrice value={bankInvoice.value} />
                </strong>
              ),
            }}
          />
        )}
        <div className="mt4">
          {bankInvoice.url && (
            <ButtonLink
              to={parseBankInvoiceUrl(bankInvoice.url)}
              variation="primary"
              openNewWindow
            >
              <FormattedMessage
                id="store/payments.bankinvoice.print"
                values={{ paymentSystemName: bankInvoice.paymentSystemName }}
              />
            </ButtonLink>
          )}
        </div>
      </Fragment>
    ),
  ].filter(Boolean)

  return (
    <OrderSection name="notices" borderless marginBottom={9}>
      <ul
        className={`${handles.noticesList} list ma0 pl0 t-body bg-muted-5 tc-m lh-copy`}
      >
        {listItems.map((item, index) => (
          <li
            className={`${handles.noticeListItem} pv6 w-80-ns w-90 center c-on-base b--muted-4 bb`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </OrderSection>
  )
}

export default OrderPlacedNotices
