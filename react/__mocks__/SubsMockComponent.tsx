import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { getSubscriptionInfo } from '../utils'

const SubsMockComponent: FunctionComponent<
  { attachmentItem: Attachment } & InjectedIntlProps
> = ({ attachmentItem, intl }) => {
  const {
    isSubscription,
    subsFrequency,
    subsPurchaseDay,
    subsValidityBegin,
    subsValidityEnd,
  } = getSubscriptionInfo(attachmentItem, intl)

  return (
    <ul>
      <li>{isSubscription}</li>
      <li>{subsFrequency || 'empty'}</li>
      <li>{subsPurchaseDay || 'empty'}</li>
      <li>{subsValidityBegin || 'empty'}</li>
      <li>{subsValidityEnd || 'empty'}</li>
    </ul>
  )
}

export default injectIntl(SubsMockComponent)
