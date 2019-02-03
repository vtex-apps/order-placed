interface Order {
  allowCancellation: boolean
  orderId: string
  orderGroup: string
  state: string
  salesChannel: string
  shippingData: ShippingData
  items: OrderItem[]
  sellers: OrderItemSeller[]
  totals: OrderItemTotal[]
  clientProfileData: ClientProfile
  packageAttachment: PackageAttachment
  paymentData: PaymentData
  storePreferencesData: StorePreferencesData
  creationDate: string
  timeZoneCreationDate: string
  value: number
}

interface ClientProfile {
  email: string
  firstName: string
  lastName: string
  document: string
  documentType: string
  phone: string
}

interface OrderItem {
  uniqueId: string
  id: string
  productId: string
  refId: string
  name: string
  skuName: string
  tax: number
  price: number
  listPrice: number
  sellingPrice: number
  isGift: boolean
  quantity: number
  seller: string
  imageUrl: string
  detailUrl: string
  measurementUnit: string
  unitMultiplier: number
}

interface StorePreferencesData {
  countryCode: string
  currencyCode: string
}

interface PaymentData {
  transactions: Transaction[]
}

interface Transaction {
  transactionId: string
  payments: Payment[]
}

interface ShippingData {
  address: Address
  logisticsInfo: ItemLogistics[]
  selectedAddresses: Address[]
}

interface ItemLogistics {
  itemIndex: number
  shippingEstimate: string
  shippingEstimateDate: string
  selectedSla: string
  slas: ShippingSLA[]
  deliveryWindow: DeliveryWindow
  deliveryChannel: string
  deliveryIds: DeliveryIds[]
  addressId: string
}

interface DeliveryIds {
  courierId: string
  courierName: string
  dockId: string
  quantity: number
  warehouseId: string
}

interface DeliveryWindow {
  endDateUtc: string
  listPrice: number
  price: number
  startDateUtc: string
}

interface ShippingSLA {
  id: string
  name: string
  shippingEstimate: string
  deliveryWindow: DeliveryWindow
  price: number
  deliveryChannel: string
  pickupStoreInfo: PickupStoreInfo
}

interface PickupStoreInfo {
  additionalInfo: string
  address: Address
  dockId: string
  friendlyName: string
  isPickupStore: Boolean
}

interface PackageAttachment {
  packages: Package[]
}

interface Package {
  items: PackageItem[]
  courier: string
  invoiceNumber: string
  invoiceValue: number
  invoiceUrl: string
  issuanceDate: string
  trackingNumber: string
  trackingUrl: string
  courierStatus: CourierStatus
}

interface PackageItem {
  itemIndex: number
  quantity: number
  price: number
  description: string
}

interface OrderItemSeller {
  id: string
  name: string
  logo: string
}

interface OrderItemTotal {
  id: string
  name: string
  value: number
}

interface Payment {
  id: string
  dueDate: string
  group: string
  paymentSystem: string
  paymentSystemName: string
  lastDigits: string
  value: number
  installments: number
  url: string
  bankIssuedInvoiceIdentificationNumberFormatted: string
  bankIssuedInvoiceBarCodeNumber: string
  bankIssuedInvoiceBarCodePNG: string
}

interface Address {
  addressId: string
  addressType: string
  city: string
  complement: string
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  state: string
  street: string
  country: string
}

interface Parcel {
  address: Address
  listPrice: number
  price: number
  pickupFriendlyName: string
  seller: string
  items: OrderItem[]
  package: Package
  selectedSla: string
  selectedSlaObj: ShippingSLA
  slas: ShippingSLA[]
  shippingEstimate: string
  shippingEstimateDate: string
  deliveryWindow: DeliveryWindow
  deliveryChannel: string
  selectedSlaType: string
  deliveryIds: DeliveryIds[]
}

interface IconProps {
  color?: string
  size?: number
}
