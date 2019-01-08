import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import { FormattedTime } from 'react-intl'
import { FormattedDate } from 'vtex.order-details'
import { withRuntimeContext } from 'render'
import { SplitOrderContext } from '../../OrderPlaced'

const OrderHeader = ({ orderInfo, runtime }) => {
  const storeAccount = runtime.account
  const orderSeller = orderInfo.sellers[0].name

  return (
    <div className="flex justify-between items-center flex-wrap mt7">
      <p className="t-heading-3-ns t-heading-4 lh-solid">
        Pedido #{orderInfo.orderId}
        <br />
        <small className="c-muted-2 t-small">
          Realizado em <FormattedDate date={orderInfo.creationDate} style="short" /> às <FormattedTime value={orderInfo.creationDate} />
        </small>
        <br />
        <SplitOrderContext.Consumer>
          {splitOrder =>
            ((splitOrder && storeAccount !== orderSeller) &&
              <small className="c-muted-2 t-small">
                Vendido e entregue por <span className="c-action-primary">{orderSeller}</span>
              </small>
            )
          }
        </SplitOrderContext.Consumer>
      </p>
      <div className="flex justify-between flex-wrap">
        <div className="mr3-ns mb4-s mb0-m">
          <Button variation="secondary">
            Alterar pedido
          </Button>
        </div>
        <div className="mr3-ns mb4-s mb0-m">
          <Button variation="secondary">
            Ir para seus pedidos
          </Button>
        </div>
        {
          orderInfo.allowCancellation &&
          (<Button variation="danger-tertiary">
            Cancelar pedido
          </Button>)
        }
      </div>
    </div>
  )
}

OrderHeader.propTypes = {
  orderInfo: PropTypes.object.isRequired,
  runtime: PropTypes.object.isRequired,
}

export default withRuntimeContext(OrderHeader)
