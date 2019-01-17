export const orderGroupQuery = {
  orderGroup: [
    {
      allowCancellation: true,
      orderId: '886811094393-01',
      orderGroup: '886811094393',
      state: 'payment-approved',
      salesChannel: '1',
      creationDate: '2018-12-28T17:18:29.1177964Z',
      timeZoneCreationDate: '2018-12-28T15:18:29.1177964',
      value: 4100,
      storePreferencesData: {
        currencyCode: 'BRL',
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
          value: 3600,
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
          uniqueId: '8A9DFD93931E48BCB4150FC52F220B02',
          id: '282',
          productId: '255',
          name: 'Delivery 1 SLA | 1 Tipo 1',
          skuName: 'Tipo 1',
          tax: 0,
          price: 1200,
          listPrice: 1200,
          sellingPrice: 1200,
          isGift: false,
          quantity: 3,
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
            addressId: '40196370878352',
            addressType: 'residential',
            receiverName: 'Victor Hugo',
            city: 'Rio de Janeiro',
            state: 'RJ',
            street: 'Praia de Botafogo',
            number: '3000',
            neighborhood: 'Botafogo',
            complement: null,
            postalCode: '22250-040',
          },
        ],
        logisticsInfo: [
          {
            itemIndex: 0,
            shippingEstimate: null,
            shippingEstimateDate: null,
            selectedSla: 'PAC',
            deliveryChannel: null,
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
            addressId: '40196370878352',
          },
        ],
      },
      packageAttachment: null,
      paymentData: {
        transactions: [
          {
            transactionId: '82E453E5AC9242148D48D4FE245C0C3F',
            payments: [
              {
                paymentSystemName: 'Mastercard',
                paymentSystem: '4',
                value: 4100,
                lastDigits: '1234',
                group: 'creditCard',
                installments: 1,
              },
            ],
          },
        ],
      },
    },
  ],
}
