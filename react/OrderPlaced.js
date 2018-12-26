import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import OrderInfo from './components/OrderInfo/OrderInfo'
import { orderGroupQuery, profileQuery } from './test-cases/simple-out'

class OrderPlaced extends Component {
  render() {
    return (
      <div className="w-80-ns w-90 center">
        <Header data={orderGroupQuery.orderGroup} profile={profileQuery.profile} />
        {
          orderGroupQuery.orderGroup.map((order, index) => {
            return (
              <OrderInfo
                data={order}
                key={index}
                idx={index}
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
