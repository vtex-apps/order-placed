import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import SuccessIcon from '../../Icons/Success'
import { profileShape } from '../../shapes'
import Warnings from './Warnings'
import Summary from './Summary'
import { FormattedMessage, intlShape, injectIntl } from 'react-intl'

const Header = ({ data, profile, intl }) => {
  return (
    <div className="pt7 sans-serif">
      <div className="flex justify-center c-success">
        <SuccessIcon size={50} />
      </div>

      <p className="tc c-on-base mt7 mb0 t-heading-4">
        { intl.formatMessage({ id: 'header.thanks' }) }
      </p>

      <p className="center mt4 t-body tc c-muted-1 lh-copy">
        <FormattedMessage
          id="header.email"
          values={{
            userEmail: (
              <strong className="nowrap">{profile.email}</strong>
            ),
            lineBreak: (
              <br />
            ),
          }}
        />
      </p>

      <div className="flex justify-center t-action mt7">
        <p className="tr c-action-primary mr2">
          <Button variation="secondary">
            { intl.formatMessage({ id: 'header.email.button' }) }
          </Button>
        </p>
        <p className="tr c-action-primary ml2">
          <Button variation="secondary">
            { intl.formatMessage({ id: 'header.print.button' }) }
          </Button>
        </p>
      </div>
      <Warnings data={data} />
      <Summary data={data} />
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
  profile: profileShape.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Header)
