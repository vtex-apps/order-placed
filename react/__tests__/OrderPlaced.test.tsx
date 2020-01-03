import { wait } from '@vtex/test-tools/react'
import React from 'react'

import GET_ORDER_GROUP from '../graphql/getOrderGroup.graphql'
import OrderPlaced from '../index'
import requestNotFound from '../__mocks__/graphql/not-found.json'
import requestForbidden from '../__mocks__/graphql/forbidden.json'
import { renderWithIntl } from '../utils/testUtils'

const orderGroupId = '123123123'

const requestSample = {
  request: {
    query: GET_ORDER_GROUP,
    name: 'orderGroupQuery',
    variables: { orderGroup: orderGroupId },
  },
}

const { location } = window

beforeAll(() => {
  delete window.location
  window.location = { search: `?og=${orderGroupId}` } as Location
})

afterAll(() => {
  window.location = location
})

beforeEach(() => jest.useFakeTimers())

test('should first render as as skeleton loading', async () => {
  const { container } = renderWithIntl(<OrderPlaced />)

  expect(container.querySelector('.skeleton-shimmer')).toBeTruthy()

  await wait(() => jest.runAllTimers())

  expect(container.querySelector('.skeleton-shimmer')).toBeNull()
})

test('should render an alert for users not logged in', async () => {
  const { queryAllByText } = renderWithIntl(<OrderPlaced />, {
    graphql: {
      mocks: [
        {
          ...requestSample,
          result: requestForbidden,
        },
      ],
    },
  })

  await wait(() => jest.runAllTimers())

  expect(queryAllByText(/permission/)).toBeTruthy()
})

test('should render an alert for invalid orders', async () => {
  const { queryByText } = renderWithIntl(<OrderPlaced />, {
    graphql: {
      mocks: [
        {
          ...requestSample,
          result: requestNotFound,
        },
      ],
    },
  })

  await wait(() => jest.runAllTimers())

  expect(queryByText(/not found/i)).toBeTruthy()
})
