import React, { Component } from 'react'

export function FormattedDate() {
  return <span>FormattedDate</span>
}

export class ProductImage extends Component {
  public render() {
    return <div>ProductImage</div>
  }
}

export function Address() {
  return <span>Address</span>
}

export class ButtonLink extends Component {
  public render() {
    return <span>{this.props.children}</span>
  }
}

export function CustomerInfo() {
  return <span>CustomerInfo</span>
}
