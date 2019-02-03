import React, { Component } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { ButtonWithIcon, IconCaretDown, IconCaretUp } from 'vtex.styleguide'

interface Props {
  url: string
}

interface State {
  open: boolean
}

class Embedded extends Component<Props & InjectedIntlProps> {
  public state = { open: false }

  public handleClick = () => {
    this.setState((prevState: State) => ({ open: !prevState.open }))
  }

  public render() {
    const open = this.state.open
    const { url, intl } = this.props

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
            {intl.formatMessage({ id: 'header.bankinvoice.embeded.collapse' })}
          </ButtonWithIcon>
        ) : (
          <ButtonWithIcon
            icon={<IconCaretDown />}
            variation="tertiary"
            onClick={this.handleClick}
          >
            {intl.formatMessage({ id: 'header.bankinvoice.embeded.expand' })}
          </ButtonWithIcon>
        )}
      </div>
    )
  }
}

export default injectIntl(Embedded)
