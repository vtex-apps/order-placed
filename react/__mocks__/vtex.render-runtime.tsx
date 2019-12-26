import React, { Component } from 'react'

export function withRuntimeContext(WrappedComponent: any) {
  return class WithRuntimeContext extends Component {
    public render() {
      return (
        <WrappedComponent {...this.props} runtime={{ account: 'vtexgame1' }} />
      )
    }
  }
}

export function ExtensionPoint({ id }: { id: string }) {
  return <div>Extension point {id}</div>
}
