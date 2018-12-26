import React from 'react'

import { Box } from 'vtex.styleguide'
import PickUpIcon from '../../Icons/PickUpIcon'

const ShippingInfo = () => (
  <div className="mv8 flex flex-column justify-between">
    <h2>
      <PickUpIcon />
      <span className="ml4">Retirada em ponto</span>
    </h2>
    <div className="mb6">
      <Box>
        <div className="flex flex-column flex-row-ns justify-between">
          <div className="flex justify-between flex-column">
            <div>
              <p>Praia de Botafogo, 300</p>
              <p>CEP 22651-470 - Botafogo</p>
              <p>Rio de Janeiro, RJ</p>
            </div>
            <div>
              <p>Jane Doe</p>
              <p>jane-doe@gmail.com</p>
            </div>
            <div>
              <p>Apresentar documento com foto ao caixa da loja</p>
            </div>
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

export default ShippingInfo
