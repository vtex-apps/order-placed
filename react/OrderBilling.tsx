import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrder } from './components/OrderContext'

const CSS_HANDLES = [
  'billingAddressContainer',
  'billingAddressTitle',
  'billingName',
  'billingPhoneNumber',
  'billingStreet',
  'billingCity',
]

interface Props {
  displayTitle?: boolean
}

const OrderBilling: FC<Props> = ({ displayTitle = true }) => {
  const { customData } = useOrder()
  const handles = useCssHandles(CSS_HANDLES)

  if (!customData || customData.customApps.length === 0) return null;

  return (
    <div className={`${handles.billingAddressContainer} lh-copy`}>
      {displayTitle ? (
        <span className={`${handles.billingAddressTitle}`}>
          <FormattedMessage id="store/payments.billing.title" />
        </span>
      ) : (
        ''
      )}
      <br />
      <small className={`${handles.billingName} c-muted-2 t-small`}>
        {customData.customApps[0].fields.name}
      </small>
      <br />
      <small className={`${handles.billingPhoneNumber} c-muted-2 t-small`}>
        {customData.customApps[0].fields.phone_number}
      </small>
      <br />
      <small className={`${handles.billingStreet} c-muted-2 t-small`}>
        {customData.customApps[0].fields.street}
      </small>
      <br />
      <small className={`${handles.billingCity} c-muted-2 t-small`}>
        {customData.customApps[0].fields.city}
      </small>
    </div>
  )
}

export default OrderBilling
