import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

export class ButtonWithIcon extends Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

export class IconCaretDown extends Component {
  render() {
    return <div>IconCaretDown</div>
  }
}

export class IconCaretUp extends Component {
  render() {
    return <div>IconCaretUp</div>
  }
}

export class PageBlock extends Component {
  render() {
    return <div data-testid="summary">PageBlock</div>
  }
}

export class Alert extends Component {
  render() {
    return <div data-testid="alert">{this.props.children}</div>
  }
}
