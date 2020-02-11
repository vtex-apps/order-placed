import React, { FunctionComponent } from 'react'
import { WrappedComponentProps, injectIntl } from 'react-intl'
import { Alert } from 'vtex.styleguide'

import { orderSplitMessage } from '../../utils'

const OrderSplitNotice: FunctionComponent<Props & WrappedComponentProps> = ({
  deliveries,
  pickups,
  takeaways,
  intl,
}) => {
  return (
    <Alert type="success">
      {orderSplitMessage({ deliveries, pickups, takeaways, intl })}
    </Alert>
  )
}

interface Props {
  deliveries: number
  pickups: number
  takeaways: number
}

export default injectIntl(OrderSplitNotice)
