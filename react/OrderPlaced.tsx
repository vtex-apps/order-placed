import React from 'react'
import { compose, graphql } from 'react-apollo'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { branch, renderComponent } from 'recompose'
import { Helmet, withRuntimeContext } from 'vtex.render-runtime'

import Analytics from './components/Analytics'
import Header from './components/Header'
import OrderInfo from './components/OrderInfo'
import * as getOrderGroup from './graphql/getOrderGroup.graphql'
import Skeleton from './components/Skeleton'
import withoutSSR from './components/WithoutSSR'
import CurrencyContext from './components/CurrencyContext'

interface Props {
  orderGroupQuery: any
  inStore: boolean
}

class OrderPlaced extends React.Component<Props & InjectedIntlProps> {
  public render() {
    const { orderGroupQuery, inStore, intl } = this.props
    const { orderGroup } = orderGroupQuery
    return (
      <CurrencyContext.Provider
        value={orderGroup.orders[0].storePreferencesData.currencyCode}
      >
        <Analytics eventList={orderGroup.analyticsData} />
        <Header
          orderGroup={orderGroup}
          profile={orderGroup.orders[0].clientProfileData}
          inStore={inStore}
        />
        <main>
          {orderGroup.orders.map((order: Order, index: number) => (
            <OrderInfo
              order={order}
              profile={order.clientProfileData}
              numOfOrders={orderGroup.orders.length}
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
  injectIntl,
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
