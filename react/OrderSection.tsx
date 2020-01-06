import React, { FC } from 'react'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'

interface Props {
  borderless?: boolean
  className?: string
  name: string
}

const CSS_HANDLES = ['orderSection']

const OrderSection: FC<Props> = ({
  children,
  borderless = false,
  className = '',
  name,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const classes = [
    className,
    applyModifiers(handles.orderSection, name),
    !borderless && 'bb b--muted-4',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section data-testid={name} className={classes}>
      {children}
    </section>
  )
}

export default OrderSection
