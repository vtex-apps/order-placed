import React, { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { ProductImage } from 'vtex.order-details'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'

import { isSubscription } from '../../utils'
import FormattedPrice from '../FormattedPrice'
import Subscription from './Subscription'

interface Props {
  product: OrderItem
}

const ProductAttachment: FC<Props> = ({ product }) => {
  const { bundleItems: bundleInfo, attachments: attachmentsInfo } = product
  const [isOpen, setIsOpen] = useState(false)

  if (bundleInfo == null || attachmentsInfo == null) {
    return null
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== ' ' && e.key !== 'Enter') {
      return
    }

    setIsOpen(!isOpen)
  }

  return (
    <div className="mt7">
      {bundleInfo &&
        bundleInfo.map(bundleItem => {
          const hasAttachments =
            bundleItem.attachments && bundleItem.attachments.length > 0
          const isMessage =
            hasAttachments && bundleItem.attachments[0].name === 'message'

          return (
            <div className="bg-muted-5 pv3 ph5 br2 mv4" key={bundleItem.id}>
              <div className="flex justify-between">
                {bundleItem.imageUrl && (
                  <ProductImage
                    url={bundleItem.imageUrl}
                    alt={bundleItem.name}
                  />
                )}
                <p className="c-on-base">{bundleItem.name}</p>
                <div className="flex items-center">
                  <FormattedPrice value={bundleItem.price} />
                  {hasAttachments && (
                    <div
                      role="button"
                      tabIndex={0}
                      className="c-action-primary ml5"
                      onKeyDown={handleKeyDown}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? <IconCaretUp /> : <IconCaretDown />}
                    </div>
                  )}
                </div>
              </div>
              {hasAttachments && (
                <div hidden={!isOpen}>
                  {isMessage && (
                    <p className="c-muted-1">
                      {bundleItem.attachments[0].content.text}
                    </p>
                  )}
                  {!isMessage &&
                    bundleItem.attachments.map(attachmentItem => {
                      Object.keys(attachmentItem.content).map(key => {
                        const contentLabel = key
                        const contentValue = attachmentItem.content[key]
                        return (
                          <p className="c-muted-1" key={key}>
                            {`${contentLabel}: ${contentValue}`}
                          </p>
                        )
                      })
                    })}
                </div>
              )}
            </div>
          )
        })}
      {attachmentsInfo.length > 0 &&
        attachmentsInfo.map((attachmentItem, index) => {
          if (isSubscription(attachmentItem)) {
            return <Subscription attachmentItem={attachmentItem} key={index} />
          }

          return (
            <div
              className="bg-muted-5 pv3 ph5 br2 mv4"
              key={attachmentItem.name}
            >
              <div className="flex justify-between">
                <p className="c-on-base">{attachmentItem.name}</p>
                <div className="flex items-center">
                  <p className="mr5">
                    <FormattedMessage id="store/order.totals.pickup.free" />
                  </p>
                  {attachmentItem.content && (
                    <div
                      role="button"
                      tabIndex={0}
                      className="c-action-primary"
                      onKeyDown={handleKeyDown}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? <IconCaretUp /> : <IconCaretDown />}
                    </div>
                  )}
                </div>
              </div>
              {attachmentItem.content && (
                <div hidden={!isOpen}>
                  {Object.keys(attachmentItem.content).map(key => {
                    const contentLabel = key
                    const contentValue = attachmentItem.content[key]
                    return (
                      <p className="c-muted-1" key={key}>
                        {`${contentLabel}: ${contentValue}`}
                      </p>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default ProductAttachment
