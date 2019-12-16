import { createContext, useContext } from 'react'

export const OrderGroupContext = createContext<OrderGroup>({} as OrderGroup)

export function useOrderGroup() {
  return useContext(OrderGroupContext)
}
