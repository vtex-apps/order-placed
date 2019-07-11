import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import ProductList from '../ProductList'

const TakeAway: FunctionComponent<Props> = ({ takeAwayPackages }) => (
  <section className="mv8 flex flex-column justify-between">
    <header>
      <p data-testid="shipping-header" className="t-heading-4-ns t-heading-5">
        <FormattedMessage id="store/takeaway.header.title" />
      </p>
    </header>
    <ProductList products={takeAwayPackages[0].items} />
  </section>
)

interface Props {
  takeAwayPackages: Parcel[]
}

export default TakeAway
