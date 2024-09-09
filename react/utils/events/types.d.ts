declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export interface DataLayerObject {
  event?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any // This allows for any other properties
}
