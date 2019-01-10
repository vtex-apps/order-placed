import React from 'react'
import PropTypes from 'prop-types'
import { IconPlusLines } from 'vtex.styleguide'
import PaymentMethod from './PaymentMethod'
import { paymentShape } from '../../shapes'

const PaymentSummary = ({ paymentsData }) => (
  <div className="flex flex-column flex-row-ns pb6">
    {
      paymentsData.map((payment, index) => {
        return index > 0 ? (
          <div key={index} className="flex items-center-ns flex-column flex-row-ns">
            <div className="mr7-ns mt7 mt0-ns c-muted-3">
              <IconPlusLines />
            </div>
            <PaymentMethod payment={payment} />
          </div>
        ) : (<PaymentMethod payment={payment} key={index} />)
      })
    }
  </div>
)

PaymentSummary.propTypes = {
  paymentsData: PropTypes.arrayOf(paymentShape).isRequired,
}

export default PaymentSummary
