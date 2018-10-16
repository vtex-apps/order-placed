import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NoSSR } from 'render'

function withNoSSR(Component) {
  class WithNoSSR extends Component {
    render() {
      return (
        <NoSSR>
          <Component {...this.props} />
        </NoSSR>
      )
    }
  }

  return WithNoSSR
}

export default withNoSSR
