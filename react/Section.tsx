import React, { FC } from 'react'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import { useResponsiveValue } from 'vtex.responsive-values'

interface Props {
  borderless?: MaybeResponsiveInput<boolean>
  marginBottom?: MaybeResponsiveInput<number>
  paddingBottom?: MaybeResponsiveInput<number>
  width?: MaybeResponsiveInput<string>
  name: string
}

const CSS_HANDLES = ['section']

const Section: FC<Props> = ({
  children,
  borderless: borderlessProp = false,
  marginBottom: marginBottomProp,
  paddingBottom: paddingBottomProp,
  width: widthProp,
  name,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const borderless = useResponsiveValue(borderlessProp)
  const width = useResponsiveValue(widthProp)
  const marginBottom = useResponsiveValue(marginBottomProp)
  const paddingBottom = useResponsiveValue(paddingBottomProp)

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
