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

export function useRuntime() {
  return {
    query: window.location.search
      .substr(1)
      .split('&')
      .map((pair) => pair.split('='))
      .reduce((acc: any, [key, val]) => {
        acc[key] = encodeURIComponent(val)
        return acc
      }, {}),
  }
}
