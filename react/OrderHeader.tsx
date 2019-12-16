import React, { FC } from 'react'
import { FormattedMessage, FormattedTime } from 'react-intl'
import { FormattedDate } from 'vtex.order-details'
import { useRuntime } from 'vtex.render-runtime/react/components/RenderContext'

import OrderOptions from './components/OrderInfo/OrderOptions'
import { useOrder } from './components/OrderContext'

const OrderHeader: FC = () => {
  const runtime = useRuntime()
  const order = useOrder()
  const storeAccount = runtime.account
  const orderSeller = order.sellers[0].name

  const hasTakeAwayParcels = order.takeAwayParcels.length > 0

  return (
    <header className="flex justify-between items-center mt7">
      <p className="t-heading-3 lh-copy">
        <FormattedMessage
          id="store/order.header.number"
          values={{
            orderId: order.orderId,
          }}
        />
        <br />
        <small className="c-muted-2 t-body">
          <FormattedMessage
            id="store/order.header.date"
            values={{
              orderDate: (
                <FormattedDate date={order.creationDate} style="short" />
              ),
              orderTime: <FormattedTime value={order.creationDate} />,
            }}
          />
        </small>
        <br />
        {storeAccount !== orderSeller && (
          <small className="c-muted-2 t-body">
            <FormattedMessage
              id="store/order.header.seller"
              values={{
                seller: <span className="c-action-primary">{orderSeller}</span>,
              }}
            />
          </small>
        )}
        {hasTakeAwayParcels && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="c-action-primary t-small" href="#">
            <FormattedMessage id="store/order.header.receipt" />
          </a>
        )}
      </p>
      <OrderOptions
        className="dn-s flex-l"
        allowCancellation={order.allowCancellation}
        orderId={order.orderId}
        takeaway={hasTakeAwayParcels}
      />
    </header>
  )
}

export default OrderHeader
