import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Info = ({ split }) => {
  const orderWasSplit = (split > 1)

  return (
    <Fragment>
      <ul className="mv7 list ml0 pl0 t-body bt bb b--muted-5">
        <li className="tc pv2 mv0">
          <p className="pv4">A aprovação do pagamento pode demorar até 3 dias.</p>
          <hr className="w-80-ns w-90 bt b--muted-4" />
        </li>
        <li className="tc pv2 mv0">
          <p className="pv4">O prazo de entrega se inicia a partir do momento em que o pagamento é confirmado.</p>
          <hr className="w-80-ns w-90 bt b--muted-4" />
        </li>
        <li className="tc pv2 mv0">
          <p className="pv4">Quando seu pedido estiver a caminho, o código de rastreamento será enviado para o seu e-mail.</p>
          {
            orderWasSplit && <hr className="w-80-ns w-90 bt b--muted-4" />
          }
        </li>

        {orderWasSplit &&
        <li className="tc pv6 mv0">
          Alguns itens da sua compra foram vendidos por lojas parceiras, logo eles tiveram que ser separados em outro pedido.
          Suas configurações da compra não foram impactadas.
        </li>
        }

      </ul>
    </Fragment>
  )
}

Info.propTypes = {
  split: PropTypes.number.isRequired,
}

export default Info
