import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const OrderSection: FunctionComponent<Props> = ({ children }) => (
  <section className="bb b--muted-5">{children}</section>
)

export default OrderSection
