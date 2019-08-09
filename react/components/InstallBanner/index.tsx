import React, { FunctionComponent } from 'react'
import { Button } from 'vtex.styleguide'

interface Props {
  onInstall: () => any,
  title: string,
  description: string
}

const InstallBanner: FunctionComponent<Props> = ({
  onInstall,
  title,
  description
}) => {
  return (
    <div>
      <h1>Install</h1>
      <h2>lalala</h2>
      <Button variation="tertiary">Not now</Button>
      <Button onClick={onInstall}>Install</Button>
    </div>
  )
}

InstallBanner.schema = {
  title: ''
}

export default InstallBanner