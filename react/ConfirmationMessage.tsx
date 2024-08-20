import React, { FC, useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'
import { FurnitureNote } from './FurnitureNote'
import { getCookie, hasFurnitureDelivery } from './utils/functions'
import { appHomeProd, appHomeStaging } from './utils'

const CSS_HANDLES = [
  'confirmationMessage',
  'continueShoppingButton',
  'confirmationContainer',
]

const ConfirmationMessage: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  const [isApp, setIsApp] = useState(false)

  useEffect(() => {
    const isAppCookie = getCookie('is_app')
    setIsApp(isAppCookie === 'true')
  }, [])

  const handleClick = () => {
    if (typeof window === 'undefined') {
      return
    }

    const redirectUrl = window.location.hostname.includes('staging')
      ? appHomeStaging
      : appHomeProd
    window.location.replace(redirectUrl)
  }

  const shippingMethod =
    orderGroup.orders[0].pickUpParcels.length > 0 ? 'collect' : 'deliver'

  const hasFurniture = hasFurnitureDelivery(orderGroup)

  return (
    <div className={`${handles.confirmationContainer}`}>
      <p
        className={`${handles.confirmationMessage} mt5 t-body tc c-muted-1 lh-copy`}
      >
        {orderGroup.orders[0].clientProfileData.customerEmail ? (
          <FormattedMessage
            id="store/header.email"
            values={{
              lineBreak: <br />,
              userEmail: (
                <strong className="nowrap">
                  {orderGroup.orders[0].clientProfileData.customerEmail}
                </strong>
              ),
            }}
          />
        ) : (
          <FormattedMessage
            id="store/header.phone"
            values={{
              lineBreak: <br />,
              phone: (
                <strong className="nowrap">
                  {orderGroup.orders[0].clientProfileData.phone}
                </strong>
              ),
            }}
          />
        )}
      </p>
      {isApp && (
        <button
          className={handles.continueShoppingButton}
          onClick={handleClick}
        >
          Continue shopping
        </button>
      )}
      {hasFurniture && shippingMethod !== 'collect' ? (
        <FurnitureNote shippingMethod={shippingMethod} />
      ) : null}
    </div>
  )
}

export default ConfirmationMessage
