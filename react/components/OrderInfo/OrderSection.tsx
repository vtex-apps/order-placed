import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const OrderSection: FunctionComponent<Props> = ({ children }) => (
  <section className="bb b--muted-4">{children}</section>
)

export default OrderSection
