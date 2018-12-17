import React from 'react'
import { Box } from 'vtex.styleguide'

const OrderSummary = () => {
  return (
    <div>
      <p className="f5"><strong>Resumo da sua compra:</strong></p>
      <div className="flex justify-center mv8">
        <div className="mr4">
          <Box>
            <h3 className="pv2">
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
        <div className="ml4">
          <Box>
            <h3 className="pv2">
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
    </div>
  )
}

export default OrderSummary
