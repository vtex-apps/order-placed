import React from 'react'
import OrderStatus from './OrderStatus'
import Warnings from './Warnings'
import OrderSummary from './OrderSummary'
import PrinterIcon from '../Icons/PrinterIcon'
import MailIcon from '../Icons/MailIcon'

const Header = () => {
  const showSummary = true

  return (
    <div className="h-75 pt7 sans-serif">

      <p className="tc c-on-base t-heading-1">
        Pedido realizado com sucesso!
      </p>

      {/* Order status */}
      <div className="flex justify-center mv8">
        <OrderStatus />
      </div>

      {/* E-mail reminder */}
      <div className="center mt4 t-body">
        <p>
          Você receberá um e-mail no endereço <strong className="nowrap">jane-doe@gmail.com</strong> com todos os detalhes do seu pedido em até 5 minutos.<br />
        </p>
        <p>
        Lembre-se de conferir sua caixa de lixo eletrônico.
        </p>
      </div>

      {/* Icons */}
      <div className="flex justify-end flex-wrap t-action">
        <p className="tr c-action-primary">
          <PrinterIcon />
          <span className="pl4 mr4 truncate-s">IMPRIMIR PÁGINA</span>
        </p>
        <p className="tr c-action-primary">
          <MailIcon />
          <span className="pl4 truncate-s">REENVIAR E-MAIL</span>
        </p>
      </div>

      {/* Order important info */}
      <Warnings />

      {/* Order Summary (not always displayed) */}
      {showSummary ? (<OrderSummary />) : null}
    </div>
  )
}

export default Header
