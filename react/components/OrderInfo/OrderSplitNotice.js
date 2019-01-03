import React from 'react'
import PropTypes from 'prop-types'
import { parcelShape } from '../../proptypes/shapes'
import { Alert } from 'vtex.styleguide'

const OrderSplitNotice = ({ deliveries, pickups, takeaways }) => {
  return (
    <Alert type="success">
      Separamos seu pedido em {`${deliveries} entregas`}
      {pickups > 0 && `, além das suas ${pickups} retiradas no ponto`}
      {takeaways > 0 && ` e ${takeaways} itens para levar agora`}
      . Assim os produtos que estão mais próximos do endereço de entrega chegarão mais rápido!
    </Alert>
  )
}

OrderSplitNotice.propTypes = {
  deliveries: PropTypes.number.isRequired,
  pickups: PropTypes.number.isRequired,
  takeaways: PropTypes.number.isRequired
}

export default OrderSplitNotice
