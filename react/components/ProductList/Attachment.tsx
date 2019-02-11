import React, { Fragment, FunctionComponent, useState } from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'

import { ProductImage } from 'vtex.order-details'
import Price from '../Payment/FormattedPrice'

interface Props {
  attachmentsInfo: Attachment[]
  bundleInfo: Bundle[]
}

const getSubscriptionInfo = (
  attachmentItem: Attachment,
  intl: ReactIntl.InjectedIntl
) => {
  const isSubscription = attachmentItem.name.indexOf('vtex.subscription') === 0
  if (!isSubscription) {
    return { isSubscription: false }
  }
  const vtexSubsPrefix = 'vtex.subscription.key.'
  const subsFrequency: string =
    attachmentItem.content[`${vtexSubsPrefix}frequency`]
  const subsPurchaseDay =
    attachmentItem.content[`${vtexSubsPrefix}purchaseday`]
  const subsValidityBegin =
    attachmentItem.content[`${vtexSubsPrefix}validity.begin`]
  const subsValidityEnd =
    attachmentItem.content[`${vtexSubsPrefix}validity.end`]

  // This matches a key in the format: "3 months"
  const numberPeriodRegex = /([\d]{1,3}) ([A-z]{1,20})/
  // This matches a key in the format: "weekly"
  const wordlyPeriodRegex = /([A-z]{1,20})/

  const subsFrequencyString = numberPeriodRegex.test(subsFrequency)
    ? intl.formatMessage(
        {
          id: `items.attachments.subscription.frequency.${
            (numberPeriodRegex.exec(subsFrequency) || [])[2]
          }`,
        },
        {
          frequencyNumber: parseInt(
            (numberPeriodRegex.exec(subsFrequency) || [])[1],
            10
          ),
        }
      )
    : intl.formatMessage({
        id: `items.attachments.subscription.frequency.${
          (wordlyPeriodRegex.exec(subsFrequency) || [])[1]
        }`,
      })

  const subsPurchaseDayString =
    subsPurchaseDay !== ''
      ? intl.formatMessage(
          { id: 'items.attachments.subscription.purchaseday' },
          { purchaseday: subsPurchaseDay }
        )
      : null

  return {
    isSubscription: true,
    subsFrequency: subsFrequencyString,
    subsPurchaseDay: subsPurchaseDayString,
    subsValidityBegin,
    subsValidityEnd,
  }
}

const ProductAttachment: FunctionComponent<Props & InjectedIntlProps> = ({
  bundleInfo,
  attachmentsInfo,
  intl,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      {bundleInfo &&
        bundleInfo.map(bundleItem => {
          const hasAttachments =
            bundleItem.attachments && bundleItem.attachments.length > 0
          const isMessage =
            hasAttachments && bundleItem.attachments[0].name === 'message'

          return (
            <article className="bg-muted-5 pv3 ph5 br2 mv4" key={bundleItem.id}>
              <div className="flex justify-between">
                {bundleItem.imageUrl && (
                  <ProductImage
                    url={bundleItem.imageUrl}
                    alt={bundleItem.name}
                  />
                )}
                <p className="c-on-base">{bundleItem.name}</p>
                <div className="flex items-center">
                  <Price value={bundleItem.price} />
                  {hasAttachments && (
                    <div
                      className="c-action-primary ml5"
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
            </article>
          )
        })}
      {attachmentsInfo.length > 0 &&
        attachmentsInfo.map(attachmentItem => {
          const {
            isSubscription,
            subsFrequency,
            subsPurchaseDay,
          } = getSubscriptionInfo(attachmentItem, intl)

          return (
            <article
              className="bg-muted-5 pv3 ph5 br2 mv4"
              key={attachmentItem.name}
            >
              <div className="flex justify-between">
                <p className="c-on-base">
                  {isSubscription
                    ? intl.formatMessage({
                        id: 'items.attachments.subscription',
                      })
                    : attachmentItem.name}
                </p>
                <div className="flex items-center">
                  <p className="mr5">
                    {intl.formatMessage({ id: 'order.totals.pickup.free' })}
                  </p>
                  {attachmentItem.content && (
                    <div
                      className="c-action-primary"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? <IconCaretUp /> : <IconCaretDown />}
                    </div>
                  )}
                </div>
              </div>
              {attachmentItem.content && (
                <div hidden={!isOpen}>
                  {isSubscription ? (
                    <Fragment>
                      <p className="c-muted-1">{subsFrequency}</p>
                      {subsPurchaseDay && (
                        <p className="c-muted-1">{subsPurchaseDay}</p>
                      )}
                    </Fragment>
                  ) : (
                    Object.keys(attachmentItem.content).map(key => {
                      const contentLabel = key
                      const contentValue = attachmentItem.content[key]
                      return (
                        <p className="c-muted-1" key={key}>
                          {`${contentLabel}: ${contentValue}`}
                        </p>
                      )
                    })
                  )}
                </div>
              )}
            </article>
          )
        })}
    </Fragment>
  )
}

export default injectIntl(ProductAttachment)
