import React, { Component } from 'react'

export class Button extends Component {
  public render() {
    return <button>{this.props.children}</button>
  }
}

export class ButtonWithIcon extends Component {
  public render() {
    return <button>{this.props.children}</button>
  }
}

export class IconCaretDown extends Component {
  public render() {
    return <div data-testid="icon-caret-down">IconCaretDown</div>
  }
}

export class IconCaretUp extends Component {
  public render() {
    return <div data-testid="icon-caret-up">IconCaretUp</div>
  }
}

export class PageBlock extends Component {
  public render() {
    return <div data-testid="summary">PageBlock</div>
  }
}

export class Alert extends Component {
  public render() {
    return <div data-testid="alert">{this.props.children}</div>
  }
}

export class Tooltip extends Component {
  public render() {
    return <div data-testid="tooltip">{this.props.children}</div>
  }
}

export class IconInfo extends Component {
  public render() {
    return <div data-testid="icon-info">{this.props.children}</div>
  }
}
