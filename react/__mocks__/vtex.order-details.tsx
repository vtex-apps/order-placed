import React, { FC } from 'react'

export function FormattedDate() {
  return <span>FormattedDate</span>
}

export function Address() {
  return <span>Address</span>
}

export function CustomerInfo() {
  return <span>CustomerInfo</span>
}

export const ProductImage: FC = () => <div>ProductImage</div>

export const ButtonLink: FC<{ to: string }> = ({
  to,
  children,
}) => (
  <a href={to} data-testid="button-link">
    {children}
  </a>
)
