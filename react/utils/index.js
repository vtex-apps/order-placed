import parcelify from '@vtex/delivery-packages'

export const getTotalParcelsFromOrderGroup = orderGroup => {
  const totalParcels = orderGroup.reduce(
    (acc, currOrder) => [...acc, ...parcelify(currOrder)],
    []
  )
  const totalDeliveries = totalParcels.filter(
    deliveryPackage => deliveryPackage.deliveryChannel === 'delivery'
  )
  const totalPickUps = totalParcels.filter(
    pickupPackage => pickupPackage.deliveryChannel === 'pickup-in-point'
  )

  return { totalParcels, totalDeliveries, totalPickUps }
}

export const getPickUpPackagesFromParcels = parcels =>
  parcels.filter(
    pickupPackage => pickupPackage.deliveryChannel === 'pickup-in-point'
  )

export const getDeliveryPackagesFromParcels = parcels =>
  parcels.filter(
    deliveryPackage => deliveryPackage.deliveryChannel === 'delivery'
  )

export const getTakeAwayPackagesFromParcels = parcels =>
  parcels.filter(
    takeawayPackage => takeawayPackage.deliveryChannel === 'takeaway'
  )

export const getPaymentGroupFromOrder = order => ({
  paymentGroup: order.paymentData.transactions[0].payments[0].group,
  value: order.paymentData.transactions[0].payments[0].value,
  dueDate: order.paymentData.transactions[0].payments[0].dueDate,
  url: order.paymentData.transactions[0].payments[0].url,
  barCodeNumber:
    order.paymentData.transactions[0].payments[0]
      .bankIssuedInvoiceBarCodeNumber,
  barCodePNG:
    order.paymentData.transactions[0].payments[0].bankIssuedInvoiceBarCodePNG,
})
