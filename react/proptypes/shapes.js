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
