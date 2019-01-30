import React from 'react'
import PropTypes from 'prop-types'
import {
  injectIntl,
  intlShape,
  FormattedTime,
  FormattedMessage,
} from 'react-intl'
import { compose } from 'recompose'
import { FormattedDate } from 'vtex.order-details'
import { withRuntimeContext } from 'vtex.render-runtime'
import OrderOptions from './OrderOptions'

const OrderHeader = ({ orderInfo, splitOrder, runtime, intl }) => {
  const storeAccount = runtime.account
  const orderSeller = orderInfo.sellers[0].name

  return (
    <header className="flex justify-between items-center mt7">
      <p className="t-heading-3-ns t-heading-4 lh-solid">
        {intl.formatMessage(
          { id: 'order.header.number' },
          {
            orderId: orderInfo.orderId,
          }
        )}
        <br />
        <small className="c-muted-2 t-small">
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
          <small className="c-muted-2 t-small">
            <FormattedMessage
              id={'order.header.seller'}
              values={{
                seller: <span className="c-action-primary">{orderSeller}</span>,
              }}
            />
          </small>
        )}
      </p>
      <OrderOptions
        className="dn-s flex-l"
        allowCancellation={orderInfo.allowCancellation}
      />
    </header>
  )
}

OrderHeader.propTypes = {
  orderInfo: PropTypes.object.isRequired,
  splitOrder: PropTypes.bool,
  runtime: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
}

export default compose(
  withRuntimeContext,
  injectIntl
)(OrderHeader)
