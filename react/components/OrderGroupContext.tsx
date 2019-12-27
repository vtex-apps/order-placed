import { createContext, useContext } from 'react'

export const OrderGroupContext = createContext({} as OrderGroup)

export function useOrderGroup() {
  return useContext(OrderGroupContext)
}
