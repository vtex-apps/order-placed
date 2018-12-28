import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import { FormattedTime } from 'react-intl'
import { FormattedDate } from 'vtex.order-details'

const OrderHeader = ({ orderInfo }) => (
  <div className="flex justify-between items-center flex-wrap">
    <p className="t-heading-3-ns t-heading-4">
      Pedido #{orderInfo.orderId}
      <br />
      <small className="c-muted-2 t-small">
        Realizado em <FormattedDate date={orderInfo.creationDate} style="short" /> às <FormattedTime value={orderInfo.creationDate} />
      </small>
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

OrderHeader.propTypes = {
  orderInfo: PropTypes.object.isRequired,
}

export default OrderHeader
