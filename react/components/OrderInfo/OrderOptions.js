import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import { injectIntl, intlShape } from 'react-intl'
import { intlMessage } from '../../utils'

const OrderOptions = ({
  allowCancellation,
  intl,
  className = '',
  blockButtons,
}) => (
  <div className={`${className} flex flex-wrap justify-between flex-nowrap-m`}>
    <div className="mr3-ns mb4-s mb0-m w-100 w-auto-m">
      <Button variation="secondary" block={blockButtons}>
        {intlMessage(intl, 'order.header.update.button')}
      </Button>
    </div>
    <div className="mr3-ns mb4-s mb0-m w-100 w-auto-m">
      <Button variation="secondary" block={blockButtons}>
        {intlMessage(intl, 'order.header.myorders.button')}
      </Button>
    </div>
    {allowCancellation && (
      <div className="w-100 w-auto-m">
        <Button variation="danger-tertiary" block={blockButtons}>
          {intlMessage(intl, 'order.header.cancel.button')}
        </Button>
      </div>
    )}
  </div>
)

OrderOptions.propTypes = {
  allowCancellation: PropTypes.bool,
  intl: intlShape.isRequired,
  className: PropTypes.string,
  blockButtons: PropTypes.bool,
}

export default injectIntl(OrderOptions)
