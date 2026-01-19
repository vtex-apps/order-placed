import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import SuccessIcon from './Icons/Success'
import LoadingDotsIcon from './Icons/LoadingDots'
import { useOrderGroup } from './components/OrderGroupContext'
const CSS_HANDLES = ['confirmationIconWrapper']

const ConfirmationIcon: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { status: orderStatus } = useOrderGroup()

  return (
    <div className={`${handles.confirmationIconWrapper} tc c-success`}>
      {orderStatus === 'pending' ? (
        <LoadingDotsIcon size={50} />
      ) : (
        <SuccessIcon size={50} />
      )}
    </div>
  )
}
export default ConfirmationIcon
