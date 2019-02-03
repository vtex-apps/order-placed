import React, { FunctionComponent, ReactChild, ReactNode } from 'react'
import { Button, ButtonWithIcon } from 'vtex.styleguide'

interface Props {
  url: string
  icon?: ReactNode
  variation: string
  children: ReactChild
}

const ButtonLink: FunctionComponent<Props> = ({
  url,
  icon,
  variation,
  children,
}) => (
  <a href={url} target="_blank">
    {icon ? (
      <ButtonWithIcon icon={icon} variation={variation}>
        {children}
      </ButtonWithIcon>
    ) : (
      <Button variation={variation}>{children}</Button>
    )}
  </a>
)

export default ButtonLink
