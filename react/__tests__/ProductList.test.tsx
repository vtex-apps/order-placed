import React from 'react'

import { render } from '../testUtils'

import OrderInfo from '../components/OrderInfo'
import { orderGroupQuery as serviceWithAttachment } from '../mocks/bundleServiceWithAttachment'
import { orderGroupQuery as serviceWithNoAttachments } from '../mocks/bundleServiceWithNoAttachments'
import { orderGroupQuery as serviceAndAttachment } from '../mocks/serviceAndAttachment'

const getOrderFromOrderGroup = (orderGroup: OrderGroup, index: number) => {
  return orderGroup.orders[index]
}

describe('Product List component', () => {
  it('should render Attachment component if product has service or attachment', () => {
    const orderInfo = getOrderFromOrderGroup(
      serviceWithNoAttachments.orderGroup,
      0
    )
    const { queryByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        numOfOrders={1}
        index={0}
      />
    )

    expect(queryByText('[TESTE QA]')).toBeDefined()
  })

  it('should render attachment from bundleItems item', () => {
    const orderInfo = getOrderFromOrderGroup(
      serviceWithAttachment.orderGroup,
      0
    )
    const { queryByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        numOfOrders={1}
        index={0}
      />
    )

    expect(queryByText('This is a mock message')).toBeDefined()
  })

  it('should render attachments from item and also bundle items', () => {
    const orderInfo = getOrderFromOrderGroup(
      serviceAndAttachment.orderGroup,
      0
    )
    const { queryByText } = render(
      <OrderInfo
        order={orderInfo}
        profile={orderInfo.clientProfileData}
        numOfOrders={1}
        index={0}
      />
    )

    expect(queryByText('[TESTE QA]')).toBeDefined()
    expect(queryByText('1 semana')).toBeDefined()
  })
})
