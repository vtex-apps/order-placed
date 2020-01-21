import React, { ReactElement } from 'react'
import { render, queryByText } from '@vtex/test-tools/react'
import { IntlProvider } from 'react-intl'

import * as defaultStrings from '../../messages/en.json'
import { OrderGroupContext } from '../components/OrderGroupContext'
import { OrderContext } from '../components/OrderContext'
import { CurrencyContext } from '../components/CurrencyContext'

const doesNodeMatchesText = (node: HTMLElement, regexp: RegExp) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  !!node.textContent!.match(regexp)

export const queryByTextWithMarkup = (container: HTMLElement, regexp: RegExp) =>
  queryByText(container, (_: string, node: HTMLElement) => {
    const childrenDontHaveText = Array.from(node.children).every(
      child => !doesNodeMatchesText(child as HTMLElement, regexp)
    )
    return doesNodeMatchesText(node, regexp) && childrenDontHaveText
  })

export const renderWithIntl = (component: ReactElement, options?: any) => {
  return render(
    <IntlProvider locale="en-US" messages={defaultStrings}>
      {component}
    </IntlProvider>,
    options
  )
}

export const renderWithOrderGroup = (
  orderGroup: OrderGroup,
  component: ReactElement,
  options?: any
) => {
  return renderWithIntl(
    <CurrencyContext.Provider value="BRL">
      <OrderGroupContext.Provider value={orderGroup}>
        {component}
      </OrderGroupContext.Provider>
    </CurrencyContext.Provider>,
    options
  )
}

export const renderWithOrder = (
  orderGroup: OrderGroup,
  component: ReactElement,
  options?: any
) => {
  return renderWithOrderGroup(
    orderGroup,
    <OrderContext.Provider value={orderGroup.orders[0]}>
      {component}
    </OrderContext.Provider>,
    options
  )
}
