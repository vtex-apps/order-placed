import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import PrinterIcon from './Icons/PrinterIcon'
import ButtonLink from './components/ButtonLink'
import BarCode from './components/BankInvoice/BarCode'
import Embedded from './components/BankInvoice/Embedded'
import { useOrderGroup } from './components/OrderGroupContext'
import { getPaymentGroupFromOrder, parseBankInvoiceUrl } from './utils'

const BankInvoice: FC = () => {
  const orderGroup = useOrderGroup()
  const bankInvoice = getPaymentGroupFromOrder(orderGroup.orders[0])

  if (bankInvoice?.paymentGroup !== 'bankInvoice') {
    return null
  }

  const { url, paymentSystemName, barCodeNumber } = bankInvoice
  const isURLEncrypted = url && !!url.match(/(\*.\*.)+\*\w\*/g)
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
      <article className="flex-l justify-between items-center mv6">
        {barCodeNumber && <BarCode barCodeNumber={barCodeNumber} />}
        {isURLValid && (
          <div className="mt5 ml5-l mt0-l">
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
          </div>
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
