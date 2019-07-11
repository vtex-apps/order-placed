import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonLink } from 'vtex.order-details'

const OrderOptions: FunctionComponent<Props> = ({
  allowCancellation,
  takeaway,
  className = '',
  fullWidth,
  orderId,
}) => (
  <div className={`${className} flex flex-wrap justify-center flex-nowrap-m`}>
    <div className="mr5-ns mb5-s mb0-m w-100 w-auto-m">
      {takeaway ? (
        <ButtonLink variation="secondary" fullWidth={fullWidth} to="">
          <FormattedMessage id="store/order.header.takeaway.printreceipt.button" />
        </ButtonLink>
      ) : (
        <ButtonLink
          variation="secondary"
          fullWidth={fullWidth}
          to={`/account#/orders/${orderId}/edit`}
        >
          <FormattedMessage id="store/order.header.update.button" />
        </ButtonLink>
      )}
    </div>
    {!takeaway && (
      <div className="mr5-ns mb5-s mb0-m w-100 w-auto-m">
        <ButtonLink
          variation="secondary"
          fullWidth={fullWidth}
          to="/account#/orders/"
        >
          <FormattedMessage id="store/order.header.myorders.button" />
        </ButtonLink>
      </div>
    )}
    {allowCancellation && (
      <div className="w-100 w-auto-m">
        {takeaway ? (
          <ButtonLink variation="danger-tertiary" fullWidth={fullWidth} to="">
            <FormattedMessage id="store/order.header.takeaway.cancel.button" />
          </ButtonLink>
        ) : (
          <ButtonLink
            variation="danger-tertiary"
            fullWidth={fullWidth}
            to={`/account#/orders/${orderId}/cancel`}
          >
            <FormattedMessage id="store/order.header.cancel.button" />
          </ButtonLink>
        )}
      </div>
    )}
  </div>
)

interface Props {
  allowCancellation: boolean
  takeaway?: boolean
  className?: string
  fullWidth?: boolean
  orderId?: string
}

export default OrderOptions
