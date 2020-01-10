import React, { FC } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { useOrderGroup } from './components/OrderGroupContext'
import DeliverySummary from './components/DeliverySummary'
import PickupSummary from './components/PickupSummary'
import Section from './Section'

const CSS_HANDLES = ['summaryRow', 'summaryCol']

const SummarySection: FC = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { totalDeliveryParcels, totalPickUpParcels } = useOrderGroup()

  if (totalPickUpParcels.length === 0 || totalDeliveryParcels.length === 0) {
    return null
  }

  return (
    <Section
      name="summary"
      marginBottom={9}
      paddingBottom={9}
      width={{ mobile: '90%', desktop: '80%' }}
    >
      <div className={`${handles.summaryRow} flex-ns`}>
        <div className={`${handles.summaryCol} w-100 mr4-ns mb4 mb0-ns`}>
          <DeliverySummary />
        </div>
        <div className={`${handles.summaryCol} w-100`}>
          <PickupSummary />
        </div>
      </div>
    </Section>
  )
}

export default SummarySection
