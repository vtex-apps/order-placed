/* eslint-disable no-console */

import { getCookieValue } from '.'

class MobileAnalytics {
  public endpoint: string
  public buffer: any[]
  public flushInterval: number
  public retries: number
  public maxRetries: number
  constructor(flushInterval = 3000, maxRetries = 3, account = 'thefoschini') {
    this.endpoint =
      account === 'thefoschini'
        ? 'https://store-api.www.bash.com/custom-api/analytics/collect'
        : 'https://store-api.staging.tfglabs.dev/custom-api/analytics/collect'
    this.buffer = []
    this.flushInterval = flushInterval
    this.retries = 0
    this.maxRetries = maxRetries
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

  private async flush() {
    if (this.buffer.length === 0 || this.retries >= this.maxRetries) {
      return
    }

    const eventsToSend = [...this.buffer]
    this.buffer = []

    const cookieData = this.getAppAnalyticsCookieData()

    const body = JSON.stringify({
      ...cookieData,
      events: eventsToSend,
    })

    // If there is no app instance id, don't send the events
    // It will build up errors on store-api.
    if (this.endpoint && !cookieData.appInstanceId) {
      console.warn('📱 Mobile Analytics: No app instance id found')
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
        console.info('📱 Mobile Analytics: Events sent', eventsToSend)
        this.retries = 0
      }
    } catch (error) {
      // If an error occurs, re-add the events back to the buffer

      if (this.endpoint) {
        console.info('📱 Mobile Analytics: Attempted to send ', {
          retries: this.retries,
          body: { ...cookieData, events: eventsToSend },
        })
        this.buffer.push(...eventsToSend)
        this.retries += 1
      }
    }
  }
}

export default MobileAnalytics
