import parcelify from '@vtex/delivery-packages'

export const getTotalParcelsFromOrderGroup = (orderGroup: Order[]) => {
  const totalParcels: Parcel[] = orderGroup.reduce(
    (acc: Parcel[], currOrder: Order) => [...acc, ...parcelify(currOrder)],
    []
  )
  const totalDeliveries: Parcel[] = totalParcels.filter(
    (deliveryPackage: Parcel) => deliveryPackage.deliveryChannel === 'delivery'
  )
  const totalPickUps: Parcel[] = totalParcels.filter(
    (pickupPackage: Parcel) =>
      pickupPackage.selectedSlaType === 'pickup-in-point'
  )
  const totalTakeAways: Parcel[] = totalParcels.filter(
    (takeawayPackage: Parcel) => takeawayPackage.selectedSlaType === 'take-away'
  )

  return {
    totalDeliveries,
    totalParcels,
    totalPickUps,
    totalTakeAways,
  }
}

export const getPickUpPackagesFromParcels = (parcels: Parcel[]) =>
  parcels.filter(
    (pickupPackage: Parcel) =>
      pickupPackage.selectedSlaType === 'pickup-in-point'
  )

export const getDeliveryPackagesFromParcels = (parcels: Parcel[]) =>
  parcels.filter(
    (deliveryPackage: Parcel) => deliveryPackage.deliveryChannel === 'delivery'
  )

export const getTakeAwayPackagesFromParcels = (parcels: Parcel[]) =>
  parcels.filter(
    (takeawayPackage: Parcel) => takeawayPackage.selectedSlaType === 'take-away'
  )

export const getPaymentGroupFromOrder = (order: Order) => ({
  barCodeNumber:
    order.paymentData.transactions[0].payments[0]
      .bankIssuedInvoiceBarCodeNumber,
  barCodePNG:
    order.paymentData.transactions[0].payments[0].bankIssuedInvoiceBarCodePNG,
  dueDate: order.paymentData.transactions[0].payments[0].dueDate,
  paymentGroup: order.paymentData.transactions[0].payments[0].group,
  paymentSystemName:
    order.paymentData.transactions[0].payments[0].paymentSystemName,
  url: order.paymentData.transactions[0].payments[0].url,
  value: order.paymentData.transactions[0].payments[0].value,
})

export interface PaymentGroupInfo {
  barCodeNumber?: string
  barCodePNG?: string
  dueDate?: string
  paymentGroup: string
  paymentSystemName: string
  url?: string
  value: number
}
