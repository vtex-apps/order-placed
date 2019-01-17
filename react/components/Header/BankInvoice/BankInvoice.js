import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import { injectIntl, intlShape } from 'react-intl'
import { intlMessage } from '../../../utils'
import PrinterIcon from '../../../Icons/PrinterIcon'
import BarCode from './BarCode'
import Embeded from './Embeded'

const BankInvoice = ({ url, invoiceBarCodeNumber, intl }) => (
  <div className="pv4 w-80-ns w-90 center bb b--muted-5">
    <p className="t-heading-4">
      {intlMessage(intl, 'header.bankinvoice.header')}
    </p>
    <div className="flex justify-between items-center">
      {invoiceBarCodeNumber && <BarCode barCodeNumber={invoiceBarCodeNumber} />}
      <a href={url}>
        <Button variation="secondary">
          <div className="mr3">
            <PrinterIcon />
          </div>
          {intlMessage(intl, 'header.bankinvoice.print')}
        </Button>
      </a>
    </div>
    <Embeded url={url} />
  </div>
)

BankInvoice.propTypes = {
  url: PropTypes.string,
  invoiceBarCodeNumber: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(BankInvoice)
