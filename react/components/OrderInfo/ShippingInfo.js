import React from 'react'

import { Box } from 'vtex.styleguide'
import DeliveryIcon from '../Icons/DeliveryIcon'

const ShippingInfo = () => {
  return (
    <div className="mv8 flex flex-column justify-between">
      <h2>
        <DeliveryIcon />
        <span className="ml4">Entrega</span>
      </h2>
      <div className="mb6">
        <Box>
          <div className="flex flex-column justify-between">
            <div>
              <p>Avenida das Américas, 300</p>
              <p>CEP 22651-470 - Barra da Tijuca</p>
              <p>Rio de Janeiro, RJ</p>
            </div>
            <div>
              <h4>Entrega em até 4 dias úteis</h4>
              <p>Item do pedido</p>
              <p>Item do pedido</p>
            </div>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default ShippingInfo
