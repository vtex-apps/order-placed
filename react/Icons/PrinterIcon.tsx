import React, { PureComponent } from 'react'
import { calcIconSize } from './utils'

const iconBase = {
  height: 16,
  width: 16,
}

class PrinterIcon extends PureComponent<IconProps> {
  public render() {
    const { color = 'currentColor', size = 16 } = this.props
    const newSize = calcIconSize(iconBase, size)

    return (
      <svg
        width={newSize.width}
        height={newSize.height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13 0H3V3H13V0Z" fill={color} />
        <path
          d="M15 5H1C0.4 5 0 5.4 0 6V12C0 12.6 0.4 13 1 13H3V15C3 15.6 3.4 16 4 16H12C12.6 16 13 15.6 13 15V13H15C15.6 13 16 12.6 16 12V6C16 5.4 15.6 5 15 5ZM11 14H5V9H11V14Z"
          fill={color}
        />
      </svg>
    )
  }
}

export default PrinterIcon
