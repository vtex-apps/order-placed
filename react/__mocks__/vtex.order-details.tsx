import React, { FunctionComponent } from 'react'

export function FormattedDate() {
  return <span>FormattedDate</span>
}

export function Address() {
  return <span>Address</span>
}

export function CustomerInfo() {
  return <span>CustomerInfo</span>
}

export const ProductImage: FunctionComponent = () => <div>ProductImage</div>

export const ButtonLink: FunctionComponent<{ to: string }> = ({
  to,
  children,
}) => (
  <a href={to} data-testid="button-link">
    {children}
  </a>
)
