import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { intlMessage } from '../../../utils'
import PrinterIcon from '../../../Icons/PrinterIcon'
import BarCode from './BarCode'
import Embedded from './Embedded'
import ButtonLink from '../../ButtonLink'

const BankInvoice = ({ url, invoiceBarCodeNumber, intl }) => (
  <section
    data-testid="bank-invoice-info"
    className="pv4 w-80-ns w-90 center bb b--muted-5"
  >
    <header className="t-heading-4">
      {intlMessage(intl, 'header.bankinvoice.header')}
    </header>
    <article className="flex justify-between items-center">
      {invoiceBarCodeNumber && <BarCode barCodeNumber={invoiceBarCodeNumber} />}
      <ButtonLink url={url} icon={<PrinterIcon />} variation="secondary">
        {intlMessage(intl, 'header.bankinvoice.print')}
      </ButtonLink>
    </article>
    <article>
      <Embedded url={url} />
    </article>
  </section>
)

BankInvoice.propTypes = {
  url: PropTypes.string,
  invoiceBarCodeNumber: PropTypes.string,
  intl: intlShape.isRequired,
}

export default injectIntl(BankInvoice)
