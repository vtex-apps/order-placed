import React, { PureComponent } from 'react'
import { calcIconSize } from './utils'

const iconBase = {
  height: 14,
  width: 16,
}

class MailIcon extends PureComponent<IconProps> {
  public render() {
    const { color = 'currentColor', size = 16 } = this.props
    const newSize = calcIconSize(iconBase, size)

    return (
      <svg
        width={newSize.width}
        height={newSize.height}
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 0H1C0.4 0 0 0.4 0 1V2.4L8 6.9L16 2.5V1C16 0.4 15.6 0 15 0Z"
          fill={color}
        />
        <path
          d="M7.5 8.90001L0 4.70001V13C0 13.6 0.4 14 1 14H15C15.6 14 16 13.6 16 13V4.70001L8.5 8.90001C8.22 9.04001 7.78 9.04001 7.5 8.90001Z"
          fill={color}
        />
      </svg>
    )
  }
}

export default MailIcon
