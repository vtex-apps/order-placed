import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'

const CSS_HANDLES = ['confirmationMessage', 'furnitureNote']

const ConfirmationMessage: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()

  return (
    <div className='container'>
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

        {/* furniture message */}
        <div className={`${handles.furnitureNote}`}>
          <h3> furniture delivery </h3>
          <p>
            We’ll call the recipient in the next few days to arrange the furniture delivery.
            <br/> Please ensure sufficient space to receive the goods and keep in mind that the couriers can’t hoist goods onto balconies.
            <br/> <a href='#'>Frequently asked questions</a>
          </p>
        </div>
    </div>
  )
}
export default ConfirmationMessage
