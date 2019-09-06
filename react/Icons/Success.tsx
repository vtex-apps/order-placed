import React, { PureComponent } from 'react'
import { calcIconSize } from './utils'

const iconBase = {
  height: 42,
  width: 42,
}

class SuccessIcon extends PureComponent<IconProps> {
  public render() {
    const { color = 'currentColor', size = 42 } = this.props
    const newSize = calcIconSize(iconBase, size)

    return (
      <svg
        data-testid="sucessIcon"
        width={newSize.width}
        height={newSize.height}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.666 22.333L16.9993 27.6663L30.3327 14.333"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
        <path
          d="M21 41C32.0457 41 41 32.0457 41 21C41 9.95431 32.0457 1 21 1C9.95431 1 1 9.95431 1 21C1 32.0457 9.95431 41 21 41Z"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </svg>
    )
  }
}

export default SuccessIcon
