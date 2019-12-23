import get from 'lodash/get'
import flow from 'lodash/flow'
import toPairs from 'lodash/toPairs'
import filter from 'lodash/filter'
import map from 'lodash/map'
import { defineMessages } from 'react-intl'

export interface PaymentGroupInfo {
  barCodeNumber: string | null
  barCodePNG: string | null
  dueDate: string | null
  paymentGroup: string
  paymentSystemName: string
  url: string | null
  value: number
}

const messages = defineMessages({
  frequencyDay: {
    id: 'store/items.attachments.subscription.frequency.day',
    defaultMessage: '',
  },
  frequencyMonth: {
    id: 'store/items.attachments.subscription.frequency.month',
    defaultMessage: '',
  },
  frequencyWeek: {
    id: 'store/items.attachments.subscription.frequency.week',
    defaultMessage: '',
  },
  frequencyYear: {
    id: 'store/items.attachments.subscription.frequency.year',
    defaultMessage: '',
  },
  purchaseDay: {
    id: 'store/items.attachments.subscription.purchaseday',
    defaultMessage: '',
  },
})

function hasValueAndIsNotPrivate(connectorResponses: ConnectorResponses) {
  return filter(connectorResponses, c => c[0] && c[1] && c[0].charAt(0) !== '_')
}

function toKeyValue(connectorResponses: ConnectorResponses) {
  return map(connectorResponses, c => ({ key: c[0], value: c[1] }))
}

export function transformConnectorResponsesToArray(
  connectorResponses: ConnectorResponses
): ConnectorResponse[] {
  return flow([toPairs, hasValueAndIsNotPrivate, toKeyValue])(
    connectorResponses
  )
}

export function getPaymentInfoFromOrder(order: Order): PaymentGroupInfo {
  const base = 'paymentData.transactions[0].payments[0]'

  return {
    barCodeNumber: get(
      order,
      `${base}.bankIssuedInvoiceIdentificationNumber`,
      null
    ),
    barCodePNG: get(order, `${base}.bankIssuedInvoiceBarCodePNG`, null),
    dueDate: get(order, `${base}.dueDate`, null),
    paymentGroup: get(order, `${base}.group`, null),
    paymentSystemName: get(order, `${base}.paymentSystemName`, null),
    url: get(order, `${base}.url`, null),
    value: get(order, `${base}.value`, null),
  }
}

export function isSubscription(attachmentItem: Attachment) {
  return attachmentItem.name.indexOf('vtex.subscription') === 0
}

export function getSubscriptionInfo(attachmentItem: Attachment, intl: any) {
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
          id: `store/items.attachments.subscription.frequency.${
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
        id: `store/items.attachments.subscription.frequency.${
          (wordlyPeriodRegex.exec(subsFrequency) || [])[1]
        }`,
      })

  const subsPurchaseDayString =
    subsPurchaseDay !== ''
      ? intl.formatMessage(messages.purchaseDay, {
          purchaseday: subsPurchaseDay,
        })
      : null

  return {
    subsFrequency: subsFrequencyString,
    subsPurchaseDay: subsPurchaseDayString,
    subsValidityBegin,
    subsValidityEnd,
  }
}

export function parseBankInvoiceUrl(url: string) {
  const isEncrypted = !!url.match(/(\*.\*.)+\*\w\*/g)
  if (!isEncrypted) return url

  return `${get(
    window,
    '__RUNTIME__.rootPath',
    ''
  )}/login?returnUrl=${encodeURIComponent(
    window.location.pathname + window.location.search
  )}`
}
