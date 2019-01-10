import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'vtex.styleguide'
import { injectIntl, intlShape } from 'react-intl'
import { intlMessage } from '../../utils'

const OrderSplitNotice = ({ deliveries, pickups, takeaways, intl }) => {
  return (
    <Alert type="success">
      { intlMessage(intl, 'order.split', {
        deliveries,
        pickups,
        takeaways,
      }
      ) }
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
