import React from 'react'

import SubsMockComponent from '../__mocks__/SubsMockComponent'
import { render } from '../testUtils'

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
    const fn = jest.fn()

    render(
      <SubsMockComponent
        attachmentItem={mockAttachmentItemNoSubscription}
        children={fn}
      />
    )

    const params = fn.mock.calls[0][0]

    expect(params.isSubscription).toBe(false)
    expect(params.subsFrequency).toBeUndefined()
    expect(params.subsPurchaseDay).toBeUndefined()
    expect(params.subsValidityBegin).toBeUndefined()
    expect(params.subsValidityEnd).toBeUndefined()
  })

  it('should return correct object for subscription with no purchaseDay', () => {
    const fn = jest.fn()

    render(
      <SubsMockComponent
        attachmentItem={mockItemSubscriptionNoPurchaseDay}
        children={fn}
      />
    )

    const params = fn.mock.calls[0][0]

    expect(params.isSubscription).toBe(true)
    expect(params.subsFrequency).toBe('Every 1 week')
    expect(params.subsPurchaseDay).toBeNull()
    expect(params.subsValidityBegin).toBe('2019-02-13')
    expect(params.subsValidityEnd).toBe('2019-10-16')
  })

  it('should return correct object for a complete subscription attachment', () => {
    const fn = jest.fn()

    render(
      <SubsMockComponent
        attachmentItem={mockItemSubscriptionComplete}
        children={fn}
      />
    )

    const params = fn.mock.calls[0][0]

    expect(params.isSubscription).toBe(true)
    expect(params.subsFrequency).toBe('Every 1 week')
    expect(params.subsPurchaseDay).toBe('Charged monthly at day 12')
    expect(params.subsValidityBegin).toBe('2019-02-13')
    expect(params.subsValidityEnd).toBe('2019-10-16')
  })
})
