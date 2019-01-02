import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import StorePickUpHeader from './StorePickUpHeader'
import ProductList from '../ProductList'

const StorePickUp = ({ data }) => {
  const pickUpPackages = data.filter(parcel => (parcel.deliveryChannel === 'pickup-in-point'))
  return (
    <Fragment>
      {
        pickUpPackages.map((pickup, index) => (
          <div className="mv8 flex flex-column justify-between" key={index}>
            <StorePickUpHeader shippingData={pickup} />
            <ProductList products={pickup.items} />
          </div>
        ))
      }
    </Fragment>
  )
}

StorePickUp.propTypes = {
  data: PropTypes.array.isRequired,
}

export default StorePickUp
