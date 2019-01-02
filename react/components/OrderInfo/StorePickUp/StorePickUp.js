import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import StorePickUpHeader from './StorePickUpHeader'
import ProductList from '../ProductList'

const StorePickUp = ({ data, currency }) => {
  data = data.filter(parcel => (parcel.deliveryChannel === 'pickup-in-point'))
  return (
    <Fragment>
      {
        data.map((pickup, index) => (
          <div className="mv8 flex flex-column justify-between" key={index}>
            <StorePickUpHeader shippingData={data} />
            <ProductList products={pickup.items} currency={currency} />
          </div>
        ))
      }
    </Fragment>
  )
}

StorePickUp.propTypes = {
  data: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired,
}

export default StorePickUp
