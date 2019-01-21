import React from 'react'
import { profileShape } from '../shapes'
import { intlShape, injectIntl } from 'react-intl'
import { ProfileRules, ProfileSummary } from 'vtex.profile-form'

const CustumerInfo = ({ profile, intl }) => (
  <div className="flex flex-column c-on-base">
    <ProfileRules country={intl.locale} shouldUseIOFetching>
      <ProfileSummary profile={profile}>
        {({ personalData }) => (
          <ul className="list pl0 c-on-base">
            <li className="pv2 c-on-base">
              {`${personalData.firstName.value} ${personalData.lastName.value}`}
            </li>
            <li className="pv2 c-muted-2">{personalData.email.value}</li>
            <li className="pv2 c-muted-2">{personalData.document.value}</li>
            <li className="pv2 c-muted-2">{profile.phone}</li>
          </ul>
        )}
      </ProfileSummary>
    </ProfileRules>
  </div>
)

CustumerInfo.propTypes = {
  profile: profileShape.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(CustumerInfo)
