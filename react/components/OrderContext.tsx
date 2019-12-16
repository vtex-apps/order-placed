import { createContext, useContext } from 'react'

export const OrderContext = createContext<Order>({} as Order)

export function useOrder() {
  return useContext(OrderContext)
}
