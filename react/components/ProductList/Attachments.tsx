import React, { FC, Fragment, ReactNode } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { isSubscription, getSubscriptionInfo } from '../../utils'
import AttachmentAccordion from './AttachmentAccordion'

interface Props {
  product: OrderItem
}

const ProductAttachment: FC<Props> = ({ product }) => {
  const intl = useIntl()
  const { attachments } = product

  if (!attachments?.length) {
    return null
  }

  return (
    <Fragment>
      {attachments.map((attachmentItem) => {
        let content: string[]
        let titleLabel: string | ReactNode
        let toggleLabel: string | ReactNode

        if (isSubscription(attachmentItem)) {
          const { subsFrequency, subsPurchaseDay } = getSubscriptionInfo(
            attachmentItem,
            intl
          )
          titleLabel = (
            <FormattedMessage id="store/items.attachments.subscription" />
          )
          content = [subsFrequency, subsPurchaseDay]
        } else {
          titleLabel = attachmentItem.name
          toggleLabel = <FormattedMessage id="store/order.totals.pickup.free" />
          content = Object.keys(attachmentItem.content).map(
            (key) => `${key}: ${attachmentItem.content[key]}`
          )
        }

        return (
          <AttachmentAccordion
            key={attachmentItem.name}
            titleLabel={titleLabel}
            toggleLabel={toggleLabel}
            content={content}
          />
        )
      })}
    </Fragment>
  )
}

export default ProductAttachment
