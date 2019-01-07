import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Info = ({ split }) => {
  const orderWasSplit = (split > 1)
  const listItem = 'tc mv0 w-80-ns w-90 center c-on-base'
  const botBorder = 'b--muted-4 bb'

  return (
    <Fragment>
      <ul className="mt7 mb9 list ml0 pl0 t-body bg-muted-5 pv4 tc">
        <li className={`${listItem} ${botBorder}`}>
          <p className="pb2">A aprovação do pagamento pode demorar até 3 dias.</p>
        </li>
        <li className={`${listItem} ${botBorder}`}>
          <p className="pv2">O prazo de entrega se inicia a partir do momento em que o pagamento é confirmado.</p>
        </li>
        <li className={`${listItem} ${(orderWasSplit && botBorder)}`}>
          <p className="pv2">Quando seu pedido estiver a caminho, o código de rastreamento será enviado para o seu e-mail.</p>
        </li>
        {orderWasSplit
          &&
          <li className={listItem}>
            <p className="pt2">Sua compra foi dividida em 2 pedidos, pois alguns itens foram vendidos por lojas parceiras. Isso não afeta seus prazos de entrega.</p>
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
