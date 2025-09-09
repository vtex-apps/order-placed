import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['webViewButton']

const WebViewButton = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [isWebView, setIsWebView] = useState<boolean | null>(null)

  useEffect(() => {
    const detectWebView = () => {
      const ua = navigator.userAgent || navigator.vendor || ''
      const isIOS = /iPhone|iPod|iPad/i.test(ua)
      const isAndroid = /Android/i.test(ua)
      const androidWebView = isAndroid && /; wv\)|Version\/[\d.]+/i.test(ua)
      const iosWebView = isIOS && !/Safari/i.test(ua)
      const inAppBrowser =
        /FBAN|FBAV|Instagram|Twitter|Line|Snapchat|WeChat|Messenger/i.test(ua)
      return androidWebView || iosWebView || inAppBrowser
    }

    const webView = detectWebView()
    setIsWebView(webView)

    if (webView) {
      const logoLink = document.querySelector<HTMLAnchorElement>(
        '.vtex-store-components-3-x-logoLink--mobileLogo'
      )
      if (logoLink) {
        logoLink.addEventListener('click', e => e.preventDefault())
      }
    }
  }, [])

  const handleClick = () => {
    try {
      window.location.href = `${window.location.origin}/mobile_app_redirection`
    } catch (e) {
      console.error('Redirect failed', e)
    }
  }

  return (
    <div>
      {isWebView === true && (
        <div className="mt6">
          <button
            onClick={handleClick}
            className={`${handles.webViewButton} bg-blue white pa3 br2 mt4`}
          >
            CONTINUA CUMPARATURILE
          </button>
        </div>
      )}
    </div>
  )
}

export default WebViewButton
