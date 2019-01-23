import React from 'react'
import PropTypes from 'prop-types'

function OrderSection({ children }) {
  return <section className="bb b--muted-5">{children}</section>
}

OrderSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default OrderSection
