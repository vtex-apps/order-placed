import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

const PrintButton: FC = () => {
  return (
    <Button variation="secondary" onClick={() => window.print()}>
      <FormattedMessage id="store/header.print.button" />
    </Button>
  )
}
export default PrintButton
