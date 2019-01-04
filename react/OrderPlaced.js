import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import OrderInfo from './components/OrderInfo/OrderInfo'
import { orderGroupQuery } from './test-cases/3-pickup-only-2-delivery-only'
import { profileQuery } from './test-cases/profileQuery'

export const CurrencyContext = React.createContext('BRL')
export const SplitOrderContext = React.createContext(false)
class OrderPlaced extends Component {
  render() {
    return (
      <CurrencyContext.Provider value={orderGroupQuery.orderGroup[0].storePreferencesData.currencyCode}>
        <SplitOrderContext.Provider value={orderGroupQuery.orderGroup.length > 1}>
          <div className="center">
            <Header data={orderGroupQuery.orderGroup} profile={profileQuery.profile} />
            {
              orderGroupQuery.orderGroup.map(order => {
                return (
                  <OrderInfo
                    data={order}
                    profile={profileQuery.profile}
                    key={order.orderId}
                  />
                )
              })
            }
          </div>
        </SplitOrderContext.Provider>
      </CurrencyContext.Provider>
    )
  }
}

OrderPlaced.propTypes = {
  data: PropTypes.object,
}

export default OrderPlaced
