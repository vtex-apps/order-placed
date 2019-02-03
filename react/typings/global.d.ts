interface Order {
  allowCancellation: boolean
  orderId: string
  orderGroup: string
  state: string
  creationDate: string
  timeZoneCreationDate: string
  value: number
  clientProfileData: ClientProfile
  storePreferencesData: StorePreferencesData
  sellers: OrderItemSeller[]
  totals: OrderItemTotal[]
  items: OrderItem[]
  shippingData: ShippingData
  salesChannel: string
  packageAttachment?: PackageAttachment | null
  paymentData: PaymentData
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
  uniqueId: string
  id: string
  productId: string
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
  countryCode?: string | null
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
  selectedAddresses: Address[]
  logisticsInfo: ItemLogistics[]
}

interface ItemLogistics {
  itemIndex: number
  shippingEstimate?: string | null
  shippingEstimateDate?: string | null
  selectedSla: string
  deliveryChannel?: string | null
  addressId: string | null
  slas: ShippingSLA[]
  deliveryIds?: DeliveryIds[] | null
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
  startDateUtc: string
}

interface ShippingSLA {
  id: string
  name: string
  price: number
  shippingEstimate: string
  deliveryWindow: DeliveryWindow | null
  deliveryChannel: string
  pickupStoreInfo: PickupStoreInfo
}

interface PickupStoreInfo {
  additionalInfo: string | null
  address: Address | null
  dockId: string | null
  friendlyName: string | null
  isPickupStore: boolean | null
}

interface PackageAttachment {
  packages: Package[]
}

interface Package {
  items: Array<{
    itemIndex: number;
    quantity: number;
    price: number;
  }>
  courierStatus: { finished: boolean; status: string }
  courier: string
  invoiceNumber: string
  trackingUrl: string
  trackingNumber: string
  invoiceUrl: string
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
}

interface OrderItemTotal {
  id: string
  name: string
  value: number
}

interface Payment {
  id?: string
  paymentSystem: string
  paymentSystemName: string
  value: number
  lastDigits: string | null
  group: string
  installments: number
  dueDate?: string | null
  url?: string | null
  bankIssuedInvoiceIdentificationNumberFormatted?: string | null
  bankIssuedInvoiceBarCodeNumber?: string | null
  bankIssuedInvoiceBarCodePNG?: string | null
}

interface Address {
  addressId: string
  addressType: string
  receiverName: string | null
  city: string
  state: string
  street: string
  number: string
  neighborhood: string
  complement?: string | null
  postalCode: string
  country?: string | null
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
