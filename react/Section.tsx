import React, { FC } from 'react'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import { useResponsiveValues } from 'vtex.responsive-values'

interface Props {
  borderless?: MaybeResponsiveInput<boolean>
  marginBottom?: MaybeResponsiveInput<number>
  paddingBottom?: MaybeResponsiveInput<number>
  width?: MaybeResponsiveInput<string>
  name: string
}

const CSS_HANDLES = ['section']

const Section: FC<Props> = ({ children, name, ...layoutProps }) => {
  const handles = useCssHandles(CSS_HANDLES)

  const {
    borderless,
    width,
    marginBottom,
    paddingBottom,
  } = useResponsiveValues(layoutProps)

  const classes = [
    'center',
    applyModifiers(handles.section, name),
    marginBottom && `mb${marginBottom}`,
    paddingBottom && `pb${paddingBottom}`,
    !borderless && 'bb b--muted-4',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section data-testid={name} className={classes} style={{ width }}>
      {children}
    </section>
  )
}

export default Section
