import React from 'react'

import { Box } from 'vtex.styleguide'

const ShippingInfo = () => {
  return (
    <div className="mv8 flex flex-column justify-between">
      <h2>
        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7344 4.80957H26.2004L29.0001 12.4286V18.1428H25.2205" stroke="#111"
            strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M19.6624 18.1426H9.86328" stroke="#111" strokeWidth="2" strokeMiterlimit="10"
            strokeLinecap="square" />
          <path d="M4.26637 18.1428H1V1H18.7317V11.9523" stroke="#111" strokeWidth="2"
            strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M21.9922 8.14258V11.4759H25.2586" stroke="#111" strokeWidth="2"
            strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M7.06733 20.9999C8.61359 20.9999 9.86708 19.7207 9.86708 18.1428C9.86708 16.5648 8.61359 15.2856 7.06733 15.2856C5.52107 15.2856 4.26758 16.5648 4.26758 18.1428C4.26758 19.7207 5.52107 20.9999 7.06733 20.9999Z"
            stroke="#111" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"
          />
          <path d="M22.4638 20.9999C24.0101 20.9999 25.2636 19.7207 25.2636 18.1428C25.2636 16.5648 24.0101 15.2856 22.4638 15.2856C20.9176 15.2856 19.6641 16.5648 19.6641 18.1428C19.6641 19.7207 20.9176 20.9999 22.4638 20.9999Z"
            stroke="#111" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"
          />
        </svg>
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
      <Box>
        <div className="flex flex-column justify-between">
          <h4>Resumo</h4>
          <div className="flex justify-between">
            <p className="tl">Subtotal (2 itens)</p>
            <p className="tr">R$ 000,00</p>
          </div>
          <div className="flex justify-between">
            <p className="tl">Entrega</p>
            <p className="tr">R$ 000,00</p>
          </div>
          <div className="flex justify-between">
            <p className="tl">Retirada</p>
            <p className="tr">Grátis</p>
          </div>
          <div className="flex justify-between">
            <p className="tl"><strong>Total</strong></p>
            <p className="tr">R$ 000,00</p>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default ShippingInfo
