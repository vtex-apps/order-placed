import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonLink } from 'vtex.order-details'

import PrinterIcon from '../../Icons/PrinterIcon'
import BarCode from './BarCode'
import Embedded from './Embedded'

interface Props {
  url: string
  encrypted: boolean
  invoiceBarCodeNumber: string | null
  paymentSystem: string
}

const BankInvoice: FunctionComponent<Props> = ({
  url,
  encrypted,
  invoiceBarCodeNumber,
  paymentSystem,
}) => (
  <section
    data-testid="bank-invoice-info"
    className="mv9 pb9 w-80-ns w-90 center bb b--muted-5"
  >
    <header className="t-heading-4">
      <FormattedMessage
        id="store/header.bankinvoice.header"
        values={{ paymentSystemName: paymentSystem }}
      />
    </header>
    <article className="flex justify-between items-center mv6">
      {invoiceBarCodeNumber && <BarCode barCodeNumber={invoiceBarCodeNumber} />}
      <ButtonLink
        to={url}
        icon={<PrinterIcon />}
        variation="secondary"
        openNewWindow
      >
        <FormattedMessage
          id="store/header.bankinvoice.print"
          values={{ paymentSystemName: paymentSystem }}
        />
      </ButtonLink>
    </article>
    {!encrypted && (
      <article>
        <Embedded url={url} />
      </article>
    )}
  </section>
)

export default BankInvoice
