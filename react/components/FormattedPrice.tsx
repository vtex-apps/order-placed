import React, { FC } from 'react'
import { FormattedNumber } from 'react-intl'

import { useCurrency } from './CurrencyContext'

interface Props {
  value: number
}

const FormattedPrice: FC<Props> = ({ value }) => {
  const currency = useCurrency()

  return (
    <FormattedNumber currency={currency} style="currency" value={value / 100} />
  )
}

export default FormattedPrice
