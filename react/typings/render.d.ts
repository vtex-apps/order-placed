/* Typings for `render-runtime` */
declare module 'vtex.render-runtime' {
  import { Component, ReactElement } from 'react'

  export interface RenderContextProps {
    runtime: {
      account: string
    }
  }

  export const Link: ReactElement
  export const NoSSR: any
  export const RenderContextConsumer: ReactElement
  export const canUseDOM: boolean
  export const withRuntimeContext: any
  export const Helmet: any
  export const ExtensionPoint: any
}
