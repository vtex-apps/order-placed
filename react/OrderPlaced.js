import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { branch, renderComponent } from 'recompose'
import { Loader } from 'vtex.order-details'
import Header from './components/Header/Header'
import OrderInfo from './components/OrderInfo/OrderInfo'
import getOrderGroup from './graphql/getOrderGroup.graphql'
import withoutSSR from './withoutSSR'

export const CurrencyContext = React.createContext('BRL')
export const SplitOrderContext = React.createContext(false)
const orderGroupNumberToQuery = '904272889752'
class OrderPlaced extends Component {
  render() {
    const { orderGroupQuery } = this.props
    return (
      <CurrencyContext.Provider
        value={orderGroupQuery.orderGroup[0].storePreferencesData.currencyCode}
      >
        <SplitOrderContext.Provider
          value={orderGroupQuery.orderGroup.length > 1}
        >
          <div className="center">
            <Header
              data={orderGroupQuery.orderGroup}
              profile={orderGroupQuery.orderGroup[0].clientProfileData}
            />
            {orderGroupQuery.orderGroup.map(order => (
              <OrderInfo
                data={order}
                profile={order.clientProfileData}
                key={order.orderId}
              />
            ))}
          </div>
        </SplitOrderContext.Provider>
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
