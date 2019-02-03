import React, { FunctionComponent } from 'react'
import { FormattedNumber } from 'react-intl'

import { CurrencyContext } from '../../OrderPlaced'

interface Props {
  value: number
}

const Price: FunctionComponent<Props> = ({ value }) => (
  <CurrencyContext.Consumer>
    {currency => (
      <FormattedNumber
        currency={currency}
        style="currency"
        value={value / 100}
      />
    )}
  </CurrencyContext.Consumer>
)

export default Price
