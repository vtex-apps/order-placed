import { createContext, useContext } from 'react'
// import { useQuery } from 'react-apollo'

// import GET_ORDER_GROUP from '../graphql/getOrderGroup.graphql'
// import WithoutSSR from './WithoutSSR'

export const OrderGroupContext = createContext<OrderGroup>({} as OrderGroup)

export function useOrderGroup() {
  return {
    orderGroup: useContext(OrderGroupContext),
  }
}
