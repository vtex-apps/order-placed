import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import parcelify from '@vtex/delivery-packages'

const Info = ({ data }) => {
  const orderWasSplit = (data.length > 1)
  const totalParcels = data.reduce((acc, currOrder) => ([...acc, ...parcelify(currOrder)]), [])
  const delivery = totalParcels.filter((deliveryPackage) => deliveryPackage.deliveryChannel === 'delivery')
  const pickup = totalParcels.filter((pickupPackage) => pickupPackage.deliveryChannel === 'pickup-in-point')
  const listItem = 'tc mv0 w-80-ns w-90 center c-on-base'
  const bottomBorder = 'b--muted-4 bb'

  return (
    <Fragment>
      <ul className="mt7 mb9 list ml0 pl0 t-body bg-muted-5 pv4 tc">
        <li className={`${listItem} ${bottomBorder}`}>
          <p className="pb2">A aprovação do pagamento pode demorar até 3 dias</p>
        </li>
        {delivery.length > 0 &&
          (
            <Fragment>
              <li className={`${listItem} ${bottomBorder}`}>
                <p className="pv2">O prazo de entrega se inicia a partir do momento em que o pagamento é confirmado</p>
              </li>
              <li className={`${listItem} ${((orderWasSplit || pickup.length > 0) ? bottomBorder : '')}`}>
                <p className="pv2">Quando seu pedido estiver a caminho, o código de rastreamento será enviado para o seu e-mail</p>
              </li>
            </Fragment>
          )
        }
        {pickup.length > 0 &&
          <li className={`${listItem} ${orderWasSplit ? bottomBorder : ''}`}>
            <p className="pt2">O prazo de retirada se inicia a partir da confirmação do pagamento</p>
          </li>
        }
        {orderWasSplit &&
          <li className={listItem}>
            <p className="pt2">Sua compra foi dividida em { data.length } pedidos, pois alguns itens foram vendidos por lojas parceiras. Isso não afeta seus prazos de entrega</p>
          </li>
        }
      </ul>
    </Fragment>
  )
}

Info.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Info
