import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { Alert } from 'vtex.styleguide'

import { orderSplitMessage } from '../../utils'

interface Props {
  deliveries: number
  pickups: number
  takeaways: number
}

const OrderSplitNotice: FunctionComponent<Props & InjectedIntlProps> = ({
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

export default injectIntl(OrderSplitNotice)
