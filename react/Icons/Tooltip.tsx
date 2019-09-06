import React, { FunctionComponent } from 'react'

import { baseClassname } from './utils'

const Tooltip: FunctionComponent<{ colorToken?: string }> = ({
  colorToken,
}) => (
  <svg
    className={`${baseClassname('tooltip')} ${colorToken ? colorToken : ''}`}
    width="20"
    height="9"
    viewBox="0 0 20 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ paddingLeft: `${7.75}rem` }}>
    <path
      d="M12.1213 1.12132L20 9L0 9L7.87868 1.12132C9.05025 -0.050251 10.9497 -0.0502493 12.1213 1.12132Z"
      fill="currentColor"
    />
  </svg>
)

export default Tooltip
