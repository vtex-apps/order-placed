import React, { FC } from 'react'

interface Props {
  borderless?: boolean
}

const OrderSection: FC<Props> = ({ children, borderless = false }) => {
  return (
    <section className={`${borderless ? '' : 'bb b--muted-4'}`}>
      {children}
    </section>
  )
}

export default OrderSection
