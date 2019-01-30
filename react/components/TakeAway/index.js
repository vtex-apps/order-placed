import React from 'react'
import { intlShape, injectIntl } from 'react-intl'

import { parcelShape } from '../../types'
import ProductList from '../ProductList'

const TakeAway = ({ takeAwayPackages, intl }) => {
  return (
    <section>
      <header>
        <p data-testid="shipping-header" className="t-heading-4-ns t-heading-5">
          {intl.formatMessage({ id: 'takeaway.header.title' })}
        </p>
      </header>
      <ProductList products={takeAwayPackages[0].items} />
    </section>
  )
}

TakeAway.propTypes = {
  takeAwayPackages: parcelShape.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(TakeAway)
