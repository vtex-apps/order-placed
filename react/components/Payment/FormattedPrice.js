import React from 'react'
import PropTypes from 'prop-types'
import { FormattedNumber } from 'react-intl'
import { CurrencyContext } from '../../OrderPlaced'

const Price = ({ value }) => (
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

Price.propTypes = {
  value: PropTypes.number,
  currency: PropTypes.string,
}

export default Price
