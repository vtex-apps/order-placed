import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['confirmationTitle']

const ConfirmationTitle: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <h4
      className={`${handles.confirmationTitle} tc c-on-base mt7 mb0 t-heading-4`}
    >
      <FormattedMessage id="store/header.thanks" />
    </h4>
  )
}
export default ConfirmationTitle
