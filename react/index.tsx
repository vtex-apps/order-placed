import React, { FC, useState, Fragment } from 'react'
import { useQuery } from 'react-apollo'
import { useIntl, defineMessages, FormattedMessage } from 'react-intl'
import { Helmet, ExtensionPoint, useRuntime } from 'vtex.render-runtime'
import { Button } from 'vtex.styleguide'
import { usePWA } from 'vtex.store-resources/PWAContext'

// import { Analytics } from './components/Analytics'
import { OrderGroupContext } from './components/OrderGroupContext'
import withoutSSR from './components/WithoutSSR'
import ErrorMessage from './components/ErrorMessage'
import GET_ORDER_GROUP from './graphql/getOrderGroup.graphql'
import NotFound from './Icons/NotFound'
import Forbidden from './Icons/Forbidden'
import Skeleton from './Skeleton'
import { CurrencyContext } from './components/CurrencyContext'
import { orderGroupQuery as mockQuery } from './mocks/pickupAndDelivery'

interface OrderGroupData {
  orderGroup: OrderGroup
}

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

const OrderPlaced: FC = () => {
  const intl = useIntl()
  const runtime = useRuntime()
  const { settings = {} } = usePWA() || {}
  const [installDismissed, setInstallDismissed] = useState(false)
  const { data, loading, error } = useQuery<OrderGroupData>(GET_ORDER_GROUP, {
    variables: {
      orderGroup: runtime.query.og,
    },
  })

  // render loading skeleton if query is still loading
  if (loading) return <Skeleton />

  // forbidden error
  if (
    error?.message.includes('403') ||
    // 'any' needed because graphql error type doesn't have 'extensions' prop
    (error as any)?.extensions?.response?.status === 403
  ) {
    // if query errored display an error alert
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

  // not found error
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

  const { orderGroup }: { orderGroup: OrderGroup } = mockQuery as any // data
  const { promptOnCustomEvent } = settings

  return (
    <OrderGroupContext.Provider value={orderGroup}>
      <CurrencyContext.Provider
        value={orderGroup.orders[0].storePreferencesData.currencyCode}
      >
        <Helmet>
          <title>{intl.formatMessage(messages.title)}</title>
        </Helmet>

        <article className="pt9 sans-serif">
          {/* <Analytics eventList={orderGroup.analyticsData} /> */}

          <ExtensionPoint id="order-placed-top" orderGroup={orderGroup} />

          <header>
            <ExtensionPoint id="order-placed-confirmation" />
            <ExtensionPoint id="order-placed-notices" />
            <ExtensionPoint id="order-placed-summary" />
            <ExtensionPoint id="order-placed-bank-invoice" />
          </header>

          <div className="mv6 w-80-ns w-90 center">
            {orderGroup.orders.map((order, i, { length }) => (
              <Fragment key={order.orderId}>
                <ExtensionPoint id="order-info" order={order} />
                {i < length - 1 && (
                  <hr className="bg-muted-4 bt b--muted-4 mv9" />
                )}
              </Fragment>
            ))}

            {promptOnCustomEvent === 'checkout' && !installDismissed && (
              <ExtensionPoint
                id="promotion-banner"
                type="install"
                onDismiss={() => setInstallDismissed(true)}
              />
            )}
          </div>
        </article>
      </CurrencyContext.Provider>
    </OrderGroupContext.Provider>
  )
}

export default withoutSSR(OrderPlaced)
