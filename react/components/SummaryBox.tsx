import React, { FC, ReactNode } from 'react'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import { TranslateEstimate } from 'vtex.shipping-estimate-translator'

const CSS_HANDLES = [
  'summarySection',
  'summaryBox',
  'summaryTitle',
  'summaryContent',
  'summaryItems',
  'summaryShipping',
  'summaryAddress',
]

interface Props {
  type: 'pickup' | 'delivery'
  title: ReactNode
  itemQuantity: ReactNode
  parcelQuantity: ReactNode
  shippingEstimate: unknown
  shippingAddress: ReactNode
}

const SummaryBox: FC<Props> = ({
  type,
  title,
  itemQuantity,
  parcelQuantity,
  shippingEstimate,
  shippingAddress,
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div
      data-testid={`summary-${type}`}
      className={`${applyModifiers(
        handles.summaryBox,
        type
      )} ba b--muted-5 bw1 br3`}
    >
      <h5
        className={`${handles.summaryTitle} mv0 pv5 t-heading-5 tc bb b--muted-5 bw1 c-on-base`}
      >
        {title}
      </h5>
      <div className={`${handles.summaryContent} pa6 t-body`}>
        <div className={`${handles.summaryItems} mb4`}>
          <strong>{itemQuantity}</strong>
          {parcelQuantity}
        </div>
        <div className={`${handles.summaryShipping} t-heading-5 mb8`}>
          <TranslateEstimate shippingEstimate={shippingEstimate} />
        </div>
        <div className={`${handles.summaryAddress} c-muted-2 lh-copy`}>
          {shippingAddress}
        </div>
      </div>
    </div>
  )
}

export default SummaryBox
