import React, { Component } from 'react'

export class AddressSummary extends Component {
  public render() {
    return <div>AddressSummary</div>
  }
}

export class AddressRules extends Component {
  public render() {
    return this.props.children
  }
}
