import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import {
  injectIntl,
  intlShape,
  FormattedTime,
  FormattedMessage,
} from 'react-intl'
import { compose } from 'recompose'
import { FormattedDate } from 'vtex.order-details'
import { withRuntimeContext } from 'vtex.render-runtime'
import { intlMessage } from '../../utils'

const OrderHeader = ({ orderInfo, splitOrder, runtime, intl }) => {
  const storeAccount = runtime ? runtime.account : null
  const orderSeller = orderInfo.sellers[0].name

  return (
    <header className="flex justify-between items-center flex-wrap mt7">
      <p className="t-heading-3-ns t-heading-4 lh-solid">
        {intlMessage(intl, 'order.header.number', {
          orderId: orderInfo.orderId,
        })}
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
      <div className="flex justify-between flex-wrap">
        <div className="mr3-ns mb4-s mb0-m">
          <Button variation="secondary">
            {intlMessage(intl, 'order.header.update.button')}
          </Button>
        </div>
        <div className="mr3-ns mb4-s mb0-m">
          <Button variation="secondary">
            {intlMessage(intl, 'order.header.myorders.button')}
          </Button>
        </div>
        {orderInfo.allowCancellation && (
          <Button variation="danger-tertiary">
            {intlMessage(intl, 'order.header.cancel.button')}
          </Button>
        )}
      </div>
    </header>
  )
}

OrderHeader.propTypes = {
  orderInfo: PropTypes.object.isRequired,
  splitOrder: PropTypes.bool,
  runtime: PropTypes.object,
  intl: intlShape.isRequired,
}

export default compose(
  withRuntimeContext,
  injectIntl
)(OrderHeader)
