import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

import { useOrderGroup } from './components/OrderGroupContext'

const PrintButton: FC = () => {
  const { status } = useOrderGroup()

  if (status === 'pending') {
    return null
  }

  return (
    <Button variation="secondary" onClick={() => window.print()}>
      <FormattedMessage id="store/header.print.button" />
    </Button>
  )
}
export default PrintButton
