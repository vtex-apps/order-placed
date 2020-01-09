import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['orderPlacedHeader']

const Header: FC = ({ children }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return <header className={handles.orderPlacedHeader}>{children}</header>
}

export default Header
