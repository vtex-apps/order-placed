import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import { injectIntl, intlShape } from 'react-intl'

const OrderOptions = ({
  allowCancellation,
  takeaway,
  intl,
  className = '',
  fullWidth,
}) => (
  <div className={`${className} flex flex-wrap justify-between flex-nowrap-m`}>
    <div className="mr3-ns mb4-s mb0-m w-100 w-auto-m">
      <Button variation="secondary" block={fullWidth}>
        {takeaway
          ? intl.formatMessage({
            id: 'order.header.takeaway.printreceipt.button',
          })
          : intl.formatMessage({ id: 'order.header.update.button' })}
      </Button>
    </div>
    {!takeaway && (
      <div className="mr3-ns mb4-s mb0-m w-100 w-auto-m">
        <Button variation="secondary" block={fullWidth}>
          {intl.formatMessage({ id: 'order.header.myorders.button' })}
        </Button>
      </div>
    )}
    {allowCancellation && (
      <div className="w-100 w-auto-m">
        <Button variation="danger-tertiary" block={fullWidth}>
          {takeaway
            ? intl.formatMessage({ id: 'order.header.takeaway.cancel.button' })
            : intl.formatMessage({ id: 'order.header.cancel.button' })}
        </Button>
      </div>
    )}
  </div>
)

OrderOptions.propTypes = {
  allowCancellation: PropTypes.bool,
  intl: intlShape.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  takeaway: PropTypes.bool,
}

export default injectIntl(OrderOptions)
