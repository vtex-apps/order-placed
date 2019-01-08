import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import Header from './components/Header/Header'
import OrderInfo from './components/OrderInfo/OrderInfo'
import { profileQuery } from './test-cases/profileQuery'
import getOrderGroup from './graphql/getOrderGroup.graphql'
import withNoSSR from './withNoSSR'

export const CurrencyContext = React.createContext('BRL')
export const SplitOrderContext = React.createContext(false)
class OrderPlaced extends Component {
  render() {
    const { orderGroupQuery } = this.props
    return (orderGroupQuery.loading) ? null
      : (
        <CurrencyContext.Provider value={orderGroupQuery.orderGroup[0].storePreferencesData.currencyCode}>
          <SplitOrderContext.Provider value={orderGroupQuery.orderGroup.length > 1}>
            <div className="center">
              <Header data={orderGroupQuery.orderGroup} profile={profileQuery.profile} />
              {
                orderGroupQuery.orderGroup.map(order => {
                  return (
                    <OrderInfo
                      data={order}
                      profile={profileQuery.profile}
                      key={order.orderId}
                    />
                  )
                })
              }
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
      orderGroup: '900863205885',
    },
  },
}

export default compose(
  withNoSSR,
  graphql(getOrderGroup, queryOptions)
)(OrderPlaced)
