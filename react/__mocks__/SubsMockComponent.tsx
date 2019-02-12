import { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { getSubscriptionInfo } from '../utils'

const SubsMockComponent: FunctionComponent<
  {
    attachmentItem: Attachment;
    children: jest.Mock;
  } & InjectedIntlProps
> = ({ attachmentItem, children, intl }) => {
  const {
    isSubscription,
    subsFrequency,
    subsPurchaseDay,
    subsValidityBegin,
    subsValidityEnd,
  } = getSubscriptionInfo(attachmentItem, intl)

  children({
    isSubscription,
    subsFrequency,
    subsPurchaseDay,
    subsValidityBegin,
    subsValidityEnd,
  })

  return null
}

export default injectIntl(SubsMockComponent)
