import React, { FC } from 'react'

export const Button: FC<{ href?: string }> = (props) => {
  if (props.href)
    return (
      <a href={props.href}>
        <button>{props.children}</button>
      </a>
    )
  return <button>{props.children}</button>
}

export const ButtonWithIcon: FC = (props) => {
  return <Button {...props}>{props.children}</Button>
}

export const IconCaretDown: FC = () => {
  return <div data-testid="icon-caret-down">IconCaretDown</div>
}

export const IconCaretUp: FC = () => {
  return <div data-testid="icon-caret-up">IconCaretUp</div>
}

export const PageBlock: FC = () => {
  return <div data-testid="summary">PageBlock</div>
}

export const Alert: FC = (props) => {
  return <div data-testid="alert">{props.children}</div>
}

export const Tooltip: FC = (props) => {
  return <div data-testid="tooltip">{props.children}</div>
}

export const IconInfo: FC = (props) => {
  return <div data-testid="icon-info">{props.children}</div>
}
