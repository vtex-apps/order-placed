import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonWithIcon } from 'vtex.styleguide'

import PrinterIcon from './Icons/PrinterIcon'
import BarCode from './components/BankInvoice/BarCode'
import Embedded from './components/BankInvoice/Embedded'
import { useOrderGroup } from './components/OrderGroupContext'
import { getPaymentInfoFromOrder, parseBankInvoiceUrl } from './utils'
import Section from './Section'

const BankInvoiceSection: FC = () => {
  const orderGroup = useOrderGroup()
  const paymentInfo = getPaymentInfoFromOrder(orderGroup.orders[0])

  if (paymentInfo?.paymentGroup !== 'bankInvoice') {
    return null
  }

  const { url, paymentSystemName, barCodeNumber } = paymentInfo
  const isURLValid = url && !url.match(/(\*.\*.)+\*\w\*/g)

  if (!isURLValid && !barCodeNumber) {
    return null
  }

  const parsedUrl = url ? parseBankInvoiceUrl(url) : ''

  return (
    <Section
      name="bank-invoice"
      marginBottom={9}
      paddingBottom={9}
      width={{ mobile: '90%', desktop: '80%' }}
    >
      <header className="t-heading-4">
        <FormattedMessage
          id="store/header.bankinvoice.header"
          values={{ paymentSystemName }}
        />
      </header>
      <div className="flex-l justify-between items-center mt6">
        {barCodeNumber && <BarCode barCodeNumber={barCodeNumber} />}
        {isURLValid && (
          <div className={`mt5 mt0-l ${barCodeNumber ? 'ml5-l' : ''}`}>
            <ButtonWithIcon
              href={parsedUrl}
              icon={<PrinterIcon />}
              variation="secondary"
              target="_blank"
            >
              <FormattedMessage
                id="store/header.bankinvoice.print"
                values={{ paymentSystemName }}
              />
            </ButtonWithIcon>
          </div>
        )}
      </div>
      {isURLValid && (
        <div className="mt6">
          <Embedded url={parsedUrl} />
        </div>
      )}
    </Section>
  )
}

export default BankInvoiceSection
