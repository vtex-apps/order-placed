import React, { FunctionComponent } from 'react'
import Clipboard from 'react-clipboard.js'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

const BarCode: FunctionComponent<Props> = ({ barCodeNumber }) => (
  <div
    data-testid="bank-invoice-barcode"
    className="flex b--muted-4 ba br3 bw1">
    <div className="tc ph9">
      <p className="c-on-base">{barCodeNumber}</p>
    </div>
    <Clipboard
      component="div"
      data-clipboard-text={barCodeNumber}
      className="b--muted-4 bl bw1 flex items-center">
      <Button variation="tertiary">
        <FormattedMessage id="store/header.bankinvoice.copy" />
      </Button>
    </Clipboard>
  </div>
)

interface Props {
  barCodeNumber: string
}

export default BarCode
