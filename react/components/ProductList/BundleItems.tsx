import React, { FC, Fragment } from 'react'
import { ProductImage } from 'thefoschini.order-details'

import FormattedPrice from '../FormattedPrice'
import AttachmentAccordion from './AttachmentAccordion'

interface Props {
  product: OrderItem
}

const BundleItems: FC<Props> = ({ product }) => {
  const { bundleItems } = product

  if (!bundleItems?.length) {
    return null
  }

  return (
    <Fragment>
      {bundleItems.map((bundleItem) => {
        const isMessage = bundleItem?.attachments?.[0]?.name === 'message'
        const content = isMessage
          ? [bundleItem.attachments[0].content.text]
          : ([] as string[]).concat(
              ...bundleItem.attachments.map((attachmentItem) => {
                return Object.keys(attachmentItem.content).map(
                  (key) => `${key}: ${attachmentItem.content[key]}`
                )
              })
            )

        return (
          <AttachmentAccordion
            key={bundleItem.id}
            beforeTitleLabel={
              bundleItem.imageUrl && (
                <ProductImage url={bundleItem.imageUrl} alt={bundleItem.name} />
              )
            }
            titleLabel={bundleItem.name}
            toggleLabel={<FormattedPrice value={bundleItem.price} />}
            content={content}
          />
        )
      })}
    </Fragment>
  )
}

export default BundleItems
