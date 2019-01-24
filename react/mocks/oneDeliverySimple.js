export const orderGroupQuery = {
  orderGroup: [
    {
      allowCancellation: true,
      orderId: '905691102273-01',
      orderGroup: '905691102273',
      state: 'payment-pending',
      salesChannel: '1',
      creationDate: '2019-01-24T17:17:53.0598206Z',
      timeZoneCreationDate: '2019-01-24T15:17:53.0598206',
      value: 1700,
      clientProfileData: {
        email: 'victorhmp@mailinator.com',
        firstName: 'Victor',
        lastName: 'Hugo',
        document: '18430995005',
        documentType: 'cpf',
        phone: '+551112340909',
      },
      storePreferencesData: {
        currencyCode: 'BRL',
        countryCode: 'BRA',
      },
      sellers: [
        {
          id: '1',
          name: 'vtexgame1',
        },
      ],
      totals: [
        {
          id: 'Items',
          name: 'Total dos Itens',
          value: 1200,
        },
        {
          id: 'Discounts',
          name: 'Total dos Descontos',
          value: 0,
        },
        {
          id: 'Shipping',
          name: 'Total do Frete',
          value: 500,
        },
        {
          id: 'Tax',
          name: 'Total da Taxa',
          value: 0,
        },
      ],
      items: [
        {
          uniqueId: '5EA37F55BEEF4B588870977EBA404D33',
          id: '282',
          productId: '255',
          name: 'Delivery 1 SLA | 1 Tipo 1',
          skuName: 'Tipo 1',
          tax: 0,
          price: 1200,
          listPrice: 1200,
          sellingPrice: 1200,
          isGift: false,
          quantity: 1,
          seller: '1',
          imageUrl:
            'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
          detailUrl: '/teste-so-delivery/p',
          measurementUnit: 'un',
          unitMultiplier: 1,
        },
      ],
      shippingData: {
        selectedAddresses: [
          {
            addressId: '3096700349398',
            addressType: 'residential',
            receiverName: 'Victor Hugo',
            city: 'Rio de Janeiro',
            state: 'RJ',
            street: 'Praia de Botafogo',
            number: '300',
            neighborhood: 'Botafogo',
            complement: null,
            postalCode: '22250-040',
            country: 'BRA',
          },
        ],
        logisticsInfo: [
          {
            itemIndex: 0,
            shippingEstimate: null,
            shippingEstimateDate: null,
            selectedSla: 'PAC',
            deliveryChannel: null,
            addressId: '3096700349398',
            slas: [
              {
                id: 'PAC',
                name: 'PAC',
                price: 500,
                shippingEstimate: '8bd',
                deliveryWindow: null,
                deliveryChannel: 'delivery',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
              },
            ],
            deliveryIds: null,
          },
        ],
      },
      packageAttachment: null,
      paymentData: {
        transactions: [
          {
            transactionId: 'E4128A83A67F4594B82563BA03BED66D',
            payments: [
              {
                paymentSystem: '4',
                paymentSystemName: 'Mastercard',
                value: 1700,
                lastDigits: '1234',
                group: 'creditCard',
                installments: 1,
                dueDate: null,
                url: null,
                tid: '61870040',
                bankIssuedInvoiceIdentificationNumberFormatted: null,
                bankIssuedInvoiceBarCodeNumber: null,
                bankIssuedInvoiceBarCodePNG: null,
              },
            ],
          },
        ],
      },
    },
  ],
}
