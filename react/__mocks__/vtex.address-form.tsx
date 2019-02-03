import React, { Component } from 'react'

export class AddressSummary extends Component {
  render() {
    return <div>AddressSummary</div>
  }
}

export class AddressRules extends Component {
  render() {
    return this.props.children
  }
}
