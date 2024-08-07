import { accountName, baseApi, baseApiQA } from './constants'

interface Endpoints {
  clientsApiUrl: string
}

export const getEndpoints = (account: string): Endpoints => {
  const apiUrl = account === accountName ? baseApi : baseApiQA
  const masterData = `${apiUrl}masterdata/`

  return {
    clientsApiUrl: `${masterData}clients`,
  }
}

export function hasFurnitureDelivery(orderGroup: OrderGroup): boolean {
  if (
    !orderGroup ||
    !orderGroup.orders ||
    orderGroup.orders.length === 0 ||
    orderGroup.orders[0].deliveryParcels.length === 0
  ) {
    return false;
  }

  const orders = orderGroup.orders;

  for (let order of orders) {
    if (
      order.deliveryParcels &&
      order.deliveryParcels.some(parcel => parcel && parcel.selectedSla === 'Furniture delivery')
    ) {
      return true;
    }
  }

  return false;
}

export function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop();
    if (cookieValue) {
      return cookieValue.split(';').shift();
    }
  }
  return undefined;
}
