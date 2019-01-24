import PropTypes from 'prop-types'

export const profileShape = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  document: PropTypes.string.isRequired,
  documentType: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
})

export const paymentShape = PropTypes.shape({
  group: PropTypes.string.isRequired,
  paymentSystem: PropTypes.string.isRequired,
  paymentSystemName: PropTypes.string.isRequired,
  lastDigits: PropTypes.string,
  value: PropTypes.number.isRequired,
  installments: PropTypes.number.isRequired,
  url: PropTypes.string,
  bankIssuedInvoiceIdentificationNumberFormatted: PropTypes.string,
  bankIssuedInvoiceBarCodeNumber: PropTypes.string,
  bankIssuedInvoiceBarCodePNG: PropTypes.string,
})

export const addressShape = PropTypes.shape({
  addressId: PropTypes.string.isRequired,
  addressType: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  complement: PropTypes.string,
  neighborhood: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  receiverName: PropTypes.string,
  state: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
})

export const parcelShape = PropTypes.shape({
  address: addressShape.isRequired,
  listPrice: PropTypes.number,
  price: PropTypes.number,
  pickupFriendlyName: PropTypes.string,
  seller: PropTypes.string,
  items: PropTypes.arrayOf(Object).isRequired,
  package: PropTypes.object,
  selectedSla: PropTypes.string.isRequired,
  selectedSlaObj: PropTypes.object.isRequired,
  slas: PropTypes.arrayOf(Object),
  shippingEstimate: PropTypes.string.isRequired,
  shippingEstimateDate: PropTypes.string,
  deliveryChannel: PropTypes.string.isRequired,
  selectedSlaType: PropTypes.string,
  deliveryIds: PropTypes.arrayOf(Object),
})
