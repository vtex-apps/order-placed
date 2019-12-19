import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import ProductList from './components/ProductList'
import { useOrder } from './components/OrderContext'

const TakeAway: FC = () => {
  const { takeAwayParcels } = useOrder()

  if (takeAwayParcels.length === 0) {
    return null
  }

  return (
    <section className="bb b--muted-4">
      <div className="mv8 flex flex-column justify-between">
        <header>
          <p
            data-testid="shipping-header"
            className="t-heading-4-ns t-heading-5"
          >
            <FormattedMessage id="store/takeaway.header.title" />
          </p>
        </header>
        <ProductList products={takeAwayParcels[0].items} />
      </div>
    </section>
  )
}
export default TakeAway
