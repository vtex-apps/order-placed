import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { compose, graphql } from 'react-apollo'

// import getOrderGroup from './graphql/getOrderGroup.graphql'
import Header from './components/Header/Header'
import OrderInfo from './components/OrderInfo/OrderInfo'

class OrderPlaced extends Component {
  render() {
    return (
      <div className="w-50-ns w-95 center">
        <Header />
        <hr className="bg-muted-5 c-muted-5 w-95" size="1" />
        <OrderInfo />
      </div>
    )
  }
}

// OrderPlaced.propTypes = {
//   data: PropTypes.object.isRequired,
// }

// export default compose(
//   OrderPlaced,
//   graphql(getOrderGroup, {
//     options({ params }) {
//       return {
//         errorPolicy: params.orderGroup ? 'all' : 'none',
//         variables: {
//           orderGroup: params.orderGroup,
//         },
//       }
//     },
//   }),
// )(OrderPlaced)

export default OrderPlaced
