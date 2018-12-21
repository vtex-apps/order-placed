import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import { FormattedDate } from 'vtex.order-details'

const OrderHeader = ({ orderInfo }) => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <div>
        <p className="t-heading-3-ns t-heading-4">
          Pedido #{orderInfo.orderId}
          <br />
          <small className="c-muted-2 t-small">
            Realizado em <FormattedDate date={orderInfo.creationDate} style="short" />
          </small>
        </p>
      </div>
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
        <Button variation="danger-tertiary">
          Cancelar pedido
        </Button>
      </div>
    </div>
  )
}

OrderHeader.propTypes = {
  orderInfo: PropTypes.object.isRequired,
}

export default OrderHeader
