import React, { FunctionComponent } from 'react'
import { Tooltip, IconInfo } from 'vtex.styleguide'
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'

import FormattedPrice from './components/FormattedPrice'

const TaxInfo: FunctionComponent<Props> = ({ taxesTotals, className = '' }) => {
  const tooltipLabel = (
    <ul className="list pa0 ma0">
      {taxesTotals.map(total => (
        <li className="flex justify-between items-center" key={total.name}>
          <span className="pr5">
            <TranslateTotalizer totalizer={total} />
          </span>
          <span>
            <FormattedPrice value={total.value} />
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <span className={className}>
      <Tooltip label={tooltipLabel}>
        <span className="pointer flex items-start">
          <IconInfo size={12} />
        </span>
      </Tooltip>
    </span>
  )
}

interface Props {
  taxesTotals: OrderItemTotal[]
  className?: string
}

export default TaxInfo
