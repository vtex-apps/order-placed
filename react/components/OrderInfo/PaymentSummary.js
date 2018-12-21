import React from 'react'
import PropTypes from 'prop-types'
import PaymentMethod from './PaymentMethod'
import { IconPlusLines } from 'vtex.styleguide'

const PaymentSummary = ({ paymentsData }) => {
  return (
    <div className="flex flex-column flex-row-ns pb6">
      {
        paymentsData.map((payment, index) => {
          return index > 0 ? (
            <div key={index} className="flex items-center-ns flex-column flex-row-ns">
              <div className="mr7-ns mt7 mt0-ns c-muted-3">
                <IconPlusLines />
              </div>
              <PaymentMethod pay={payment} key={index} />
            </div>
          ) : (<PaymentMethod pay={payment} key={index} />)
        })
      }
    </div>
  )
}

PaymentSummary.propTypes = {
  paymentsData: PropTypes.array.isRequired,
}

export default PaymentSummary
