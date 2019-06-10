import { render } from '@vtex/test-tools/react'
import React from 'react'
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
    // @ts-ignore
    window.location = { search: `?og=${orderGroupId}` }
  })

  afterAll(() => {
    window.location = location
  })

  test('should first render as as skeleton loading', async () => {
    const { container } = render(<OrderPlaced />)
    expect(container.querySelector('.skeleton-shimmer')).toBeTruthy()
  })

  test('should render an alert for users not logged in', async () => {
    const mockRequest = {
      ...requestSample,
      error: {
        message: '403: Forbidden',
      },
    }

    const { queryByText } = render(<OrderPlaced />, {
      // @ts-ignore
      graphql: { mocks: [mockRequest] },
    })

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(queryByText(/permission/)).toBeTruthy()
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

    const { queryByText } = render(<OrderPlaced />, {
      // @ts-ignore
      graphql: { mocks: [mockRequest] },
    })

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(queryByText(/not found/)).toBeTruthy()
  })
})
