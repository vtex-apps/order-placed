import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { branch, renderComponent } from 'recompose'
import { Loader } from 'vtex.order-details'
import { withRuntimeContext } from 'vtex.render-runtime'

import Header from './components/Header'
import OrderInfo from './components/OrderInfo'
import getOrderGroup from './graphql/getOrderGroup.graphql'
import withoutSSR from './withoutSSR'

export const CurrencyContext = React.createContext('BRL')

class OrderPlaced extends Component {
  render() {
    const { orderGroupQuery } = this.props
    return (
      <CurrencyContext.Provider
        value={orderGroupQuery.orderGroup[0].storePreferencesData.currencyCode}
      >
        <Header
          data={orderGroupQuery.orderGroup}
          profile={orderGroupQuery.orderGroup[0].clientProfileData}
        />
        <main>
          {orderGroupQuery.orderGroup.map((order, index) => (
            <OrderInfo
              order={order}
              profile={order.clientProfileData}
              numOfOrders={orderGroupQuery.orderGroup.length}
              index={index}
              key={order.orderId}
            />
          ))}
        </main>
      </CurrencyContext.Provider>
    )
  }
}

OrderPlaced.propTypes = {
  orderGroupQuery: PropTypes.object.isRequired,
  runtime: PropTypes.object.isRequired,
}

export default compose(
  withRuntimeContext,
  withoutSSR,
  graphql(getOrderGroup, {
    name: 'orderGroupQuery',
    options: () => {
      const params = new URLSearchParams(location.search)
      const orderGroup = params.get('og')
      return {
        variables: {
          orderGroup,
        },
      }
    },
  }),
  branch(
    ({ orderGroupQuery }) => orderGroupQuery.loading,
    renderComponent(Loader)
  )
)(OrderPlaced)
