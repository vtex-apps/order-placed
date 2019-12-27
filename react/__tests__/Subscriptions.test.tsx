import { IntlProvider } from 'react-intl'

import * as defaultStrings from '../../messages/en.json'
import { getSubscriptionInfo } from '../utils'

const {
  state: { intl },
} = new IntlProvider(
  {
    locale: 'en-US',
    messages: defaultStrings,
  },
  {}
)

const mockAttachmentItemNoSubscription = {
  content: {
    anything: false,
    mock: true,
  },
  name: 'testing out',
}

const mockItemSubscriptionNoPurchaseDay = {
  name: 'vtex.subscription._plan1_',
  content: {
    'vtex.subscription.key.frequency': ' 1 week',
    'vtex.subscription.key.purchaseday': '',
    'vtex.subscription.key.validity.begin': '2019-02-13',
    'vtex.subscription.key.validity.end': '2019-10-16',
  },
}

const mockItemSubscriptionComplete = {
  name: 'vtex.subscription._plan1_',
  content: {
    'vtex.subscription.key.frequency': ' 1 week',
    'vtex.subscription.key.purchaseday': '12',
    'vtex.subscription.key.validity.begin': '2019-02-13',
    'vtex.subscription.key.validity.end': '2019-10-16',
  },
}

describe('getSubscriptionInfo function tests', () => {
  it('should return correct object for attachmentItem that is not a subscription', () => {
    const {
      subsFrequency,
      subsPurchaseDay,
      subsValidityBegin,
      subsValidityEnd,
    } = getSubscriptionInfo(mockAttachmentItemNoSubscription, intl)

    expect(subsFrequency).toBeUndefined()
    expect(subsPurchaseDay).toBeUndefined()
    expect(subsValidityBegin).toBeUndefined()
    expect(subsValidityEnd).toBeUndefined()
  })

  it('should return correct object for subscription with no purchaseDay', () => {
    const {
      subsFrequency,
      subsPurchaseDay,
      subsValidityBegin,
      subsValidityEnd,
    } = getSubscriptionInfo(mockItemSubscriptionNoPurchaseDay, intl)

    expect(subsFrequency).toBe('Every 1 week')
    expect(subsPurchaseDay).toBeNull()
    expect(subsValidityBegin).toBe('2019-02-13')
    expect(subsValidityEnd).toBe('2019-10-16')
  })

  it('should return correct object for a complete subscription attachment', () => {
    const {
      subsFrequency,
      subsPurchaseDay,
      subsValidityBegin,
      subsValidityEnd,
    } = getSubscriptionInfo(mockItemSubscriptionComplete, intl)

    expect(subsFrequency).toBe('Every 1 week')
    expect(subsPurchaseDay).toBe('Charged monthly at day 12')
    expect(subsValidityBegin).toBe('2019-02-13')
    expect(subsValidityEnd).toBe('2019-10-16')
  })
})
