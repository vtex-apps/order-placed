import React from 'react'

import { orderGroupQuery as serviceWithAttachment } from '../mocks/bundleServiceWithAttachment'
import { orderGroupQuery as serviceWithNoAttachments } from '../mocks/bundleServiceWithNoAttachments'
import { orderGroupQuery as serviceAndAttachment } from '../mocks/serviceAndAttachment'
import { orderGroupQuery as subscription } from '../mocks/subscriptions'
import { renderWithOrderGroup } from '../utils/testUtils'
import ProductList from '../components/ProductList'

const getItemsFromOrderGroup = (
  orderGroup: OrderGroup,
  type: 'deliveryParcels' | 'pickUpParcels'
) => orderGroup.orders[0][type][0].items

test('renders Attachment component if product has service or attachment', () => {
  const { queryByText } = renderWithOrderGroup(
    serviceWithNoAttachments.orderGroup,
    <ProductList
      products={getItemsFromOrderGroup(
        serviceWithNoAttachments.orderGroup,
        'deliveryParcels'
      )}
    />
  )

  expect(queryByText('[TESTE QA]')).toBeTruthy()
})

test('renders attachment from bundleItems item', () => {
  const { queryByText } = renderWithOrderGroup(
    serviceWithAttachment.orderGroup,
    <ProductList
      products={getItemsFromOrderGroup(
        serviceWithAttachment.orderGroup,
        'deliveryParcels'
      )}
    />
  )

  expect(queryByText('This is a mock message')).toBeTruthy()
})

test('renders attachments from item and also bundle items', () => {
  const { queryByText } = renderWithOrderGroup(
    serviceAndAttachment.orderGroup,
    <ProductList
      products={getItemsFromOrderGroup(
        serviceAndAttachment.orderGroup,
        'deliveryParcels'
      )}
    />
  )

  expect(queryByText('[TESTE QA]')).toBeTruthy()
  expect(queryByText(/1\ssemana/)).toBeTruthy()
})

test('renders correct information and messages for an item with a subscription', () => {
  const { queryByText } = renderWithOrderGroup(
    subscription.orderGroup,
    <ProductList
      products={getItemsFromOrderGroup(
        subscription.orderGroup,
        'deliveryParcels'
      )}
    />
  )

  expect(queryByText('Subscription')).toBeTruthy()
  expect(queryByText('Every 1 week')).toBeTruthy()
  expect(queryByText('Charged monthly at day 15')).toBeTruthy()
})
