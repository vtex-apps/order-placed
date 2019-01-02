import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import OrderInfo from './components/OrderInfo/OrderInfo'
import { orderGroupQuery } from './test-cases/3-pickup-only-2-delivery-only'
import { profileQuery } from './test-cases/profileQuery'

class OrderPlaced extends Component {
  render() {
    return (
      <div className="center">
        <Header data={orderGroupQuery.orderGroup} profile={profileQuery.profile} />
        {
          orderGroupQuery.orderGroup.map(order => {
            return (
              <OrderInfo
                data={order}
                key={order.orderId}
                profile={profileQuery.profile}
                currency={order.storePreferencesData.currencyCode}
              />
            )
          })
        }
      </div>
    )
  }
}

OrderPlaced.propTypes = {
  data: PropTypes.object,
}

export default OrderPlaced
