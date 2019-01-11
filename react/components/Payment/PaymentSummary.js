import React from 'react'
import PropTypes from 'prop-types'
import PaymentMethod from './PaymentMethod'
import { paymentShape } from '../../shapes'

const PaymentSummary = ({ paymentsData }) => (
  paymentsData.map((payment, index) => (
    <div key={index} className="flex flex-column pb6">
      <PaymentMethod payment={payment} />
    </div>
  ))
)

PaymentSummary.propTypes = {
  paymentsData: PropTypes.arrayOf(paymentShape).isRequired,
}

export default PaymentSummary
