import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import PrinterIcon from '../../../Icons/PrinterIcon'
import BarCode from './BarCode'
import Embedded from './Embedded'
import ButtonLink from '../../ButtonLink'

const BankInvoice = ({
  url,
  encrypted,
  invoiceBarCodeNumber,
  paymentSystem,
  intl,
}) => {
  return (
    <section
      data-testid="bank-invoice-info"
      className="pv4 w-80-ns w-90 center bb b--muted-5"
    >
      <header className="t-heading-4">
        {intl.formatMessage(
          { id: 'header.bankinvoice.header' },
          { paymentSystemName: paymentSystem }
        )}
      </header>
      <article className="flex justify-between items-center">
        {invoiceBarCodeNumber && (
          <BarCode barCodeNumber={invoiceBarCodeNumber} />
        )}
        <ButtonLink url={url} icon={<PrinterIcon />} variation="secondary">
          {intl.formatMessage(
            { id: 'header.bankinvoice.print' },
            { paymentSystemName: paymentSystem }
          )}
        </ButtonLink>
      </article>
      {!encrypted && (
        <article>
          <Embedded url={url} />
        </article>
      )}
    </section>
  )
}

BankInvoice.propTypes = {
  url: PropTypes.string,
  encrypted: PropTypes.bool,
  invoiceBarCodeNumber: PropTypes.string,
  paymentSystem: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(BankInvoice)
