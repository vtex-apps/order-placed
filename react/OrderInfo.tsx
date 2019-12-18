import React, { FunctionComponent } from 'react'

import { OrderContext } from './components/OrderContext'
import Shipping from './components/Shipping'
import TakeAway from './components/TakeAway'
import OrderSection from './OrderSection'
import OrderTotal from './components/OrderInfo/OrderTotal'

interface Props {
  order: Order
}

const OrderInfo: FunctionComponent<Props> = ({ order, children }) => {
  const {
    deliveryParcels: delivery,
    takeAwayParcels: takeaway,
    giftRegistryData,
  } = order

  return (
    <OrderContext.Provider value={order}>
      <section>
        {children}
        {delivery.length > 0 && (
          <OrderSection>
            <Shipping
              deliveryPackages={delivery}
              giftRegistryData={giftRegistryData}
            />
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
      </section>
    </OrderContext.Provider>
  )
}

export default OrderInfo
