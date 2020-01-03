import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonLink } from 'vtex.order-details'

import PrinterIcon from './icons/PrinterIcon'
import BarCode from './components/BankInvoice/BarCode'
import Embedded from './components/BankInvoice/Embedded'
import { useOrderGroup } from './components/OrderGroupContext'
import { getPaymentInfoFromOrder, parseBankInvoiceUrl } from './utils'

const OrderPlacedBankInvoice: FC = () => {
  const orderGroup = useOrderGroup()
  const paymentInfo = getPaymentInfoFromOrder(orderGroup.orders[0])

  if (paymentInfo?.paymentGroup !== 'bankInvoice') {
    return null
  }

  const { url, paymentSystemName, barCodeNumber } = paymentInfo
  const isURLValid = url && !url.match(/(\*.\*.)+\*\w\*/g)
  const hideBankInvoiceInfo = !isURLValid && !barCodeNumber

  if (hideBankInvoiceInfo) {
    return null
  }

  const parsedUrl = url && isURLValid ? parseBankInvoiceUrl(url) : ''

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
      <div className="flex-l justify-between items-center mv6">
        {barCodeNumber && <BarCode barCodeNumber={barCodeNumber} />}
        {isURLValid && (
          <div className={`mt5 mt0-l ${barCodeNumber ? 'ml5-l' : ''}`}>
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
      </div>
      {isURLValid && <Embedded url={parsedUrl} />}
    </section>
  )
}

export default OrderPlacedBankInvoice
