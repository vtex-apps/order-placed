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
import { withRuntimeContext } from 'render'
import { SplitOrderContext } from '../../OrderPlaced'
import { intlMessage } from '../../utils'

const OrderHeader = ({ orderInfo, runtime, intl }) => {
  const storeAccount = runtime.account
  const orderSeller = orderInfo.sellers[0].name

  return (
    <div className="flex justify-between items-center flex-wrap mt7">
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
        <SplitOrderContext.Consumer>
          {splitOrder =>
            splitOrder &&
            storeAccount !== orderSeller && (
              <small className="c-muted-2 t-small">
                <FormattedMessage
                  id={'order.header.seller'}
                  values={{
                    seller: (
                      <span className="c-action-primary">{orderSeller}</span>
                    ),
                  }}
                />
              </small>
            )
          }
        </SplitOrderContext.Consumer>
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
    </div>
  )
}

OrderHeader.propTypes = {
  orderInfo: PropTypes.object.isRequired,
  runtime: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
}

export default compose(
  withRuntimeContext,
  injectIntl
)(OrderHeader)
