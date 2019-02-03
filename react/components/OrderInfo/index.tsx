import parcelify from '@vtex/delivery-packages'
import React, { FunctionComponent } from 'react'

import {
  getDeliveryPackagesFromParcels,
  getPickUpPackagesFromParcels,
  getTakeAwayPackagesFromParcels
} from '../../utils'
import CustomerInfo from '../CustomerInfo'
import PaymentMethod from '../Payment/PaymentMethod'
import Shipping from '../Shipping'
import StorePickUp from '../StorePickUp'
import TakeAway from '../TakeAway'
import OrderHeader from './OrderHeader'
import OrderOptions from './OrderOptions'
import OrderSection from './OrderSection'
import OrderSplitNotice from './OrderSplitNotice'
import OrderTotal from './OrderTotal'

interface Props {
  order: Order
  profile: ClientProfile
  numOfOrders: number
  index: number
}

const OrderInfo: FunctionComponent<Props> = ({
  order,
  profile,
  numOfOrders,
  index,
}) => {
  const splitOrder = numOfOrders > 1
  const parcels = parcelify(order)
  const delivery = getDeliveryPackagesFromParcels(parcels)
  const pickup = getPickUpPackagesFromParcels(parcels)
  const takeaway = getTakeAwayPackagesFromParcels(parcels)
  const multipleDeliveries = delivery.length > 1
  const paymentsData = order.paymentData.transactions[0].payments
  const transactionId = order.paymentData.transactions[0].transactionId
  const hasCustomerName = profile.firstName && profile.lastName

  return (
    <section>
      <div className="mv6 w-80-ns w-90 center">
        <OrderHeader
          orderInfo={order}
          splitOrder={splitOrder}
          takeaway={takeaway.length > 0}
        />
        {multipleDeliveries && (
          <OrderSplitNotice
            deliveries={delivery.length}
            pickups={pickup.length}
            takeaways={takeaway.length}
          />
        )}
        {hasCustomerName && <CustomerInfo profile={profile} />}
        <OrderSection>
          {paymentsData.map((payment, idx) => (
            <div key={idx} className="flex flex-column pb8">
              <PaymentMethod payment={payment} transactionId={transactionId} />
            </div>
          ))}
          <OrderOptions
            className="dn-l mb4"
            allowCancellation={order.allowCancellation}
            fullWidth
          />
        </OrderSection>
        {pickup.length > 0 && (
          <OrderSection>
            <StorePickUp pickUpPackages={pickup} />
          </OrderSection>
        )}
        {delivery.length > 0 && (
          <OrderSection>
            <Shipping deliveryPackages={delivery} />
          </OrderSection>
        )}
        {takeaway.length > 0 && (
          <OrderSection>
            <TakeAway takeAwayPackages={takeaway} />
          </OrderSection>
        )}
        <OrderTotal
          items={order.items}
          totals={order.totals}
          orderValue={order.value}
        />
      </div>
      {index < numOfOrders - 1 && <hr className="bg-muted-4 bt b--muted-4" />}
    </section>
  )
}

export default OrderInfo
