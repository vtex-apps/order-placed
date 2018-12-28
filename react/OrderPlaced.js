import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import OrderInfo from './components/OrderInfo/OrderInfo'
import { orderGroupQuery, profileQuery } from './test-cases/two-payment'

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
