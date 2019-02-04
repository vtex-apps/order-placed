import React, { FunctionComponent, ReactChild, ReactNode } from 'react'
import { Button, ButtonWithIcon } from 'vtex.styleguide'

interface Props {
  url: string
  icon?: ReactNode
  fullWidth?: boolean
  openNewWindow?: boolean
  variation: string
  children: ReactChild
}

const ButtonLink: FunctionComponent<Props> = ({
  url,
  icon,
  fullWidth,
  openNewWindow,
  variation,
  children,
}) => (
  <a href={url} target={openNewWindow ? '_blank' : ''}>
    {icon ? (
      <ButtonWithIcon icon={icon} variation={variation} block={fullWidth}>
        {children}
      </ButtonWithIcon>
    ) : (
      <Button variation={variation} block={fullWidth}>
        {children}
      </Button>
    )}
  </a>
)

export default ButtonLink
