import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import ProductList from '../ProductList'

interface Props {
  takeAwayPackages: Parcel[]
}

const TakeAway: FunctionComponent<Props & InjectedIntlProps> = ({
  takeAwayPackages,
  intl,
}) => (
  <section className="mv8 flex flex-column justify-between">
    <header>
      <p data-testid="shipping-header" className="t-heading-4-ns t-heading-5">
        {intl.formatMessage({ id: 'takeaway.header.title' })}
      </p>
    </header>
    <ProductList products={takeAwayPackages[0].items} />
  </section>
)

export default injectIntl(TakeAway)
