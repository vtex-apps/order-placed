import { createContext, useContext } from 'react'

export const OrderContext = createContext({} as Order)

export function useOrder() {
  return useContext(OrderContext)
}
