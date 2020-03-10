import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['orderPlacedFooter']

const Footer: FC = ({ children }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return <footer className={handles.orderPlacedFooter}>{children}</footer>
}

export default Footer
