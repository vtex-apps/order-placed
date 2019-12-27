import React, { ReactElement } from 'react'
import { render, queryByText } from '@vtex/test-tools/react'
import { IntlProvider } from 'react-intl'

import * as defaultStrings from '../../messages/en.json'
import { OrderGroupContext } from '../components/OrderGroupContext'
import { OrderContext } from '../components/OrderContext'

export const queryByTextWithMarkup = (container: HTMLElement, regexp: RegExp) =>
  queryByText(container, (_: string, node: HTMLElement) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const hasText = (node: HTMLElement) => !!node.textContent!.match(regexp)
    const childrenDontHaveText = Array.from(node.children).every(
      child => !hasText(child as HTMLElement)
    )
    return hasText(node) && childrenDontHaveText
  })

export const renderWithOrderGroup = (
  orderGroup: OrderGroup,
  component: ReactElement
) => {
  return render(
    <IntlProvider locale="en-US" messages={defaultStrings}>
      <OrderGroupContext.Provider value={orderGroup}>
        {component}
      </OrderGroupContext.Provider>
    </IntlProvider>
  )
}

export const renderWithOrder = (
  orderGroup: OrderGroup,
  component: ReactElement
) => {
  return render(
    <IntlProvider locale="en-US" messages={defaultStrings}>
      <OrderGroupContext.Provider value={orderGroup}>
        <OrderContext.Provider value={orderGroup.orders[0]}>
          {component}
        </OrderContext.Provider>
      </OrderGroupContext.Provider>
    </IntlProvider>
  )
}
