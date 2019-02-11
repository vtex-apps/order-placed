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
    const { queryAllByText, queryByText } = render(
      <SubsMockComponent attachmentItem={mockAttachmentItemNoSubscription} />
    )

    expect(queryByText('false')).toBeDefined()
    expect(queryAllByText('empty')).toHaveLength(4)
  })

  it('should return correct object for subscription with no purchaseDay', () => {
    const { queryAllByText, queryByText } = render(
      <SubsMockComponent attachmentItem={mockItemSubscriptionNoPurchaseDay} />
    )

    expect(queryByText('true')).toBeDefined()
    expect(queryByText('Every 1 week')).toBeDefined()
    expect(queryByText('2019-02-13')).toBeDefined()
    expect(queryByText('2019-10-16')).toBeDefined()
    expect(queryAllByText('empty')).toHaveLength(1)
  })

  it('should return correct object for a complete subscription attachment', () => {
    const { queryByText } = render(
      <SubsMockComponent attachmentItem={mockItemSubscriptionComplete} />
    )

    expect(queryByText('true')).toBeDefined()
    expect(queryByText('Every 1 week')).toBeDefined()
    expect(queryByText('Charged monthly at day 12')).toBeDefined()
    expect(queryByText('2019-02-13')).toBeDefined()
    expect(queryByText('2019-10-16')).toBeDefined()
    expect(queryByText('empty')).toBeNull()
  })
})
