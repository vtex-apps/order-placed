import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'

const CSS_HANDLES = ['confirmationTitle']

interface Props {
  displayName?: boolean
}

const ConfirmationTitle: FC<Props> = ({ displayName = false }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const orderGroup = useOrderGroup()
  const profile = orderGroup.orders[0].clientProfileData

  return (
    <h4
      className={`${handles.confirmationTitle} tc c-on-base mt7 mb0 t-heading-4`}
    >
      {displayName
        ? <FormattedMessage
          id="store/header.thanks.name"
          values={{
            firstName: profile.firstName,
            lastName: profile.lastName
          }}
        />
        : <FormattedMessage id="store/header.thanks" />
      }

    </h4>
  )
}
export default ConfirmationTitle
