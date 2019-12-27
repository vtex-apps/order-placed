import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonWithIcon, IconCaretDown, IconCaretUp } from 'vtex.styleguide'

interface Props {
  url: string
}

const Embedded: FC<Props> = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="b--muted-4 ba br3 bw1">
      <div className="bg-muted-1">
        <embed
          width="100%"
          height={isOpen ? 900 : 300}
          src={url}
          data-testid="embedded-bank-invoice"
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
