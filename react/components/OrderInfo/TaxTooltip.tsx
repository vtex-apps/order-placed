import React, { FunctionComponent } from 'react'
import { Tooltip, IconInfo } from 'vtex.styleguide'
import TranslateTotalizer from 'vtex.totalizer-translator/TranslateTotalizer'

import Price from '../Payment/FormattedPrice'

const TaxTooltip: FunctionComponent<Props> = ({ taxesTotals }) => {
  const tooltipLabel = (
    <ul className="list pa0 ma0">
      {taxesTotals.map(total => (
        <li className="flex justify-between items-center" key={total.name}>
          <span className="pr5">
            <TranslateTotalizer totalizer={total} />
          </span>
          <span>
            <Price value={total.value} />
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <Tooltip label={tooltipLabel}>
      <span className="pointer flex items-start pl2 pt1">
        <IconInfo size={12} />
      </span>
    </Tooltip>
  )
}

interface Props {
  taxesTotals: OrderItemTotal[]
}

export default TaxTooltip
