import React, { FunctionComponent } from 'react'
import { Button } from 'vtex.styleguide'
import { FormattedMessage } from 'react-intl'

interface Props {
  onInstall: () => any,
  onDismiss: () => any
}

const InstallBanner: FunctionComponent<Props> = ({ onInstall, onDismiss }) => {
  return (
    <div className="pa6 br2 bg-muted-5 mb8 mw5 w-80-ns w-90 center fr-l">
        <p className="t-body">
          <FormattedMessage id="store/install-banner.title"/>
        </p>
        <p className="t-small c-muted-1">
          <FormattedMessage id="store/install-banner.description"/>
        </p>
        <Button onClick={onDismiss} variation="tertiary" size="small">
          <FormattedMessage id="store/install-banner.dismiss-button.label"/>
        </Button>
        <Button onClick={onInstall} size="small">
          <FormattedMessage id="store/install-banner.install-button.label"/>
        </Button>
    </div>
  )
}

export default InstallBanner