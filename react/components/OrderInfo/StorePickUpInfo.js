import React from 'react'

import { Box } from 'vtex.styleguide'

const ShippingInfo = () => {
  return (
    <div className="mv8 flex flex-column justify-between">
      <h2>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6575 4.79333H4.17969" stroke="#111" strokeWidth="2" strokeMiterlimit="10"
            strokeLinecap="square" />
          <path d="M10.9273 14.276H6.95508V18.0691H10.9273V14.276Z" stroke="#111"
            strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M3.38672 13.5171V22.9999H14.5089V16.1723H19.2756V22.9999H22.4534V13.5171"
            stroke="#111" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"
          />
          <path d="M21.6556 4.79314V1H4.17778V4.79314L1 8.58627C1 10.0527 2.24489 11.2415 3.78056 11.2415C4.66795 11.2415 5.45604 10.8432 5.96528 10.2253C6.47452 10.8432 7.26261 11.2415 8.15 11.2415C9.16331 11.2415 10.0475 10.7222 10.5333 9.94877C11.0191 10.7222 11.9034 11.2415 12.9167 11.2415C13.93 11.2415 14.8142 10.7222 15.3 9.94877C15.7858 10.7222 16.67 11.2415 17.6833 11.2415C18.5707 11.2415 19.3588 10.8432 19.8681 10.2253C20.3773 10.8432 21.1654 11.2415 22.0528 11.2415C23.5884 11.2415 24.8333 10.0527 24.8333 8.58627L21.6556 4.79314Z"
            stroke="#111" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"
          />
        </svg>

        <span className="ml4">Retirada em ponto</span>
      </h2>
      <div className="mb6">
        <Box>
          <div className="flex flex-column justify-between">
            <div className="flex justify-between">
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
}

export default ShippingInfo
