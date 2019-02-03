import React, { Component, ComponentType } from 'react'
import { NoSSR } from 'vtex.render-runtime'

function withoutSSR(ChildComponent: ComponentType) {
  return class WithoutSSR extends Component {
    public render() {
      return (
        <NoSSR>
          <ChildComponent {...this.props} />
        </NoSSR>
      )
    }
  }
}

export default withoutSSR
