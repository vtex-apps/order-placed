import React, { Component } from 'react'

export function withRuntimeContext(WrappedComponent) {
  return class withRuntimeContext extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} runtime={{ account: 'vtexgame1' }} />
      )
    }
  }
}
