import React, { FunctionComponent } from 'react'
import {
  FormattedMessage,
  FormattedTime,
  InjectedIntlProps,
  injectIntl,
} from 'react-intl'
import { compose } from 'recompose'
import { FormattedDate } from 'vtex.order-details'
import { RenderContextProps, withRuntimeContext } from 'vtex.render-runtime'

import OrderOptions from './OrderOptions'

interface Props {
  orderInfo: Order
  splitOrder?: boolean
  takeaway?: boolean
  runtime?: { account: string }
}

const OrderHeader: FunctionComponent<
  Props & InjectedIntlProps & RenderContextProps
> = ({ orderInfo, splitOrder, takeaway, intl, runtime }) => {
  const storeAccount = runtime.account
  const orderSeller = orderInfo.sellers[0].name

  return (
    <header className="flex justify-between items-center mt7">
      <p className="t-heading-3 lh-copy">
        {intl.formatMessage(
          { id: 'order.header.number' },
          {
            orderId: orderInfo.orderId,
          }
        )}
        <br />
        <small className="c-muted-2 t-body">
          <FormattedMessage
            id={'order.header.date'}
            values={{
              orderDate: (
                <FormattedDate date={orderInfo.creationDate} style="short" />
              ),
              orderTime: <FormattedTime value={orderInfo.creationDate} />,
            }}
          />
        </small>
        <br />
        {splitOrder && storeAccount !== orderSeller && (
          <small className="c-muted-2 t-body">
            <FormattedMessage
              id={'order.header.seller'}
              values={{
                seller: <span className="c-action-primary">{orderSeller}</span>,
              }}
            />
          </small>
        )}
        {takeaway && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a className="c-action-primary t-small" href="#">
            {intl.formatMessage({ id: 'order.header.receipt' })}
          </a>
        )}
      </p>
      <OrderOptions
        className="dn-s flex-l"
        allowCancellation={orderInfo.allowCancellation}
        orderId={orderInfo.orderId}
        takeaway={takeaway}
      />
    </header>
  )
}

export default compose<Props & InjectedIntlProps & RenderContextProps, Props>(
  withRuntimeContext,
  injectIntl
)(OrderHeader)
