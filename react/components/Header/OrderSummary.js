import React, { Fragment } from 'react'
import { Box } from 'vtex.styleguide'

import DeliveryIcon from '../Icons/DeliveryIcon'
import PickUpIcon from '../Icons/PickUpIcon'

const OrderSummary = () => {
  return (
    <Fragment>
      <p className="t-heading-5"><strong>Resumo da sua compra:</strong></p>
      <div className="flex flex-wrap flex-nowrap-l justify-center mv8">
        <div className="mr4-ns mb4-s mb0-l">
          <Box>
            <h3 className="pv2">
              <DeliveryIcon />
              <span className="ml4">A receber</span>
            </h3>

            <hr className="bg-muted-5 c-muted-5 w-95" size="1" />

            <div className="flex flex-column pv3 justify-around">
              <p>6 itens</p>
              <p><strong>Em até 4 dias úteis</strong></p>

              <p>Em Avenida Evandro Lins e Silva, 440</p>
            </div>
          </Box>
        </div>
        <div className="ml4-ns mt4-s mt0-l">
          <Box>
            <h3 className="pv2">
              <PickUpIcon />
              <span className="ml4">A retirar</span>
            </h3>

            <hr className="bg-muted-5 c-muted-5 w-95" size="1" />

            <div className="flex flex-column pv3 justify-around">
              <p>7 itens</p>
              <p><strong>A partir de 2 dias úteis</strong></p>

              <p>Em Foxton Botafogo e Foxton Barra Shopping</p>
            </div>
          </Box>
        </div>
      </div>
    </Fragment>
  )
}

export default OrderSummary
