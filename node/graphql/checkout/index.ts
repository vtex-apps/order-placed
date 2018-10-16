import { ColossusContext } from 'colossus'
import { getOrderGroup, getOrder } from './api'

export const Query = {
  async orderGroup(_, data, { vtex: ioContext, request: { headers: { cookie } }}: ColossusContext) {
    if (!data.orderGroup) {
      throw 400
    }

    const orderGroup = await getOrderGroup({
      ioContext,
      orderGroup: data.orderGroup,
      cookie: cookie,
    })

    return orderGroup
  },

  async order(_, data, { vtex: ioContext, request: { headers: { cookie } }}: ColossusContext) {
    if (!data.orderId) {
      throw 400
    }

    const order = await getOrder({
      ioContext,
      orderId: data.orderId,
      cookie: cookie,
    })

    return order
  }
}
