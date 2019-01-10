import parcelify from '@vtex/delivery-packages'

export const getTotalParcelsFromOrderGroup = (orderGroup) => {
  const totalParcels = orderGroup.reduce((acc, currOrder) => ([...acc, ...parcelify(currOrder)]), [])
  const totalDeliveries = totalParcels.filter((deliveryPackage) => deliveryPackage.deliveryChannel === 'delivery')
  const totalPickUps = totalParcels.filter((pickupPackage) => pickupPackage.deliveryChannel === 'pickup-in-point')

  return { totalParcels, totalDeliveries, totalPickUps }
}

export const getPickUpPackagesFromParcels = (parcels) =>
  parcels.filter((pickupPackage) => pickupPackage.deliveryChannel === 'pickup-in-point')

export const getDeliveryPackagesFromParcels = (parcels) =>
  parcels.filter((deliveryPackage) => deliveryPackage.deliveryChannel === 'delivery')

export const getTakeAwayPackagesFromParcels = (parcels) =>
  parcels.filter((takeawayPackage) => takeawayPackage.deliveryChannel === 'takeaway')
