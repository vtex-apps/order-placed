import React, { FunctionComponent } from 'react'
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps,
  defineMessages,
} from 'react-intl'
import { ButtonLink } from 'vtex.order-details'
import { IconInfo, Tooltip } from 'vtex.styleguide'

import PrinterIcon from '../../../Icons/PrinterIcon'
import BarCode from './BarCode'
import Embedded from './Embedded'

const messages = defineMessages({
  print: { id: 'store/header.bankinvoice.print', defaultMessage: '' },
  tooltip: { id: 'store/header.backinvoice.tooltip', defaultMessage: '' },
})

const BankInvoice: FunctionComponent<Props & WrappedComponentProps> = ({
  url,
  encrypted,
  invoiceBarCodeNumber,
  paymentSystem,
  intl: { formatMessage },
}) => {
  const printInvoice = formatMessage(messages.print, {
    paymentSystemName: paymentSystem,
  })
  const tooltip = formatMessage(messages.tooltip, {
    paymentSystemName: paymentSystem,
    message: `"${printInvoice}"`,
  })
  return (
    <section
      data-testid="bank-invoice-info"
      className="pv4 mb4 w-80-ns w-90 center bb b--muted-5"
    >
      <header className="t-heading-4">
        <FormattedMessage
          id="store/header.bankinvoice.header"
          values={{ paymentSystemName: paymentSystem }}
        />
      </header>
      <article className="flex justify-between items-center mt6">
        {invoiceBarCodeNumber && (
          <BarCode barCodeNumber={invoiceBarCodeNumber} />
        )}
        <ButtonLink
          to={url}
          icon={<PrinterIcon />}
          variation="secondary"
          openNewWindow
        >
          {printInvoice}
        </ButtonLink>
      </article>
      {!encrypted && (
        <article>
          <Embedded url={url} />
        </article>
      )}
      <div className="c-muted-1 mt6 t-small mb9">
        <FormattedMessage
          id="store/header.backinvoice.help"
          values={{ paymentSystemName: paymentSystem }}
        />
        <Tooltip label={tooltip} position="bottom">
          <span className="c-muted-3 pl2">
            <IconInfo />
          </span>
        </Tooltip>
      </div>
    </section>
  )
}

interface Props {
  url: string
  encrypted: boolean
  invoiceBarCodeNumber: string | null
  paymentSystem: string
}

export default injectIntl(BankInvoice)
