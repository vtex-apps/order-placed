import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['orderWrapper']

const Order: FC = ({ children }) => {
  const handles = useCssHandles(CSS_HANDLES)
  return <div className={handles.orderWrapper}>{children}</div>
}

export default Order
