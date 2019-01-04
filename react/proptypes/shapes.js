import PropTypes from 'prop-types'

export const profileShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  document: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
})

export const paymentShape = PropTypes.shape({
  group: PropTypes.string.isRequired,
  paymentSystem: PropTypes.string.isRequired,
  lastDigits: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  installments: PropTypes.number.isRequired,
})

export const parcelShape = PropTypes.shape({
  address: PropTypes.object.isRequired,
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
