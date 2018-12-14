import React from 'react'
// import PropTypes from 'prop-types'

import { IconWarning } from 'vtex.styleguide'

const Info = () => {
  const twoOrders = false
  return (
    <div>
      <p><strong>Informações importantes:</strong></p>
      <ul className="no-list-style mv9">
        <li className="mv7">
          <IconWarning color="#FFB100" /> <strong> Aprovação do pagamento </strong><br />
          Pode demorar até 3 dias.
        </li>
        <li className="mv7">
          <IconWarning color="#FFB100" /> <strong> Prazo de entrega </strong><br />
          Se inicia a partir do momento em que o pagamento é confirmado.
        </li>
        <li className="mv7">
          <IconWarning color="#FFB100" /> <strong> Rastreamento </strong><br />
          Quando seu pedido estiver a caminho, o código de rastreamento será enviado no seu e-mail.
        </li>

        {twoOrders
          ? <li className="mv7">
            <IconWarning color="#FFB100" /> <strong> Sua compra foi dividida em 2 pedidos </strong><br />
              Alguns itens da sua compra foram vendidos por lojas parceiras, logo eles tiveram que ser separados em outro pedido.
              Suas configurações da compra não foram impactadas.
          </li>
          : <void />
        }

      </ul>
    </div>
  )
}

export default Info
