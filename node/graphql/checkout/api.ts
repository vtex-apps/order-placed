import axios from 'axios'

export function getOrderGroup({ ioContext, orderGroup, cookie }) {
  const cookies = filterWhitelistedCookies({ account: ioContext.account, cookie })

  return axios({
    url: `http://${
      ioContext.account
    }.vtexcommercestable.com.br/api/checkout/pub/orders/order-group/${orderGroup}`,
    method: 'get',
    headers: {
      'Proxy-Authorization': ioContext.authToken,
      Cookie: cookies,
    },
  }).then(({ data }) => data)
}

export function getOrder({ ioContext, orderId, cookie }) {
  const cookies = filterWhitelistedCookies({ account: ioContext.account, cookie })

  return axios({
    url: `http://${
      ioContext.account
    }.vtexcommercestable.com.br/api/checkout/pub/orders/${orderId}`,
    method: 'get',
    headers: {
      'Proxy-Authorization': ioContext.authToken,
      'Cookie': cookies
    },
  }).then(({ data }) => data)
}

function filterWhitelistedCookies({ account, cookie }){
  const allowedCookies = [
    `VtexIdclientAutCookie_${account}`,
    'CheckoutDataAccess'
  ]

  return cookie.split(';').filter(currentCookie => {
    const [key] = currentCookie.split('=')
    return allowedCookies.indexOf(key.trim()) !== -1
  }).join(';')
}
