import React, { FunctionComponent } from 'react'
import { compose, graphql } from 'react-apollo'
import {
  injectIntl,
  InjectedIntlProps,
  defineMessages,
  FormattedMessage,
} from 'react-intl'
import { branch, renderComponent } from 'recompose'

import { Helmet, withRuntimeContext, ExtensionPoint } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'
import { usePWA } from 'vtex.store-resources/PWAContext'

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

const messages = defineMessages({
  title: {
    id: 'store/page.title',
    defaultMessage: '',
  },
  invalidTitle: {
    id: 'store/order.error.invalid.title',
    defaultMessage: '',
  },
  invalidMessage: {
    id: 'store/order.error.invalid.message',
    defaultMessage: '',
  },
  notLoggedTitle: {
    id: 'store/order.error.not-logged-in.title',
    defaultMessage: '',
  },
  notLoggedMessage: {
    id: 'store/order.error.not-logged-in.message',
    defaultMessage: '',
  },
})

const OrderPlaced: FunctionComponent<Props & InjectedIntlProps> = ({
  orderGroupQuery,
  inStore,
  intl,
}) => {
  const { orderGroup } = orderGroupQuery
  const { settings = {} } = usePWA() || {}
  const { promptOnCustomEvent } = settings
  return (
    <CurrencyContext.Provider
      value={orderGroup.orders[0].storePreferencesData.currencyCode}>
      <Helmet>
        <title>{intl.formatMessage(messages.title)}</title>
      </Helmet>
      <AnalyticsWrapper eventList={orderGroup.analyticsData} />
      <ExtensionPoint id="order-placed-top" orderGroup={orderGroup} />
      <Header
        orderGroup={orderGroup}
        profile={orderGroup.orders[0].clientProfileData}
        inStore={inStore}
      />
      <main className="mv6 w-80-ns w-90 center">
        {orderGroup.orders.map((order: Order, index: number) => (
          <OrderInfo
            order={order}
            profile={order.clientProfileData}
            numOfOrders={orderGroup.orders.length}
            index={index}
            key={order.orderId}
          />
        ))}
        {promptOnCustomEvent === 'checkout' && (
          <ExtensionPoint id="promotion-banner" type="install" />
        )}
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
  /** if query errored display an error alert */
  branch(
    ({ orderGroupQuery: { error } }: any) => {
      if (!error) return

      return (
        (error.extensions && error.extensions.response.status === 403) ||
        (error.message && error.message.includes('403'))
      )
    },
    renderComponent(() => (
      <ErrorMessage
        icon={<Forbidden />}
        errorId={messages.notLoggedTitle.id}
        messageId={messages.notLoggedMessage.id}>
        <a href={`/login?returnUrl=${window.location.href}`}>
          <Button>
            <FormattedMessage id="store/go-to-login" />
          </Button>
        </a>
      </ErrorMessage>
    ))
  ),
  /** if query resulted in an invalid orderGroup display an error alert*/
  branch(
    ({ orderGroupQuery: { orderGroup } }: any) =>
      orderGroup == null || orderGroup.orders == null,
    renderComponent(() => (
      <ErrorMessage
        icon={<NotFound />}
        errorId={messages.invalidTitle.id}
        messageId={messages.invalidMessage.id}>
        <a href="/">
          <Button>
            <FormattedMessage id="store/go-to-home" />
          </Button>
        </a>
      </ErrorMessage>
    ))
  ),
  injectIntl
)(OrderPlaced)
