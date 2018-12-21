import React from 'react'
import PropTypes from 'prop-types'

const CustumerInfo = ({ profile }) => {
  return (
    <div className="flex flex-column">
      <ul className="list pl0 c-on-base">
        <li className="pv2">{`${profile.firstName} ${profile.lastName}`}</li>
        <li className="pv2">{profile.email}</li>
        <li className="pv2">CPF {profile.document}</li>
        <li className="pv2">{profile.phone}</li>
      </ul>
    </div>
  )
}

CustumerInfo.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default CustumerInfo
