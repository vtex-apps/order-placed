import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { Alert } from 'vtex.styleguide'

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
      {intl.formatMessage(
        { id: 'order.split' },
        {
          deliveries,
          pickups,
          takeaways,
        }
      )}
    </Alert>
  )
}

export default injectIntl(OrderSplitNotice)
