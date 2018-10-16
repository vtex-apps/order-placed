import axios from 'axios'
import { parse as parseCookie } from 'cookie'

export function getOrderGroup({ ioContext, orderGroup, cookie }) {
  const parsedCookie = parseCookie(cookie)

  return axios({
    url: `http://${
      ioContext.account
    }.vtexcommercestable.com.br/api/checkout/pub/orders/order-group/${orderGroup}`,
    method: 'get',
    headers: {
      Authorization: `${ioContext.authToken}`,
      'Proxy-Authorization': ioContext.authToken,
      VtexIdclientAutCookie: parsedCookie.VtexIdclientAutCookie,
    },
  }).then(({ data }) => data)
}

export function getOrder({ ioContext, orderId, cookie }) {
  const parsedCookie = parseCookie(cookie)

  return axios({
    url: `http://${
      ioContext.account
    }.vtexcommercestable.com.br/api/checkout/pub/orders/${orderId}`,
    method: 'get',
    headers: {
      Authorization: `${ioContext.authToken}`,
      'Proxy-Authorization': ioContext.authToken,
      VtexIdclientAutCookie: parsedCookie.VtexIdclientAutCookie,
    },
  }).then(({ data }) => data)
}
