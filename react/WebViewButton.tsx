import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['webViewButton']

const WebViewButton = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const [isWebView, setIsWebView] = useState<boolean | null>(null)

  useEffect(() => {
    const detectWebView = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      const isMobile = /android|iphone|ipad|ipod/i.test(userAgent)

      const isWebView =
        /FBAN|FBAV|Instagram|Twitter|Line|Snapchat|WeChat|Messenger/i.test(userAgent) ||
        ((navigator as any).standalone !== undefined && (navigator as any).standalone === false)

      return isMobile && isWebView
    }

    const webViewDetected = detectWebView()
    setIsWebView(webViewDetected)

    if (webViewDetected) {
      document.cookie = 'mobile_webview=true; path=/; Secure; SameSite=Lax'
    }
  }, [])

  return (
    <div>
      {isWebView === true && (
        <div className={`mt6`}>
          <a
            href="auchan://"
            className={`${handles.webViewButton} bg-blue white pa3 br2 mt4`}
          >
            CONTINUA CUMPARATURILE
          </a>
        </div>
      )}
    </div>
  )
}

export default WebViewButton
