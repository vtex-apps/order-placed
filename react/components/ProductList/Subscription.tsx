import React, { FC, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import { getSubscriptionInfo } from '../../utils'

const CSS_HANDLES = [
  'attachmentWrapper',
  'attachmentHeader',
  'attachmentTitleClass',
  'attachmentToggleWrapper',
  'attachmentToggleButton',
  'attachmentToggleLabel',
  'attachmentContent',
]

interface Props {
  attachmentItem: Attachment
}

const SubscriptionAttachment: FC<Props> = ({ attachmentItem }) => {
  const handles = useCssHandles(CSS_HANDLES)
  handles
  const intl = useIntl()
  const [isOpen, setIsOpen] = useState(false)

  const { subsFrequency, subsPurchaseDay } = getSubscriptionInfo(
    attachmentItem,
    intl
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== ' ' && e.key !== 'Enter') {
      return
    }
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`${handles.attachmentWrapper} bg-muted-5 pv3 ph5 br2 mv4`}
      key={attachmentItem.name}
    >
      <div className={`${handles.attachmentHeader} flex justify-between pv4`}>
        <span className={`${handles.attachmentTitle} c-on-base`}>
          <FormattedMessage id="store/items.attachments.subscription" />
        </span>
        <div className={`${handles.attachmentToggleWrapper} flex items-center`}>
          <div className={`${handles.attachmentToggleLabel} mr5`}>
            <FormattedMessage id="store/order.totals.pickup.free" />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`${handles.attachmentToggleButton} c-action-primary`}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
          >
            {isOpen ? <IconCaretUp /> : <IconCaretDown />}
          </div>
        </div>
      </div>
      <div hidden={!isOpen}>
        <p className={`${handles.attachmentContent} c-muted-1`}>
          {subsFrequency}
        </p>
        {subsPurchaseDay && (
          <p className={`${handles.attachmentContent} c-muted-1`}>
            {subsPurchaseDay}
          </p>
        )}
      </div>
    </div>
  )
}

export default SubscriptionAttachment
