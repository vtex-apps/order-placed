import { createContext, useContext } from 'react'

export const CurrencyContext = createContext<string>('BRL')

export function useCurrency() {
  return useContext(CurrencyContext)
}
