import React, { FunctionComponent, useState } from 'react'
import { useQuery } from 'react-apollo'
import {
  injectIntl,
  InjectedIntlProps,
  defineMessages,
  FormattedMessage,
} from 'react-intl'
import { compose } from 'recompose'
import {
  Helmet,
  withRuntimeContext,
  ExtensionPoint,
  useRuntime,
} from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'
import { usePWA } from 'vtex.store-resources/PWAContext'

import { Analytics } from './components/Analytics'
import OrderInfo from './components/OrderInfo'
import Skeleton from './Skeleton'
import withoutSSR from './components/WithoutSSR'
import ErrorMessage from './components/ErrorMessage'
import NotFound from './Icons/NotFound'
import Forbidden from './Icons/Forbidden'
import { OrderGroupContext } from './components/OrderGroupContext'
import GET_ORDER_GROUP from './graphql/getOrderGroup.graphql'

type Props = InjectedIntlProps

interface OrderGroupData {
  orderGroup: OrderGroup
}

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

const OrderPlaced: FunctionComponent<Props> = ({ intl, children }) => {
  const runtime = useRuntime()
  const { settings = {} } = usePWA() || {}
  const [installDismissed, setInstallDismissed] = useState(false)
  const { data, loading, error } = useQuery<OrderGroupData>(GET_ORDER_GROUP, {
    variables: {
      orderGroup: runtime.query.og,
    },
  })

  /** render loading skeleton if query is still loading */
  if (loading) return <Skeleton />

  if (
    error?.message.includes('403') ||
    // 'any' needed because graphql error type doesn't have 'extensions' prop
    (error as any)?.extensions?.response?.status === 403
  ) {
    /** if query errored display an error alert */
    return (
      <ErrorMessage
        icon={<Forbidden />}
        errorId={messages.notLoggedTitle.id}
        messageId={messages.notLoggedMessage.id}
      >
        <a href={`/login?returnUrl=${window.location.href}`}>
          <Button>
            <FormattedMessage id="store/go-to-login" />
          </Button>
        </a>
      </ErrorMessage>
    )
  }

  /** if query resulted in an invalid orderGroup display an error alert*/
  if (data?.orderGroup?.orders == null) {
    return (
      <ErrorMessage
        icon={<NotFound />}
        errorId={messages.invalidTitle.id}
        messageId={messages.invalidMessage.id}
      >
        <a href="/">
          <Button>
            <FormattedMessage id="store/go-to-home" />
          </Button>
        </a>
      </ErrorMessage>
    )
  }

  const { orderGroup } = data
  const { promptOnCustomEvent } = settings

  return (
    <OrderGroupContext.Provider value={orderGroup}>
      <CurrencyContext.Provider
        value={orderGroup.orders[0].storePreferencesData.currencyCode}
      >
        <Helmet>
          <title>{intl.formatMessage(messages.title)}</title>
        </Helmet>

        <Analytics eventList={orderGroup.analyticsData} />

        <ExtensionPoint id="order-placed-top" orderGroup={orderGroup} />

        {children}

        <main className="mv6 w-80-ns w-90 center">
          {orderGroup.orders.map((order, index) => (
            <OrderInfo
              order={order}
              profile={order.clientProfileData}
              numOfOrders={orderGroup.orders.length}
              index={index}
              key={order.orderId}
            />
          ))}
          {promptOnCustomEvent === 'checkout' && !installDismissed && (
            <ExtensionPoint
              id="promotion-banner"
              type="install"
              onDismiss={() => {
                setInstallDismissed(true)
              }}
            />
          )}
        </main>
      </CurrencyContext.Provider>
    </OrderGroupContext.Provider>
  )
}

export default compose<Props, Props>(
  withRuntimeContext,
  withoutSSR,
  injectIntl
)(OrderPlaced)
