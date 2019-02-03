import React, { FunctionComponent } from 'react'
import Clipboard from 'react-clipboard.js'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { Button } from 'vtex.styleguide'

interface Props {
  barCodeNumber: string
}

const BarCode: FunctionComponent<Props & InjectedIntlProps> = ({
  barCodeNumber,
  intl,
}) => (
  <div
    data-testid="bank-invoice-barcode"
    className="flex b--muted-4 ba br3 bw1"
  >
    <div className="tc ph9">
      <p className="c-on-base">{barCodeNumber}</p>
    </div>
    <Clipboard
      component="div"
      data-clipboard-text={barCodeNumber}
      className="b--muted-4 bl bw1 flex items-center"
    >
      <Button variation="tertiary">
        {intl.formatMessage({ id: 'header.bankinvoice.copy' })}
      </Button>
    </Clipboard>
  </div>
)

export default injectIntl(BarCode)
