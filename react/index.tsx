import React, { FC, useState } from 'react'
import { useQuery } from 'react-apollo'
import { useIntl, defineMessages } from 'react-intl'
import { Helmet, ExtensionPoint, useRuntime } from 'vtex.render-runtime'
import { usePWA } from 'vtex.store-resources/PWAContext'

import { OrderGroupContext } from './components/OrderGroupContext'
import GET_ORDER_GROUP from './graphql/getOrderGroup.graphql'
import Skeleton from './Skeleton'
import { CurrencyContext } from './components/CurrencyContext'
// import { Analytics } from './Analytics'
import ForbiddenError from './components/Errors/ForbiddenError'
import InvalidError from './components/Errors/InvalidError'
// to load default css handle styles
import './styles.css'
import { orderGroupQuery } from './mocks/fiftyItemOrder'

interface OrderGroupData {
  orderGroup: OrderGroup
}

const messages = defineMessages({
  title: {
    id: 'store/page.title',
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
    return <ForbiddenError />
  }

  // not found error
  if (data?.orderGroup?.orders == null) {
    return <InvalidError />
  }

  const { orderGroup }: { orderGroup: OrderGroup } = orderGroupQuery as any // data
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

          <ExtensionPoint id="order-placed-header" />

          <div className="mv6 w-80-ns w-90 center">
            <ExtensionPoint id="order-list" />

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

export default OrderPlaced
