import React, { FC, useState, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'
import { ProductImage } from 'vtex.order-details'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import { isSubscription } from '../../utils'
import FormattedPrice from '../FormattedPrice'
import Subscription from './Subscription'

const CSS_HANDLES = [
  'attachmentWrapper',
  'attachmentHeader',
  'attachmentTitle',
  'attachmentToggleWrapper',
  'attachmentToggleButton',
  'attachmentToggleLabel',
  'attachmentContent',
]

interface Props {
  product: OrderItem
}

const ProductAttachment: FC<Props> = ({ product }) => {
  const handles = useCssHandles(CSS_HANDLES)
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

  const attachmentWrapperClass = `${handles.attachmentWrapper} mt7 pv3 ph5 bg-muted-5 br2`
  const attachmentHeaderClass = `${handles.attachmentHeader} flex justify-between items-center pv4`
  const attachmentTitleClass = `${handles.attachmentTitle} c-on-base`
  const attachmentToggleClass = `${handles.attachmentToggleWrapper} flex items-center`
  const attachmentToggleButtonClass = `${handles.attachmentToggleButton} c-action-primary ml5`
  const attachmentToggleLabel = `${handles.attachmentToggleLabel} mr5`
  const attachmentContentClass = `${handles.attachmentContent} c-muted-1`

  return (
    <Fragment>
      {bundleInfo &&
        bundleInfo.map(bundleItem => {
          const hasAttachments =
            bundleItem.attachments && bundleItem.attachments.length > 0
          const isMessage =
            hasAttachments && bundleItem.attachments[0].name === 'message'

          return (
            <div className={attachmentWrapperClass} key={bundleItem.id}>
              <div className={attachmentHeaderClass}>
                {bundleItem.imageUrl && (
                  <ProductImage
                    url={bundleItem.imageUrl}
                    alt={bundleItem.name}
                  />
                )}
                <span className={attachmentTitleClass}>{bundleItem.name}</span>
                <div className={attachmentToggleClass}>
                  <div className={attachmentToggleLabel}>
                    <FormattedPrice value={bundleItem.price} />
                  </div>
                  {hasAttachments && (
                    <div
                      role="button"
                      tabIndex={0}
                      className={attachmentToggleButtonClass}
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
                    <p className={attachmentContentClass}>
                      {bundleItem.attachments[0].content.text}
                    </p>
                  )}
                  {!isMessage &&
                    bundleItem.attachments.map(attachmentItem => {
                      Object.keys(attachmentItem.content).map(key => {
                        const contentLabel = key
                        const contentValue = attachmentItem.content[key]
                        return (
                          <p className={attachmentContentClass} key={key}>
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
            <div className={attachmentWrapperClass} key={attachmentItem.name}>
              <div className={attachmentHeaderClass}>
                <span className={attachmentTitleClass}>
                  {attachmentItem.name}
                </span>
                <div className={attachmentToggleClass}>
                  <div className={attachmentToggleLabel}>
                    <FormattedMessage id="store/order.totals.pickup.free" />
                  </div>
                  {attachmentItem.content && (
                    <div
                      role="button"
                      tabIndex={0}
                      className={attachmentToggleButtonClass}
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
                      <p className={attachmentContentClass} key={key}>
                        {`${contentLabel}: ${contentValue}`}
                      </p>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
    </Fragment>
  )
}

export default ProductAttachment
