import React, { FunctionComponent } from 'react'
import { compose, graphql } from 'react-apollo'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { branch, renderComponent } from 'recompose'
import { Helmet, withRuntimeContext } from 'vtex.render-runtime'
import { Alert } from 'vtex.styleguide'

import AnalyticsWrapper from './Analytics'
import Header from './components/Header'
import OrderInfo from './components/OrderInfo'
import Skeleton from './Skeleton'
import withoutSSR from './WithoutSSR'

import * as getOrderGroup from './graphql/getOrderGroup.graphql'

export const CurrencyContext = React.createContext('BRL')

interface Props {
  orderGroupQuery: any
  inStore: boolean
}

const InvalidOrder: FunctionComponent<Props & InjectedIntlProps> = ({
  intl: { formatMessage },
  orderGroupQuery: { error },
}) => {
  let errorLocaleId = 'order.invalid'

  if (error && error.message && error.message.includes('403')) {
    errorLocaleId = 'order.not-logged-in'
  }

  return (
    <div className="pv9 mw7 center">
      <main>
        <Alert type="error">{formatMessage({ id: errorLocaleId })}</Alert>
      </main>
    </div>
  )
}

class OrderPlaced extends React.Component<Props & InjectedIntlProps> {
  public render() {
    const { orderGroupQuery, inStore, intl } = this.props
    const { orderGroup } = orderGroupQuery

    return (
      <CurrencyContext.Provider
        value={orderGroup.orders[0].storePreferencesData.currencyCode}
      >
        <Helmet>
          <title>{intl.formatMessage({ id: 'page.title' })}</title>
        </Helmet>
        <AnalyticsWrapper eventList={orderGroup.analyticsData} />
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
  /** render loading skeleton if query is still loading */
  branch(
    ({ orderGroupQuery }: any) => orderGroupQuery.loading,
    renderComponent(Skeleton),
    /** if query errored or resulted in an invalid orderGroup, show error alert */
    branch(
      ({ orderGroupQuery }: any) =>
        orderGroupQuery.error ||
        orderGroupQuery.orderGroup == null ||
        orderGroupQuery.orderGroup.orders == null,
      renderComponent(InvalidOrder)
    )
  )
)(OrderPlaced)
