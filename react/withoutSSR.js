import React from 'react'
import { NoSSR } from 'render'

function withoutSSR(Component) {
  class withoutSSR extends Component {
    render() {
      return (
        <NoSSR>
          <Component {...this.props} />
        </NoSSR>
      )
    }
  }

  return withoutSSR
}

export default withoutSSR
