import type { FC } from 'react'
import React from 'react'

const ConfirmationIcon: FC = () => {
  return (
    <img
      src="https://assets-files-r2.bash.com/bash-assets/order-confirmation-unboxing-small.png"
      alt="Success! Thank you for your purchase."
      style={{
        margin: '0 auto',
        maxWidth: '200px',
        width: '80%',
        display: 'block',
        minWidth: '160px',
      }}
      id="order-success-image"
    />
  )
}

export default ConfirmationIcon
