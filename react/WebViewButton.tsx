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

    setIsWebView(detectWebView())
  }, [])

  const handleClick = () => {
    try {
      window.location.href = 'auchan://'
    } catch (e) {
      console.error('Deep link failed', e)
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
