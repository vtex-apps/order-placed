import React, { FC } from 'react'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import { useResponsiveValue } from 'vtex.responsive-values'

interface Props {
  borderless?: boolean
  marginBottom?: number
  paddingBottom?: number
  width?: string | { mobile: string; desktop: string }
  name: string
}

const CSS_HANDLES = ['orderSection']

const OrderSection: FC<Props> = ({
  children,
  borderless = false,
  marginBottom,
  paddingBottom,
  width,
  name,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const responsiveWidth = useResponsiveValue(width)
  const classes = [
    'center',
    applyModifiers(handles.orderSection, name),
    marginBottom && `mb${marginBottom}`,
    paddingBottom && `pb${paddingBottom}`,
    !borderless && 'bb b--muted-4',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      data-testid={name}
      className={classes}
      style={{ width: responsiveWidth }}
    >
      {children}
    </section>
  )
}

export default OrderSection
