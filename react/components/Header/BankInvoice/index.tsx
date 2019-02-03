import React, { FunctionComponent } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import PrinterIcon from '../../../Icons/PrinterIcon'
import ButtonLink from '../../ButtonLink'
import BarCode from './BarCode'
import Embedded from './Embedded'
interface Props {
  url: string
  encrypted: boolean
  invoiceBarCodeNumber?: string
  paymentSystem: string
}

const BankInvoice: FunctionComponent<Props & InjectedIntlProps> = ({
  url,
  encrypted,
  invoiceBarCodeNumber,
  paymentSystem,
  intl,
}) => (
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
      {invoiceBarCodeNumber && <BarCode barCodeNumber={invoiceBarCodeNumber} />}
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

export default injectIntl(BankInvoice)
