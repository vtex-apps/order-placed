import get from 'lodash/get'

export const getPaymentGroupFromOrder = (order: Order) => {
  const base = 'paymentData.transactions[0].payments[0]'

  return {
    barCodeNumber: get(order, `${base}.bankIssuedInvoiceBarCodeNumber`, null),
    barCodePNG: get(order, `${base}.bankIssuedInvoiceBarCodePNG`, null),
    dueDate: get(order, `${base}.dueDate`, null),
    paymentGroup: get(order, `${base}.group`, null),
    paymentSystemName: get(order, `${base}.paymentSystemName`, null),
    url: get(order, `${base}.url`, null),
    value: get(order, `${base}.value`, null),
  }
}

export interface PaymentGroupInfo {
  barCodeNumber: string | null
  barCodePNG: string | null
  dueDate: string | null
  paymentGroup: string
  paymentSystemName: string
  url: string | null
  value: number
}

export const isSubscription = (attachmentItem: Attachment) =>
  attachmentItem.name.indexOf('vtex.subscription') === 0

export const getSubscriptionInfo = (
  attachmentItem: Attachment,
  intl: ReactIntl.InjectedIntl
) => {
  if (!isSubscription(attachmentItem)) {
    return {}
  }
  const vtexSubsPrefix = 'vtex.subscription.key.'
  const subsFrequency: string =
    attachmentItem.content[`${vtexSubsPrefix}frequency`]
  const subsPurchaseDay = attachmentItem.content[`${vtexSubsPrefix}purchaseday`]
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
    subsFrequency: subsFrequencyString,
    subsPurchaseDay: subsPurchaseDayString,
    subsValidityBegin,
    subsValidityEnd,
  }
}

export const orderSplitMessage = ({
  deliveries,
  pickups,
  takeaways,
  intl,
}: {
  deliveries: number
  pickups: number
  takeaways: number
  intl: ReactIntl.InjectedIntl
}) => {
  const nPickups = pickups > 1
  const nTakeaways = takeaways > 1

  if (nPickups && nTakeaways) {
    return intl.formatMessage(
      { id: 'order.split.n.pickup.n.takeaway' },
      { deliveries, pickups, takeaways }
    )
  } else if (nTakeaways) {
    return intl.formatMessage(
      { id: 'order.split.no.pickup.n.takeaway' },
      { deliveries, pickups, takeaways }
    )
  } else if (nPickups) {
    return intl.formatMessage(
      { id: 'order.split.n.pickup.no.takeaway' },
      { deliveries, pickups, takeaways }
    )
  }

  return intl.formatMessage(
    { id: 'order.split.no.pickup.no.takeaway' },
    { deliveries, pickups, takeaways }
  )
}
