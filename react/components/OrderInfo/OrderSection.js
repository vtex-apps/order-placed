import React from 'react'
import PropTypes from 'prop-types'

function OrderSection({ children }) {
  return <div className="bb b--muted-5">{children}</div>
}

OrderSection.propTypes = {
  children: PropTypes.node.isRequired
}

export default OrderSection
