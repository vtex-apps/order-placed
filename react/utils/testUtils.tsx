import React, { ReactElement } from 'react'
import { render } from '@vtex/test-tools/react'
import { IntlProvider } from 'react-intl'

import * as defaultStrings from '../../messages/en.json'

export const renderWithIntl = (component: ReactElement, options?: any) => {
  return render(
    <IntlProvider locale="en-US" messages={defaultStrings}>
      {component}
    </IntlProvider>,
    options
  )
}
