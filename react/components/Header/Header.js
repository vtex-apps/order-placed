import React from 'react'
import OrderStatus from './OrderStatus'
import Warnings from './Warnings'
import OrderSummary from './OrderSummary'

const Header = () => {
  const showSummary = true

  return (
    <div className="h-75 pt7 sans-serif">

      <p className="tc serious-black f2">
        Pedido realizado com sucesso!
      </p>

      {/* Order status */}
      <div className="flex justify-center mv8">
        <OrderStatus />
      </div>

      {/* E-mail reminder */}
      <div className="center mt4 f5">
        <p>
          Você receberá um e-mail no endereço <strong>jane-doe@gmail.com</strong> com todos os detalhes do seu pedido em até 5 minutos.<br />
        </p>
        <p>
        Lembre-se de conferir sua caixa de lixo eletrônico.
        </p>
      </div>

      {/* Icons */}
      <div className="flex justify-end f5">
        <p className="tr c-action-primary">
          <svg className="pr4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0H3V3H13V0Z" fill="#134CD8" />
            <path d="M15 5H1C0.4 5 0 5.4 0 6V12C0 12.6 0.4 13 1 13H3V15C3 15.6 3.4 16 4 16H12C12.6 16 13 15.6 13 15V13H15C15.6 13 16 12.6 16 12V6C16 5.4 15.6 5 15 5ZM11 14H5V9H11V14Z"
              fill="#134CD8" />
          </svg>
          IMPRIMIR PÁGINA
        </p>
        <div className="w1"></div>
        <p className="tr c-action-primary">
          <svg className="pr4" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0H1C0.4 0 0 0.4 0 1V2.4L8 6.9L16 2.5V1C16 0.4 15.6 0 15 0Z" fill="#134CD8" />
            <path d="M7.5 8.90001L0 4.70001V13C0 13.6 0.4 14 1 14H15C15.6 14 16 13.6 16 13V4.70001L8.5 8.90001C8.22 9.04001 7.78 9.04001 7.5 8.90001Z" fill="#134CD8" />
          </svg>
          REENVIAR E-MAIL
        </p>
      </div>

      {/* Order important info */}
      <Warnings />

      {/* Order Summary (not always displayed) */}
      {showSummary ? (<OrderSummary />) : <void />}
    </div>
  )
}

export default Header
