import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'

import getOrderGroup from './graphql/getOrderGroup.graphql'
import Header from './components/Header'
import './styles.global.css'

class OrderPlaced extends Component {
  render() {
    return (
      <div className="w-70 center">
        <Header />
      </div>
    )
  }
}

OrderPlaced.propTypes = {
  data: PropTypes.object.isRequired,
}

export default compose(
  OrderPlaced,
  graphql(getOrderGroup, {
    options({ params }) {
      return {
        errorPolicy: params.orderGroup ? 'all' : 'none',
        variables: {
          orderGroup: params.orderGroup,
        },
      }
    },
  }),
)(OrderPlaced)

// export default OrderPlaced
