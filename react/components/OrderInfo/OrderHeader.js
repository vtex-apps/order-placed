import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import { FormattedDate } from 'vtex.order-details'

const OrderHeader = ({ orderInfo }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="t-heading-3-ns t-heading-4">
          Pedido #{orderInfo.orderId}
          <br />
          <small className="c-muted-2 t-small">
            Realizado em <FormattedDate date={orderInfo.creationDate} style="short" />
          </small>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="mr3">
          <Button variation="secondary">
          Alterar pedido
          </Button>
        </div>
        <div className="mr3">
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
