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
      const cleanupWebViewElements = () => {
        const logoLink = document.querySelector<HTMLAnchorElement>(
          '.vtex-store-components-3-x-logoLink--mobileLogo'
        )
        const logoContainer = document.querySelector<HTMLElement>(
          '.vtex-flex-layout-0-x-flexCol--logoMobile'
        )

        if (logoLink) {
          logoLink.removeAttribute('href')
        }

        if (logoContainer) {
          logoContainer.style.pointerEvents = 'none'
        }

        const elementsToRemove = document.querySelectorAll<HTMLElement>(
          '[class*="headerMobile"], [class*="footerMobile"], [class*="headerDesktop"], [class*="footerLayout"]'
        )

        elementsToRemove.forEach(element => {
          element.remove()
        })
      }

      cleanupWebViewElements()

      const observer = new MutationObserver((_, obs) => {
        const logoLink = document.querySelector<HTMLAnchorElement>(
          '.vtex-store-components-3-x-logoLink--mobileLogo'
        )
        if (logoLink) {
          cleanupWebViewElements()
          obs.disconnect()
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })

      return () => observer.disconnect()
    }

    return undefined
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
