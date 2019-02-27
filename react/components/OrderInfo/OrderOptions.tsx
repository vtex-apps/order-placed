import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { ButtonLink } from 'vtex.order-details'

interface Props {
  allowCancellation: boolean
  takeaway?: boolean
  className?: string
  fullWidth?: boolean
  orderId?: string
}

const OrderOptions: FunctionComponent<Props & InjectedIntlProps> = ({
  allowCancellation,
  takeaway,
  intl,
  className = '',
  fullWidth,
  orderId,
}) => (
  <div className={`${className} flex flex-wrap justify-center flex-nowrap-m`}>
    <div className="mr5-ns mb5-s mb0-m w-100 w-auto-m">
      {takeaway ? (
        <ButtonLink variation="secondary" fullWidth={fullWidth} to="">
          {intl.formatMessage({
            id: 'order.header.takeaway.printreceipt.button',
          })}
        </ButtonLink>
      ) : (
        <ButtonLink
          variation="secondary"
          fullWidth={fullWidth}
          to={`/account#/orders/${orderId}/edit`}
        >
          {intl.formatMessage({ id: 'order.header.update.button' })}
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
          {intl.formatMessage({ id: 'order.header.myorders.button' })}
        </ButtonLink>
      </div>
    )}
    {allowCancellation && (
      <div className="w-100 w-auto-m">
        {takeaway ? (
          <ButtonLink variation="danger-tertiary" fullWidth={fullWidth} to="">
            {intl.formatMessage({
              id: 'order.header.takeaway.cancel.button',
            })}
          </ButtonLink>
        ) : (
          <ButtonLink
            variation="danger-tertiary"
            fullWidth={fullWidth}
            to={`/account#/orders/${orderId}/cancel`}
          >
            {intl.formatMessage({ id: 'order.header.cancel.button' })}
          </ButtonLink>
        )}
      </div>
    )}
  </div>
)

export default injectIntl(OrderOptions)
