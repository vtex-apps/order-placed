import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { branch, renderComponent } from 'recompose'
import { Loader } from 'vtex.order-details'
import Header from './components/Header'
import OrderInfo from './components/OrderInfo'
import getOrderGroup from './graphql/getOrderGroup.graphql'
import withoutSSR from './withoutSSR'

export const CurrencyContext = React.createContext('BRL')
const orderGroupNumberToQuery = '902351339185'
class OrderPlaced extends Component {
  render() {
    const { orderGroupQuery } = this.props
    return (
      <CurrencyContext.Provider
        value={orderGroupQuery.orderGroup[0].storePreferencesData.currencyCode}
      >
        <div className="center">
          <Header
            data={orderGroupQuery.orderGroup}
            profile={orderGroupQuery.orderGroup[0].clientProfileData}
          />
          {orderGroupQuery.orderGroup.map(order => (
            <OrderInfo
              order={order}
              profile={order.clientProfileData}
              splitOrder={orderGroupQuery.orderGroup.length > 1}
              key={order.orderId}
            />
          ))}
        </div>
      </CurrencyContext.Provider>
    )
  }
}

OrderPlaced.propTypes = {
  orderGroupQuery: PropTypes.object.isRequired,
}

const queryOptions = {
  name: 'orderGroupQuery',
  options: {
    variables: {
      orderGroup: orderGroupNumberToQuery,
    },
  },
}

export default compose(
  withoutSSR,
  graphql(getOrderGroup, queryOptions),
  branch(
    ({ orderGroupQuery }) => orderGroupQuery.loading,
    renderComponent(Loader)
  )
)(OrderPlaced)
