import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Info = ({ split }) => (
  <Fragment>
    <ul className="mv7 list ml0 pl0 t-body bt bb b--muted-4">
      <li className="tc pv2 mv0">
        <p className="pv4">A aprovação do pagamento pode demorar até 3 dias.</p>
        <hr className="mw4 c-muted-5" size="1" />
      </li>
      <li className="tc pv2 mv0">
        <p className="pv4">O prazo de entrega se inicia a partir do momento em que o pagamento é confirmado.</p>
        <hr className="mw4 c-muted-5" size="1" />
      </li>
      <li className="tc pv2 mv0">
        <p className="pv4">Quando seu pedido estiver a caminho, o código de rastreamento será enviado para o seu e-mail.</p>
        {
          (split > 1) && <hr className="mw4 c-muted-5" size="1" />
        }
      </li>

      {(split > 1) &&
      <li className="tc pv6 mv0">
        Alguns itens da sua compra foram vendidos por lojas parceiras, logo eles tiveram que ser separados em outro pedido.
        Suas configurações da compra não foram impactadas.
      </li>
      }

    </ul>
  </Fragment>
)

Info.propTypes = {
  split: PropTypes.number.isRequired,
}

export default Info
