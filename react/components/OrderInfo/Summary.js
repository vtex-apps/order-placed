import React from 'react'

import { Box } from 'vtex.styleguide'

const Summary = () => {
  return (
    <Box>
      <div className="flex flex-column justify-between">
        <h4>Resumo</h4>
        <div className="flex justify-between">
          <p className="tl">Subtotal (2 itens)</p>
          <p className="tr">R$ 000,00</p>
        </div>
        <div className="flex justify-between">
          <p className="tl">Entrega</p>
          <p className="tr">R$ 000,00</p>
        </div>
        <div className="flex justify-between">
          <p className="tl">Retirada</p>
          <p className="tr">Grátis</p>
        </div>
        <div className="flex justify-between">
          <p className="tl"><strong>Total</strong></p>
          <p className="tr">R$ 000,00</p>
        </div>
      </div>
    </Box>
  )
}

export default Summary
