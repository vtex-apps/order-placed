import React from 'react'
import PropTypes from 'prop-types'
import parcelify from '@vtex/delivery-packages'
import OrderHeader from './OrderHeader'
import CustumerInfo from './CustumerInfo'
import PaymentSummary from './Payment/PaymentSummary'
import Shipping from './Shipping/Shipping'
import OrderTotal from './OrderTotal'
import StorePickUp from './StorePickUp/StorePickUp'

import { profileShape } from '../../proptypes/shapes'

const OrderInfo = ({ data, profile, currency }) => {
  const parcels = parcelify(data)
  return (
    <div className="mv6 w-80-ns w-90 center">
      <OrderHeader orderInfo={data} />
      <div className="bb b--muted-5">
        <CustumerInfo profile={profile} />
      </div>
      <div className="bb b--muted-5">
        <PaymentSummary paymentsData={data.paymentData.transactions[0].payments} />
      </div>
      <div className="bb b--muted-5">
        <Shipping data={parcels} currency={currency} />
      </div>
      <div className="bb b--muted-5">
        <StorePickUp data={parcels} currency={currency} />
      </div>
      <OrderTotal
        items={data.items}
        currency={data.storePreferencesData.currencyCode}
        totals={data.totals}
        orderValue={data.value}
      />
    </div>
  )
}

OrderInfo.propTypes = {
  data: PropTypes.object.isRequired,
  profile: profileShape.isRequired,
  currency: PropTypes.string.isRequired,
}

export default OrderInfo
