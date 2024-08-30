/* eslint-disable no-console */

import MobileAnalytics from './MobileAnalytics'
import { DataLayerObject } from './types'

export function getCookieValue(name: string) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    const lastPart = parts.pop()
    if (lastPart) {
      return lastPart.split(';').shift()
    }
  }

  return undefined
}

const decodeBase64 = (str: string) => {
  const binaryString = atob(str)
  const len = binaryString.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}

const getUserId = (
  account: 'thefoschini' | 'thefoschiniqa' = 'thefoschini'
) => {
  const vtexToken = getCookieValue(`VtexIdclientAutCookie_${account}`)

  if (!vtexToken) return null

  const parts = String(vtexToken).split('.')
  const payload = decodeBase64(parts[1])
  const data = JSON.parse(payload.toString())

  const { userId, sub } = data

  return { userId, sub }
}

/**
 * getCustomerItems
 * @description Get the customer items from ga_data cookie
 * @returns array of items for Google ecommerce events
 */
const getCustomerItems = () => {
  const customerItems = getCookieValue('ga_data')
  if (!customerItems) return []

  try {
    const gaItems = JSON.parse(customerItems)
    return gaItems.items || []
  } catch (e) {
    console.error('Could not parse items')
    console.error({ customerItems, e })
    return []
  }
}

const pushToDataLayer = (
  data: DataLayerObject,
  ecommerce: boolean | undefined = false
) => {
  if (typeof window === 'undefined') return

  let forDataLayer: DataLayerObject = { event: data.event }

  if (ecommerce && !data.ecommerce) {
    delete data.event
    if (data.items) {
      forDataLayer.ecommerce = { impressions: data.items }
      delete data.items
      forDataLayer.ecommerce = { ...forDataLayer.ecommerce, ...data }
    } else {
      forDataLayer.ecommerce = data
    }

    if (forDataLayer.ecommerce.event) delete forDataLayer.ecommerce.event
  } else {
    forDataLayer = data
  }
  if (forDataLayer?.ecommerce) {
    window.dataLayer?.push({ ecommerce: null })
  }

  // Identify user as headless on GTM.
  forDataLayer.is_headless = true

  window.dataLayer?.push(forDataLayer)
}

export const pushPayEvent = (
  eventData: DataLayerObject,
  account: 'thefoschini' | 'thefoschiniqa' = 'thefoschini'
) => {
  if (!eventData) return
  const analytics = new MobileAnalytics()

  const isApp = document?.cookie.includes('is_app=true')
  let transformedEventData: { [key: string]: string | object } = {
    eventCategory: 'Payments',
    eventAction: eventData.event_action?.replace(/\s/g, '_'),
    eventLabel: eventData.event_label || 'Pay_Event',
    eventDescription: eventData.event_description || 'Pay Event',
  }

  if (eventData.event_detail) {
    transformedEventData.eventDescription = JSON.stringify(
      eventData.event_detail
    )
    if (eventData.event_detail?.error) {
      transformedEventData.eventDescription = JSON.stringify(
        eventData.event_detail.error
      )
    }
  }

  const items = getCustomerItems()

  // For E-commerce event.
  if (eventData.event && eventData.event !== 'gaEvent') {
    transformedEventData = {
      event: eventData.event,
      ecommerce: {
        ...eventData,
        currency: 'ZAR',
        items,
        user_id: getUserId(account)?.userId || undefined,
      },
    }
  } else {
    transformedEventData.event = 'gaEvent'
  }

  if (isApp) {
    const eventForMobile = {
      name: transformedEventData.event,
      params: {
        ...((transformedEventData.ecommerce as object) || {}),
        ...Object.keys(transformedEventData).reduce((acc, item) => {
          if (item !== 'user_id' && item !== 'event' && item !== 'ecommerce') {
            return { ...acc, [item]: transformedEventData[item] }
          }
          return acc
        }, {}),
      },
    }

    analytics.trackEvent(eventForMobile)

    // If we're on app, don't send the GTM event as well.
    if (isApp) return
  }

  pushToDataLayer({
    event: eventData.event ?? 'gaEvent',
    platform: 'Web',
    ...transformedEventData,
  })
}
