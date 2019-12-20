import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonLink } from 'vtex.order-details'

import PrinterIcon from './Icons/PrinterIcon'
import BarCode from './components/BankInvoice/BarCode'
import Embedded from './components/BankInvoice/Embedded'
import { getPaymentGroupFromOrder, parseBankInvoiceUrl } from './utils'
import { useOrderGroup } from './components/OrderGroupContext'

const BankInvoice: FC = () => {
  const orderGroup = useOrderGroup()

  const bankInvoice = getPaymentGroupFromOrder(orderGroup.orders[0])

  if (bankInvoice == null) {
    return null
  }

  const { url, paymentSystemName, barCodeNumber } = bankInvoice
  const isURLEncrypted = !!(url && url.match(/(\*.\*.)+\*\w\*/g))
  const isURLValid = !isURLEncrypted
  const hideBankInvoiceInfo = !isURLValid && !barCodeNumber

  if (hideBankInvoiceInfo) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const parsedUrl = parseBankInvoiceUrl(url!)

  return (
    <section
      data-testid="bank-invoice-info"
      className="mv9 pb9 w-80-ns w-90 center bb b--muted-5"
    >
      <header className="t-heading-4">
        <FormattedMessage
          id="store/header.bankinvoice.header"
          values={{ paymentSystemName }}
        />
      </header>
      <article className="flex justify-between items-center mv6">
        {barCodeNumber && <BarCode barCodeNumber={barCodeNumber} />}
        {isURLValid && (
          <ButtonLink
            to={parsedUrl}
            icon={<PrinterIcon />}
            variation="secondary"
            openNewWindow
          >
            <FormattedMessage
              id="store/header.bankinvoice.print"
              values={{ paymentSystemName }}
            />
          </ButtonLink>
        )}
      </article>
      {isURLValid && (
        <article>
          <Embedded url={parsedUrl} />
        </article>
      )}
    </section>
  )
}

export default BankInvoice
