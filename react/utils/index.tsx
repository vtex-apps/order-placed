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
