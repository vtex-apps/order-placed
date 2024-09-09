import React, { FC, useEffect, useState } from 'react'
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
import { useGetCustomerEmail } from './hooks/useGetCustomerEmail'
import GET_ORDER_GROUP from './graphql/getOrderGroup.graphql'
import type { NoticeType } from './hooks/useGetNotices'
import useGetNotices from './hooks/useGetNotices'
import Notice from './components/Notice'
import './styles.css'
import { getCookie } from './utils/functions'
import { gaMeasurementId } from './utils'

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
  const [isApp, setIsApp] = useState(false)

  const { data, loading, error } = useQuery<OrderGroupData>(GET_ORDER_GROUP, {
    variables: {
      orderGroup: runtime.query.og,
    },
  })

  const handleGtagInitialization = () => {
    if (typeof window !== 'undefined' && window.dataLayer && !window.gtag) {
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', gaMeasurementId, {
        user_properties: {
          platform_type: document.cookie.includes('is_app=true')
            ? 'App'
            : 'Web',
        },
      })
    }

    window.dispatchEvent(new Event('gtag_loaded'))
  }

  useEffect(() => {
    const isAppCookie = getCookie('is_app')
    setIsApp(!!isAppCookie)
  }, [])

  // Google Analytics Setup
  useEffect(() => {
    handleGtagInitialization()
    window.addEventListener('gtm.js', handleGtagInitialization)

    return () => {
      window.removeEventListener('gtm.js', handleGtagInitialization)
    }
  }, [])

  const { customerEmail, customerEmailLoading } = useGetCustomerEmail(
    data?.orderGroup.orders[0].clientProfileData.email
  )

  const notices = useGetNotices()

  // render loading skeleton if query is still loading
  if (loading || customerEmailLoading) return <Skeleton />

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

  const { orderGroup }: { orderGroup: OrderGroup } = {
    ...data,
  }

  orderGroup.orders[0].clientProfileData.customerEmail = customerEmail

  const { promptOnCustomEvent } = settings

  const overallNotice = notices.find(
    (notice: NoticeType) => notice.slotName === 'ORDER_COMPLETE_OVERALL'
  )

  return (
    <OrderGroupContext.Provider value={orderGroup}>
      <CurrencyContext.Provider
        value={orderGroup.orders[0].storePreferencesData.currencyCode}
      >
        <Helmet>
          <title>{formatMessage(messages.title)}</title>
        </Helmet>

        <div className={`${handles.orderPlacedWrapper} pt9 sans-serif`}>
          <Analytics eventList={orderGroup.analyticsData} />

          <ExtensionPoint id="op-header" />

          <div
            role="main"
            className={`${handles.orderPlacedMainWrapper} mv6 w-80-ns w-90 center`}
          >
            {overallNotice && (
              <Notice level={overallNotice.level}>
                {overallNotice.content}
              </Notice>
            )}

            <OrderList />

            {promptOnCustomEvent === 'checkout' && !installDismissed && (
              <ExtensionPoint
                id="promotion-banner"
                type="install"
                onDismiss={() => setInstallDismissed(true)}
              />
            )}
          </div>

          {!isApp && <ExtensionPoint id="op-footer" />}
        </div>
      </CurrencyContext.Provider>
    </OrderGroupContext.Provider>
  )
}

export default OrderPlaced
