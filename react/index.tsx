import React, { FC, useState } from 'react'
import { useQuery } from 'react-apollo'
import { useIntl, defineMessages } from 'react-intl'
import { Helmet, ExtensionPoint, useRuntime } from 'vtex.render-runtime'
import { usePWA } from 'vtex.store-resources/PWAContext'
import { useCssHandles } from 'vtex.css-handles'

import { OrderGroupContext } from './components/OrderGroupContext'
import { CurrencyContext } from './components/CurrencyContext'
import ForbiddenError from './components/Errors/ForbiddenError'
import InvalidError from './components/Errors/InvalidError'
import OrderList from './components/OrderList'
import Skeleton from './Skeleton'
import Analytics from './Analytics'
import GET_ORDER_GROUP from './graphql/getOrderGroup.graphql'

// to load default css handle styles
import './styles.css'

interface OrderGroupData {
  orderGroup: OrderGroup
}

const messages = defineMessages({
  title: { id: 'store/page.title', defaultMessage: '' },
})

const CSS_HANDLES = ['orderPlacedWrapper', 'orderPlacedMainWrapper']

const OrderPlaced: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { formatMessage } = useIntl()
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
    return <ForbiddenError />
  }

  // not found error
  if (data?.orderGroup?.orders == null) {
    return <InvalidError />
  }

  const { orderGroup }: { orderGroup: OrderGroup } = data
  const title = runtime.route.title || formatMessage(messages.title)

  const { promptOnCustomEvent } = settings

  return (
    <OrderGroupContext.Provider value={orderGroup}>
      <CurrencyContext.Provider
        value={orderGroup.orders[0].storePreferencesData.currencyCode}
      >
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <div className={`${handles.orderPlacedWrapper} pt9 sans-serif`}>
          <Analytics eventList={orderGroup.analyticsData} />

          <ExtensionPoint id="op-header" />

          <div
            role="main"
            className={`${handles.orderPlacedMainWrapper} mv6 w-80-ns w-90 center`}
          >
            <OrderList />

            {promptOnCustomEvent === 'checkout' && !installDismissed && (
              <ExtensionPoint
                id="promotion-banner"
                type="install"
                onDismiss={() => setInstallDismissed(true)}
              />
            )}
          </div>

          <ExtensionPoint id="op-footer" />
        </div>
      </CurrencyContext.Provider>
    </OrderGroupContext.Provider>
  )
}

export default OrderPlaced
