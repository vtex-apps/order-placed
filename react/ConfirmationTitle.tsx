import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'

const CSS_HANDLES = ['confirmationTitle'] as const

const ConfirmationTitle: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData
  const { status } = orderGroup

  return (
    <h4
      className={`${handles.confirmationTitle} tc c-on-base mt7 mb0 t-heading-4`}
    >
      {status === 'pending' ? (
        <FormattedMessage id="store/header.processing.order" />
      ) : (
        <FormattedMessage
          id="store/header.thanks"
          values={{
            firstName: profile.firstName,
            lastName: profile.lastName,
          }}
        />
      )}
    </h4>
  )
}
export default ConfirmationTitle
