export const getPaymentGroupFromOrder = (order: Order) => ({
  barCodeNumber:
    order.paymentData.transactions[0].payments[0]
      .bankIssuedInvoiceBarCodeNumber,
  barCodePNG:
    order.paymentData.transactions[0].payments[0].bankIssuedInvoiceBarCodePNG,
  dueDate: order.paymentData.transactions[0].payments[0].dueDate,
  paymentGroup: order.paymentData.transactions[0].payments[0].group,
  paymentSystemName:
    order.paymentData.transactions[0].payments[0].paymentSystemName,
  url: order.paymentData.transactions[0].payments[0].url,
  value: order.paymentData.transactions[0].payments[0].value,
})

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
    subsFrequency: subsFrequencyString,
    subsPurchaseDay: subsPurchaseDayString,
    subsValidityBegin,
    subsValidityEnd,
  }
}
