import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import StorePickUpHeader from './StorePickUpHeader'
import ProductList from '../OrderInfo/ProductList'

const StorePickUp = ({ pickUpPackages }) => {
  return (
    <Fragment>
      {
        pickUpPackages.map((pickup, index) => (
          <div className="mv8 flex flex-column justify-between" key={index}>
            <StorePickUpHeader shippingData={pickup} index={index} numPackages={pickUpPackages.length} />
            <ProductList products={pickup.items} />
          </div>
        ))
      }
    </Fragment>
  )
}

StorePickUp.propTypes = {
  pickUpPackages: PropTypes.array.isRequired,
}

export default StorePickUp
