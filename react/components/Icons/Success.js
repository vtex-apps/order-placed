import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { calcIconSize, baseClassname } from './utils'

const iconBase = {
  width: 42,
  height: 42,
}

class SuccessIcon extends PureComponent {
  render() {
    const { color, size } = this.props
    const newSize = calcIconSize(iconBase, size)

    return (
      <svg
        className={`${baseClassname('mail')}`}
        width={newSize.width}
        height={newSize.height}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M11.666 22.333L16.9993 27.6663L30.3327 14.333" stroke={color}
          strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
        <path d="M21 41C32.0457 41 41 32.0457 41 21C41 9.95431 32.0457 1 21 1C9.95431 1 1 9.95431 1 21C1 32.0457 9.95431 41 21 41Z"
          stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"
        />
      </svg>
    )
  }
}

SuccessIcon.defaultProps = {
  color: 'currentColor',
  size: 42,
}

SuccessIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

export default SuccessIcon
