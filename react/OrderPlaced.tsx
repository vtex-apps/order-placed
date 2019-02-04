import React from 'react'
import { compose, graphql } from 'react-apollo'
import { branch, renderComponent } from 'recompose'
import { withRuntimeContext } from 'vtex.render-runtime'

import Header from './components/Header'
import OrderInfo from './components/OrderInfo'
import * as getOrderGroup from './graphql/getOrderGroup.graphql'
import Skeleton from './Skeleton'
import withoutSSR from './WithoutSSR'

export const CurrencyContext = React.createContext('BRL')

interface OrderGroupQuery {
  orderGroup: [Order]
}

interface Props {
  orderGroupQuery: OrderGroupQuery
  inStore: boolean
}

class OrderPlaced extends React.Component<Props> {
  public render() {
    const { orderGroupQuery, inStore } = this.props
    return (
      <CurrencyContext.Provider
        value={orderGroupQuery.orderGroup[0].storePreferencesData.currencyCode}
      >
        <Header
          data={orderGroupQuery.orderGroup}
          profile={orderGroupQuery.orderGroup[0].clientProfileData}
          inStore={inStore}
        />
        <main>
          {orderGroupQuery.orderGroup.map((order: Order, index: number) => (
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

export default compose(
  withRuntimeContext,
  withoutSSR,
  graphql(getOrderGroup.default, {
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
    ({ orderGroupQuery }: any) => orderGroupQuery.loading,
    renderComponent(Skeleton)
  )
)(OrderPlaced)
