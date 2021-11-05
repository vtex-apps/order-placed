interface OrderGroup {
  orders: Order[]
  totalDeliveryParcels: Parcel[]
  totalPickUpParcels: Parcel[]
  totalTakeAwayParcels: Parcel[]
  analyticsData?: any[]
}

interface Order {
  allowCancellation: boolean
  orderId: string
  deliveryParcels: Parcel[]
  pickUpParcels: Parcel[]
  takeAwayParcels: Parcel[]
  items: OrderItem[]
  sellers: OrderItemSeller[]
  totals: OrderItemTotal[]
  giftRegistryData?: GiftRegistry | null
  clientProfileData: ClientProfile
  paymentData: PaymentData
  storePreferencesData: StorePreferencesData
  creationDate: string
  value: number
}

interface GiftRegistry {
  attachmentId: string
  giftRegistryId: string
  giftRegistryType: string
  giftRegistryTypeName: string
  addressId: string
  description: string
}

interface ClientProfile {
  email: string
  firstName: string | null
  lastName: string | null
  document: string | null
  documentType: string | null
  phone: string | null
}

interface OrderItem {
  id: string
  attachments: Attachment[]
  skuName: string
  name: string
  productId: string
  price: number
  sellingPrice: number
  listPrice: number
  bundleItems: Bundle[]
  isGift: boolean
  parentItemIndex: null | number
  quantity: number
  seller: string
  imageUrl: string
  detailUrl: string
  measurementUnit: string
  unitMultiplier: number
}

interface Bundle {
  id
  attachments: Attachment[]
  name: string
  price: number
  quantity: number
  imageUrl: string | null
  measurementUnit: string
  unitMultiplier: number
}

interface Attachment {
  content: any
  name: string
}

interface StorePreferencesData {
  countryCode: string | null
  currencyCode: string
}

interface PaymentData {
  transactions: Transaction[]
}

interface Transaction {
  transactionId: string
  payments: Payment[]
}

interface DeliveryWindow {
  endDateUtc: string | null
  startDateUtc: string | null
}

interface ShippingSLA {
  id: string
  name: string
  shippingEstimate: string
  deliveryWindow: DeliveryWindow | null
  price: number
  deliveryChannel: string
  pickupStoreInfo: PickupStoreInfo
}

interface PickupStoreInfo {
  additionalInfo: string | null
  address: Address | null
  friendlyName: string | null
  isPickupStore: boolean | null
}

interface OrderItemSeller {
  id: string
  name: string
}

interface OrderItemTotal {
  id: string
  name: string
  value: number
}

interface Payment {
  id: string
  paymentSystem: string
  paymentSystemName: string
  value: number
  lastDigits: string | null
  group: string
  installments: number
  dueDate: string | null
  url: string | null
  bankIssuedInvoiceIdentificationNumber: string | null
  bankIssuedInvoiceBarCodePNG: string | null
  connectorResponses: ConnectorResponses | null
}

interface Address {
  addressId?: string
  addressType: string | null
  receiverName: string | null
  state: string | null
  street: string | null
  number: string | null
  city: string | null
  postalCode: string | null
  neighborhood: string | null
  complement: string | null
  country: string | null
}

interface Parcel {
  address: Address
  price: number
  pickupFriendlyName: string | null
  seller: string
  items: OrderItem[]
  selectedSla: string
  selectedSlaObj: ShippingSLA
  shippingEstimate: string | null
  shippingEstimateDate: string | null
  deliveryWindow: DeliveryWindow | null
  deliveryChannel: string
  selectedSlaType: string
}

interface IconProps {
  color?: string
  size?: number
}

interface ConnectorResponses {
  [key: string]: any
}

interface ConnectorResponse {
  key: string
  value: string
}

interface ResponsiveInput<T> {
  mobile?: T
  desktop?: T
  tablet?: T
}

type MaybeResponsiveInput<T> = ResponsiveInput<T> | T
