import React from 'react'

import { renderWithIntl } from '../utils/testUtils'
import * as getOrderGroup from '../graphql/getOrderGroup.graphql'
import OrderPlaced from '../OrderPlaced'

const orderGroupId = '123123123'

const requestSample = {
  request: {
    query: getOrderGroup.default,
    name: 'orderGroupQuery',
    variables: { orderGroup: orderGroupId },
  },
}

describe('OrderPlaced', () => {
  const { location } = window

  beforeAll(() => {
    delete window.location
    window.location = { search: `?og=${orderGroupId}` } as Location
  })

  afterAll(() => {
    window.location = location
  })

  test('should first render as as skeleton loading', async () => {
    const { container } = renderWithIntl(<OrderPlaced />)
    expect(container.querySelector('.skeleton-shimmer')).toBeTruthy()
  })

  test('should render an alert for users not logged in', async () => {
    const mockRequest = {
      ...requestSample,
      error: {
        name: 'erro',
        message: '403: Forbidden',
      },
    }

    const { queryAllByText } = renderWithIntl(<OrderPlaced />, {
      graphql: { mocks: [mockRequest] },
    })

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(queryAllByText(/permission/)).toBeTruthy()
  })

  test('should render an alert for invalid orders', async () => {
    const mockRequest = {
      ...requestSample,
      result: {
        data: {
          orderGroup: null,
        },
      },
    }

    const { queryByText } = renderWithIntl(<OrderPlaced />, {
      graphql: { mocks: [mockRequest] },
    })

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(queryByText(/not found/)).toBeTruthy()
  })
})
