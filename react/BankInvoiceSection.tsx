import React, { FC } from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import { ButtonWithIcon, Tooltip, IconInfo } from 'vtex.styleguide'

import PrinterIcon from './Icons/PrinterIcon'
import BarCode from './components/BankInvoice/BarCode'
import Embedded from './components/BankInvoice/Embedded'
import { useOrderGroup } from './components/OrderGroupContext'
import { getPaymentInfoFromOrder, parseBankInvoiceUrl } from './utils'
import Section from './Section'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'barCodeFlexContainer',
  'printBilletButtonWrapper',
  'printHintWrapper'
]

const messages = defineMessages({
  print: { id: 'store/header.bankinvoice.print', defaultMessage: '' },
  tooltip: { id: 'store/header.bankinvoice.tooltip', defaultMessage: '' },
})

const BankInvoiceSection: FC = () => {
  const orderGroup = useOrderGroup()
  const paymentInfo = getPaymentInfoFromOrder(orderGroup.orders[0])
  const { formatMessage } = useIntl()

  if (paymentInfo?.paymentGroup !== 'bankInvoice') {
    return null
  }

  const { url, paymentSystemName, barCodeNumber } = paymentInfo
  const isURLValid = url && !url.match(/(\*.\*.)+\*\w\*/g)

  if (!isURLValid && !barCodeNumber) {
    return null
  }

  const parsedUrl = url ? parseBankInvoiceUrl(url) : ''
  const printInvoice = formatMessage(messages.print, { paymentSystemName })
  const tooltip = formatMessage(messages.tooltip, {
    paymentSystemName,
    message: `"${printInvoice}"`,
  })

  const handles = useCssHandles(CSS_HANDLES)

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
      <div className={`${handles.barCodeFlexContainer} flex-l justify-between items-center mt6`}>
        {barCodeNumber && <BarCode barCodeNumber={barCodeNumber} />}
        {isURLValid && (
          <div className={`${handles.printBilletButtonWrapper} mt5 mt0-l ${barCodeNumber ? 'ml5-l' : ''}`}>
            <ButtonWithIcon
              href={parsedUrl}
              icon={<PrinterIcon />}
              variation="secondary"
              target="_blank"
            >
              {printInvoice}
            </ButtonWithIcon>
          </div>
        )}
      </div>
      {isURLValid && (
        <div className="mt6">
          <Embedded url={parsedUrl} />
        </div>
      )}
      <div className={`${handles.printHintWrapper} c-muted-1 mt6 t-small mb9 flex`}>
        <FormattedMessage
          id="store/header.bankinvoice.help"
          values={{ paymentSystemName }}
        />
        <Tooltip label={tooltip} position="bottom">
          <span className="c-muted-3 flex items-center ml3">
            <IconInfo size={12} />
          </span>
        </Tooltip>
      </div>
    </Section>
  )
}

export default BankInvoiceSection
