import { accountName, baseApi, baseApiQA } from './constants'

interface Endpoints {
  clientsApiUrl: string
}

export const getEndpoints = (account: string): Endpoints => {
  const apiUrl = account === accountName ? baseApi : baseApiQA
  const masterData = `${apiUrl}masterdata/`

  return {
    clientsApiUrl: `${masterData}clients`,
  }
}

interface CheckFurnitureProps {
  orderValue: number
  shippingFee: number | string
}

export const hasFurniture = ({
  orderValue,
  shippingFee,
}: CheckFurnitureProps) => {
  // If order > R500 and there’s shipping fee === furniture
  // If it’s not free and/or R50 === furniture
  // R500 in cents = 50000
  if (orderValue > 50000 && shippingFee) return true
  return false
}
