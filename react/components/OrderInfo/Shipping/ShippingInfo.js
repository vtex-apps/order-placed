import React from 'react'
import PropTypes from 'prop-types'

import ShippingHeader from './ShippingHeader'

const ShippingInfo = ({ data }) => {
  return (
    <div className="mv8 flex flex-column justify-between">
      {/* <h2>
        <span className="ml4">Entrega em casa</span>
        <small className="t-small">Em até {data.shippingEstimate} dias úteis</small>
      </h2> */}
      <ShippingHeader shippingData={data.shippingData} />
      <div className="mb6">
        {/* <Box>
          <div className="flex flex-column justify-between">
            <div>
              <p>{data.Address.street}, {data.Address.number}</p>
              <p>CEP 04317000 - {data.Address.neighborhood}</p>
              <p>{data.Address.city}, {data.shippingAddress.state} </p>
            </div>
            <div>
              {
                data.items.filter((item) => (item.delivery === 'shipping')).map(item => {
                  return (<p key="item.name">{item.name}</p>)
                })
              }
            </div>
          </div>
        </Box> */}
      </div>
    </div>
  )
}

ShippingInfo.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ShippingInfo
