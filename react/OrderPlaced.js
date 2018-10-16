import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import withNoSSR from './withNoSSR'

import getOrderGroup from './graphql/getOrderGroup.graphql'

class OrderPlaced extends Component {
  render() {
    return (
      <div>
        {this.props.data.loading
          ? "Carregando"
          : this.props.data.orderGroup && this.props.data.orderGroup.length > 0
          ? JSON.stringify(this.props.data.orderGroup)
          : "Não autorizado"
        }
      </div>
    )
  }
}

OrderPlaced.propTypes = {
  data: PropTypes.object.isRequired,
}

export default compose(
  withNoSSR,
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
