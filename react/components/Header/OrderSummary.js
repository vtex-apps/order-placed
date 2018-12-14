import React from 'react'

import { Box } from 'vtex.styleguide'

const OrderSummary = () => {
  return (
    <div>
      <p className="f5"><strong>Resumo da sua compra:</strong></p>
      <div className="flex justify-center mv8">
        <Box>
          <h3>A receber</h3>
        </Box>
        <Box>
          <h3>A retirar</h3>
        </Box>
      </div>
    </div>
  )
}

export default OrderSummary
