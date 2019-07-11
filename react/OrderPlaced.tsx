import React, { FunctionComponent } from 'react'
import { compose, graphql } from 'react-apollo'
import { injectIntl, InjectedIntlProps, defineMessages } from 'react-intl'
import { branch, renderComponent } from 'recompose'

import { Helmet, withRuntimeContext } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'

import AnalyticsWrapper from './Analytics'
import Header from './components/Header'
import OrderInfo from './components/OrderInfo'
import Skeleton from './Skeleton'
import withoutSSR from './WithoutSSR'
import ErrorMessage from './components/ErrorMessage'

import * as getOrderGroup from './graphql/getOrderGroup.graphql'

import NotFound from './Icons/NotFound'
import Forbidden from './Icons/Forbidden'

export const CurrencyContext = React.createContext('BRL')

const message = defineMessages({
  title: {
    id: 'store/page.title',
    defaultMessage: '',
  },
})

const OrderPlaced: FunctionComponent<Props & InjectedIntlProps> = ({
  orderGroupQuery,
  inStore,
  intl,
}) => {
  const { orderGroup } = orderGroupQuery

  return (
    <CurrencyContext.Provider
      value={orderGroup.orders[0].storePreferencesData.currencyCode}
    >
      <Helmet>
        <title>{intl.formatMessage(message.title)}</title>
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

interface Props {
  orderGroupQuery: any
  inStore: boolean
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
  /** render loading skeleton if query is still loading */
  branch(
    ({ orderGroupQuery }: any) => orderGroupQuery.loading,
    renderComponent(Skeleton)
  ),
  injectIntl,
  /** if query errored display an error alert */
  branch(
    ({ orderGroupQuery: { error } }: any) => {
      if (!error) return

      return (
        (error.extensions && error.extensions.response.status === 403) ||
        (error.message && error.message.includes('403'))
      )
    },
    renderComponent(({ intl }: any) => (
      <ErrorMessage
        icon={<Forbidden />}
        errorId="order.error.not-logged-in.title"
        messageId="order.error.not-logged-in.message"
      >
        <a href={`/login?returnUrl=${window.location.href}`}>
          <Button>{intl.formatMessage({ id: 'go-to-login' })}</Button>
        </a>
      </ErrorMessage>
    ))
  ),
  /** if query resulted in an invalid orderGroup display an error alert*/
  branch(
    ({ orderGroupQuery: { orderGroup } }: any) =>
      orderGroup == null || orderGroup.orders == null,
    renderComponent(({ intl }: any) => (
      <ErrorMessage
        icon={<NotFound />}
        errorId="order.error.invalid.title"
        messageId="order.error.invalid.message"
      >
        <a href="/">
          <Button>{intl.formatMessage({ id: 'go-to-home' })}</Button>
        </a>
      </ErrorMessage>
    ))
  )
)(OrderPlaced)
