import React from 'react'

const Example = ({ orderGroup }) => {
  return <h1>Hello {orderGroup.orders[0].clientProfileData.firstName}</h1>
}

export default Example
