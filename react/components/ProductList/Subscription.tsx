import React, { Fragment, FunctionComponent, useState } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'

import { getSubscriptionInfo } from '../../utils'

const SubscriptionAttachment: FunctionComponent<
  { attachmentItem: Attachment } & InjectedIntlProps
> = ({ attachmentItem, intl }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { subsFrequency, subsPurchaseDay } = getSubscriptionInfo(
    attachmentItem,
    intl
  )

  return (
    <article className="bg-muted-5 pv3 ph5 br2 mv4" key={attachmentItem.name}>
      <div className="flex justify-between">
        <p className="c-on-base">
          {intl.formatMessage({
            id: 'items.attachments.subscription',
          })}
        </p>
        <div className="flex items-center">
          <p className="mr5">
            {intl.formatMessage({ id: 'order.totals.pickup.free' })}
          </p>
          <div className="c-action-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconCaretUp /> : <IconCaretDown />}
          </div>
        </div>
      </div>
      <div hidden={!isOpen}>
        <Fragment>
          <p className="c-muted-1">{subsFrequency}</p>
          {subsPurchaseDay && <p className="c-muted-1">{subsPurchaseDay}</p>}
        </Fragment>
      </div>
    </article>
  )
}

export default injectIntl(SubscriptionAttachment)
