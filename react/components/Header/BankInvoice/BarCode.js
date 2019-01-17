import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import Clipboard from 'react-clipboard.js'
import { injectIntl, intlShape } from 'react-intl'
import { intlMessage } from '../../../utils'

const BarCode = ({ barCodeNumber, intl }) => {
  return (
    <div className="flex b--muted-4 ba br3 bw1">
      <div className="tc ph9">
        <p className="c-on-base">{barCodeNumber}</p>
      </div>
      <Clipboard
        component="div"
        data-clipboard-text={barCodeNumber}
        className="b--muted-4 bl bw1 flex items-center"
      >
        <Button variation="tertiary">
          {intlMessage(intl, 'header.bankinvoice.copy')}
        </Button>
      </Clipboard>
    </div>
  )
}

BarCode.propTypes = {
  barCodeNumber: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(BarCode)
