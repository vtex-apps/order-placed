import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonWithIcon } from 'vtex.styleguide'

const ButtonLink = ({ url, icon, variation, children }) => (
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

ButtonLink.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.node,
  variation: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ButtonLink
