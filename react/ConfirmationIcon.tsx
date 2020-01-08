import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import SuccessIcon from './icons/Success'

const CSS_HANDLES = ['confirmationIconWrapper']

const ConfirmationIcon: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.confirmationIconWrapper} tc c-success`}>
      <SuccessIcon size={50} />
    </div>
  )
}
export default ConfirmationIcon
