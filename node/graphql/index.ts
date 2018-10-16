import { Query as CheckoutQueries } from './checkout'

export const resolvers = {
  Query: {
    ...CheckoutQueries,
  },
}
