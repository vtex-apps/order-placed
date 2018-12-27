import React from 'react'
import PropTypes from 'prop-types'
import OrderHeader from './OrderHeader'
import CustumerInfo from './CustumerInfo'
import PaymentSummary from './Payment/PaymentSummary'
import Shipping from './Shipping/Shipping'
import OrderTotal from './OrderTotal'
import StorePickUp from './StorePickUp/StorePickUp'

const OrderInfo = ({ data, profile }) => (
  <div className="mv6 w-80-ns w-90 center">
    <OrderHeader orderInfo={data} />
    <div className="bb b--muted-5">
      <CustumerInfo profile={profile} />
    </div>
    <div className="bb b--muted-5">
      <PaymentSummary paymentsData={data.paymentData.transactions[0].payments} />
    </div>
    <div className="bb b--muted-5">
      <Shipping data={data} />
    </div>
    <div className="bb b--muted-5">
      <StorePickUp data={data} />
    </div>
    <OrderTotal items={data.items} />
  </div>
)

OrderInfo.propTypes = {
  data: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

export default OrderInfo
