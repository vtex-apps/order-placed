import React from 'react'
import PropTypes from 'prop-types'
import parcelify from '@vtex/delivery-packages'
import OrderHeader from './OrderHeader'
import CustumerInfo from './CustumerInfo'
import PaymentSummary from '../Payment/PaymentSummary'
import Shipping from '../Shipping/Shipping'
import OrderTotal from './OrderTotal'
import OrderSummary from './OrderSummary'
import StorePickUp from '../StorePickUp/StorePickUp'
import OrderSplitNotice from './OrderSplitNotice'

import { profileShape } from '../../proptypes/shapes'

const OrderInfo = ({ data, profile }) => {
  const parcels = parcelify(data)
  const delivery = parcels.filter((deliveryPackage) => deliveryPackage.deliveryChannel === 'delivery')
  const pickup = parcels.filter((pickupPackage) => pickupPackage.deliveryChannel === 'pickup-in-point')
  const takeaway = parcels.filter((takeawayPackage) => takeawayPackage.deliveryChannel === 'takeaway')
  const multipleDeliveries = (delivery.length > 1)
  return (
    <div className="mv6 w-80-ns w-90 center">
      <div className="bb b--muted-5">
        <OrderSummary delivery={delivery} pickup={pickup} />
      </div>
      <OrderHeader orderInfo={data} />
      {
        multipleDeliveries
        && <OrderSplitNotice
            deliveries={delivery.length}
            pickups={pickup.length}
            takeaways={takeaway.length}
          />
      }
      <div className="bb b--muted-5">
        <CustumerInfo profile={profile} />
      </div>
      <div className="bb b--muted-5">
        <PaymentSummary paymentsData={data.paymentData.transactions[0].payments} />
      </div>
      <div className="bb b--muted-5">
        <StorePickUp pickUpPackages={pickup} />
      </div>
      <div className="bb b--muted-5">
        <Shipping deliveryPackages={delivery} />
      </div>
      <OrderTotal
        items={data.items}
        totals={data.totals}
        orderValue={data.value}
      />
    </div>
  )
}

OrderInfo.propTypes = {
  data: PropTypes.object.isRequired,
  profile: profileShape.isRequired,
}

export default OrderInfo
