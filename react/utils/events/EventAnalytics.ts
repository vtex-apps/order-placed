/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { getCookieValue } from '.'
import { gaMeasurementId } from '../constants'

class EventAnalytics {
  public endpoint: string
  public buffer: any[]
  public flushInterval: number
  public retries: number
  public maxRetries: number
  public clientId?: string
  public sessionId?: string
  private isApp: boolean
  constructor(flushInterval = 3000, maxRetries = 3, account = 'thefoschini') {
    this.endpoint =
      account === 'thefoschini'
        ? 'https://store-api.www.bash.com/custom-api/analytics/collect'
        : 'https://store-api.staging.tfglabs.dev/custom-api/analytics/collect'
    this.buffer = []
    this.flushInterval = flushInterval
    this.retries = 0
    this.maxRetries = maxRetries
    this.isApp = getCookieValue('is_app') === 'true'

    // Start the interval to periodically send the buffered events
    setInterval(() => this.flush(), this.flushInterval)
  }

  public trackEvent(event: any) {
    this.buffer.push(event)
    if (this.buffer.length === 1) {
      this.flush()
    }
  }

  private getAppAnalyticsCookieData() {
    if (typeof document === 'undefined') {
      return {}
    }

    const cookieData = getCookieValue('app_analytics_data')

    if (!cookieData) return {}

    try {
      // Sometimes we get the cookie with single quotes.
      if (cookieData.startsWith("'") && cookieData.endsWith("'")) {
        const sanitizedCookieData = cookieData.slice(1, -1)
        return JSON.parse(sanitizedCookieData)
      }

      return JSON.parse(cookieData)
    } catch (e) {
      console.error(`Error parsing app_analytics_data cookie ${e}`)
      return {}
    }
  }

  private async getWebTrackingConfig() {
    // Platform is App
    if (this.isApp) {
      return {}
    }

    if (typeof window.gtag !== 'function') {
      console.warn('🕸️ Web Analytics: GTM is not ready / configured.')
      return {}
    }

    const clientIdPromise = new Promise<void>((resolve) => {
      window.gtag('get', gaMeasurementId, 'client_id', (id: string) => {
        this.clientId = id
        resolve()
      })
    })

    const sessionIdPromise = new Promise<void>((resolve) => {
      window.gtag('get', gaMeasurementId, 'session_id', (id: string) => {
        this.sessionId = id
        resolve()
      })
    })

    // Wait for both clientId and sessionId to be retrieved
    await Promise.all([clientIdPromise, sessionIdPromise])

    return {
      platform: 'Web',
      clientId: this.clientId,
      sessionId: this.sessionId,
      feature_flag_parameters: ['is_bash_pay'],
    }
  }

  private async flush() {
    if (this.buffer.length === 0 || this.retries >= this.maxRetries) {
      return
    }

    const eventsToSend = [...this.buffer]
    this.buffer = []

    const cookieData = this.getAppAnalyticsCookieData()

    const webData = await this.getWebTrackingConfig()

    const body = JSON.stringify({
      ...cookieData,
      ...webData,
      events: eventsToSend,
    })

    console.info({ webData })

    // For App, there must be an app instance id
    if (this.isApp && !cookieData.appInstanceId) {
      console.warn('📱 Mobile Analytics: No app instance id found')
      return
    }
    // For Web, there must be a client id
    if (!this.isApp && this.endpoint && !this.clientId) {
      console.warn('🕸️ Web Analytics: No client id found')
      return
    }

    try {
      if (this.endpoint) {
        const response = await fetch(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body,
        })

        if (!response.ok) {
          // If the request fails, re-add the events back to the buffer
          this.retries += 1
          this.buffer.push(...eventsToSend)
        } else {
          this.retries = 0
        }
      } else {
        console.info('📈 Events Analytics: Events sent', eventsToSend)
        this.retries = 0
      }
    } catch (error) {
      // If an error occurs, re-add the events back to the buffer

      if (this.endpoint) {
        console.info('📈 Events Analytics: Attempted to send ', {
          retries: this.retries,
          body: {
            ...cookieData,
            ...webData,
            events: eventsToSend,
          },
        })
        this.buffer.push(...eventsToSend)
        this.retries += 1
      }
    }
  }
}

export default EventAnalytics
