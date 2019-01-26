import { string, shape, number, arrayOf, object } from 'prop-types'

export const profileShape = shape({
  firstName: string.isRequired,
  lastName: string.isRequired,
  email: string.isRequired,
  document: string.isRequired,
  documentType: string.isRequired,
  phone: string.isRequired,
})

export const paymentShape = shape({
  group: string.isRequired,
  paymentSystem: string.isRequired,
  paymentSystemName: string.isRequired,
  lastDigits: string,
  value: number.isRequired,
  installments: number.isRequired,
  url: string,
  bankIssuedInvoiceIdentificationNumberFormatted: string,
  bankIssuedInvoiceBarCodeNumber: string,
  bankIssuedInvoiceBarCodePNG: string,
})

export const addressShape = shape({
  addressId: string.isRequired,
  addressType: string.isRequired,
  city: string.isRequired,
  complement: string,
  neighborhood: string.isRequired,
  number: string.isRequired,
  postalCode: string.isRequired,
  receiverName: string,
  state: string.isRequired,
  street: string.isRequired,
  country: string.isRequired,
})

export const parcelShape = shape({
  address: addressShape.isRequired,
  listPrice: number,
  price: number,
  pickupFriendlyName: string,
  seller: string,
  items: arrayOf(Object).isRequired,
  package: object,
  selectedSla: string.isRequired,
  selectedSlaObj: object.isRequired,
  slas: arrayOf(Object),
  shippingEstimate: string.isRequired,
  shippingEstimateDate: string,
  deliveryChannel: string.isRequired,
  selectedSlaType: string,
  deliveryIds: arrayOf(Object),
})
