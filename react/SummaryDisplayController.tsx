import React, { FC, Fragment } from 'react'

import { useOrderGroup } from './components/OrderGroupContext'

const SummaryDisplayController: FC = ({ children }) => {
  const { totalDeliveryParcels, totalPickUpParcels } = useOrderGroup()

  // needed to prevent displaying a summary if not needed
  if (totalDeliveryParcels.length === 0 || totalPickUpParcels.length === 0) {
    return null
  }

  return <Fragment>{children}</Fragment>
}

export default SummaryDisplayController
