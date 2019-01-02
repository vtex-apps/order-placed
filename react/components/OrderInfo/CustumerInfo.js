import React from 'react'
import { profileType } from '../../proptypes/shapes'

const CustumerInfo = ({ profile }) => (
  <div className="flex flex-column">
    <ul className="list pl0 c-on-base">
      <li className="pv2">{`${profile.firstName} ${profile.lastName}`}</li>
      <li className="pv2">{profile.email}</li>
      <li className="pv2">CPF {profile.document}</li>
      <li className="pv2">{profile.phone}</li>
    </ul>
  </div>
)

CustumerInfo.propTypes = {
  profile: profileType.isRequired,
}

export default CustumerInfo
