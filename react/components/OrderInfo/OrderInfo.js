import React from 'react'
import PropTypes from 'prop-types'
import OrderHeader from './OrderHeader'
import CustumerInfo from './CustumerInfo'
import PaymentSummary from './PaymentSummary'
import ShippingInfo from './Shipping/ShippingInfo'
// import StorePickUpInfo from './StorePickUpInfo'
// import Summary from './Summary'

const OrderInfo = ({ data, profile }) => {
  return (
    <div className="mv6">
      <OrderHeader orderInfo={data} />
      <div className="bb b--muted-5">
        <CustumerInfo profile={profile} />
      </div>
      <div className="bb b--muted-5">
        <PaymentSummary paymentsData={data.paymentData.transactions[0].payments} />
      </div>

      <div className="bb b--muted-5">
        <ShippingInfo data={data} />
      </div>

      {/*
      {currOrder.items.filter((item) => (item.delivery === 'pickup')).length
        ? <StorePickUpInfo data={currOrder} />
        : null}

      <Summary data={currOrder} /> */}
    </div>
  )
}

OrderInfo.propTypes = {
  data: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

export default OrderInfo
