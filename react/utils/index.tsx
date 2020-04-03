import get from 'lodash/get'
import flow from 'lodash/flow'
import toPairs from 'lodash/toPairs'
import filter from 'lodash/filter'
import map from 'lodash/map'
import { defineMessages, WrappedComponentProps } from 'react-intl'

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
  splitPickup: {
    id: 'store/order.split.n.pickup.n.takeaway',
    defaultMessage: '',
  },
  splitNoPickup: {
    id: 'store/order.split.no.pickup.n.takeaway',
    defaultMessage: '',
  },
  splitPickupNoTakeaway: {
    id: 'store/order.split.n.pickup.no.takeaway',
    defaultMessage: '',
  },
  splitNoPickupNoTakeaway: {
    id: 'store/order.split.no.pickup.no.takeaway',
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

export function getPaymentGroupFromOrder(order: Order) {
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

export interface PaymentGroupInfo {
  barCodeNumber: string | null
  barCodePNG: string | null
  dueDate: string | null
  paymentGroup: string
  paymentSystemName: string
  url: string | null
  value: number
}

export function isSubscription(attachmentItem: Attachment) {
  return attachmentItem.name.indexOf('vtex.subscription') === 0
}

export function getSubscriptionInfo(
  attachmentItem: Attachment,
  intl: WrappedComponentProps['intl']
) {
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

export function orderSplitMessage({
  deliveries,
  pickups,
  takeaways,
  intl,
}: {
  deliveries: number
  pickups: number
  takeaways: number
  intl: WrappedComponentProps['intl']
}) {
  const nPickups = pickups > 1
  const nTakeaways = takeaways > 1

  if (nPickups && nTakeaways) {
    return intl.formatMessage(messages.splitPickup, {
      deliveries,
      pickups,
      takeaways,
    })
  }
  if (nTakeaways) {
    return intl.formatMessage(messages.splitNoPickup, {
      deliveries,
      pickups,
      takeaways,
    })
  }
  if (nPickups) {
    return intl.formatMessage(messages.splitPickupNoTakeaway, {
      deliveries,
      pickups,
      takeaways,
    })
  }

  return intl.formatMessage(messages.splitNoPickupNoTakeaway, {
    deliveries,
    pickups,
    takeaways,
  })
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
