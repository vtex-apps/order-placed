import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { ProfileRules, ProfileSummary } from 'vtex.profile-form'

interface Props {
  profile: ClientProfile
}

const CustomerInfo: FunctionComponent<Props & InjectedIntlProps> = ({
  profile,
  intl,
}) => (
  <div className="flex flex-column c-on-base">
    <ProfileRules country={intl.locale} shouldUseIOFetching>
      <ProfileSummary profile={profile}>
        {({ personalData }: any) => (
          <ul className="list pl0">
            <li className="pv2">
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

export default injectIntl(CustomerInfo)
