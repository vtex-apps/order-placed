import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'vtex.styleguide'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

const OrderSplitNotice = ({ deliveries, pickups, takeaways }) => {
  return (
    <Alert type="success">
      <FormattedMessage
        id={'order.split'}
        values={{
          deliveries,
          pickups,
          takeaways,
        }}
      />
    </Alert>
  )
}

OrderSplitNotice.propTypes = {
  deliveries: PropTypes.number.isRequired,
  pickups: PropTypes.number.isRequired,
  takeaways: PropTypes.number.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(OrderSplitNotice)
