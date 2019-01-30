import React, { Component } from 'react'
import PropType from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { ButtonWithIcon, IconCaretDown, IconCaretUp } from 'vtex.styleguide'

class Embedded extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render() {
    const open = this.state.open
    const { url, intl } = this.props

    return (
      <div className="mv9 flex flex-column b--muted-4 ba br3 bw1">
        <div className="bg-muted-1 flex justify-center">
          <embed width="80%" height={open ? 900 : 300} src={url} />
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

Embedded.propTypes = {
  url: PropType.string.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(Embedded)
