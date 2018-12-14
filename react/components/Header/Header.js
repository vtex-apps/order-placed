import React from 'react'
import OrderStatus from './OrderStatus'
import Warnings from './Warnings'
import OrderSummary from './OrderSummary'

const Header = () => {
  const showSummary = false

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
      <div className="center mt4">
        <p>
          Você receberá um e-mail no endereço <strong>(endereço de email)</strong> com todos os detalhes do seu pedido em até 5 minutos.<br />
        </p>
        <p>
        Lembre-se de conferir sua caixa de lixo eletrônico.
        </p>
      </div>

      {/* Icons */}
      <div className="flex justify-end">
        <p className="tr c-action-primary">ICONE - IMPRIMIR PÁGINA</p>
        <div className="w1"></div>
        <p className="tr c-action-primary">ICONE - REENVIAR E-MAIL </p>
      </div>

      {/* Order important info */}
      <Warnings />

      {/* Order Summary (not always displayed) */}
      {showSummary ? (<OrderSummary />) : <void />}
    </div>
  )
}

export default Header
