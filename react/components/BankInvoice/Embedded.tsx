import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonWithIcon, IconCaretDown, IconCaretUp } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'bankInvoiceEmbedWrapper',
  'bankInvoiceEmbedBackground',
  'bankInvoiceEmbed',
]

interface Props {
  url: string
}

const Embedded: FC<Props> = ({ url }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={`${handles.bankInvoiceEmbedWrapper} b--muted-4 ba br3 bw1`}>
      <div className={`${handles.bankInvoiceEmbedBackground} bg-muted-1`}>
        <embed
          width="80%"
          height={isOpen ? 900 : 300}
          src={url}
          data-testid="embedded-bank-invoice"
          className={`${handles.bankInvoiceEmbed} db center`}
        />
      </div>
      {isOpen ? (
        <ButtonWithIcon
          icon={<IconCaretUp />}
          variation="tertiary"
          onClick={toggle}
          block
        >
          <FormattedMessage id="store/header.bankinvoice.embeded.collapse" />
        </ButtonWithIcon>
      ) : (
        <ButtonWithIcon
          icon={<IconCaretDown />}
          variation="tertiary"
          onClick={toggle}
          block
        >
          <FormattedMessage id="store/header.bankinvoice.embeded.expand" />
        </ButtonWithIcon>
      )}
    </div>
  )
}

export default Embedded
