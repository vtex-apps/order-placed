import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonWithIcon, IconCaretDown, IconCaretUp } from 'vtex.styleguide'

class Embedded extends Component<Props> {
  public state = { open: false }

  public handleClick = () => {
    this.setState((prevState: State) => ({ open: !prevState.open }))
  }

  public render() {
    const open = this.state.open
    const { url } = this.props

    return (
      <div className="mv9 flex flex-column b--muted-4 ba br3 bw1">
        <div className="bg-muted-1 flex justify-center">
          <embed
            width="80%"
            height={open ? 900 : 300}
            src={url}
            data-testid="embedded-bank-invoice"
          />
        </div>
        {open ? (
          <ButtonWithIcon
            icon={<IconCaretUp />}
            variation="tertiary"
            onClick={this.handleClick}
          >
            <FormattedMessage id="store/header.bankinvoice.embeded.collapse" />
          </ButtonWithIcon>
        ) : (
          <ButtonWithIcon
            icon={<IconCaretDown />}
            variation="tertiary"
            onClick={this.handleClick}
          >
            <FormattedMessage id="store/header.bankinvoice.embeded.expand" />
          </ButtonWithIcon>
        )}
      </div>
    )
  }
}

interface Props {
  url: string
}

interface State {
  open: boolean
}

export default Embedded
