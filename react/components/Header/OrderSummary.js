import React from 'react'
import { Box } from 'vtex.styleguide'

const OrderSummary = () => {
  return (
    <div>
      <p className="f5"><strong>Resumo da sua compra:</strong></p>
      <div className="flex justify-center mv8">
        <div className="mr4">
          <Box>
            <h3>A receber</h3>
          </Box>
        </div>
        <div className="ml4">
          <Box>
            <h3>A retirar</h3>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
