export const orderGroupQuery = {
  orderGroup: [
    {
      allowCancellation: true,
      orderId: '886821109773-01',
      orderGroup: '886821109773',
      state: 'payment-approved',
      salesChannel: '1',
      creationDate: '2018-12-28T18:18:36.5025947Z',
      timeZoneCreationDate: '2018-12-28T16:18:36.5025947',
      value: 20340,
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
          value: 19000,
        },
        {
          id: 'Discounts',
          name: 'Total dos Descontos',
          value: 0,
        },
        {
          id: 'Shipping',
          name: 'Total do Frete',
          value: 1340,
        },
        {
          id: 'Tax',
          name: 'Total da Taxa',
          value: 0,
        },
      ],
      items: [
        {
          uniqueId: '634BA9FD00484426861054E332D499C9',
          id: '299',
          productId: '272',
          name: 'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
          skuName: 'Tipo 1',
          tax: 0,
          price: 19000,
          listPrice: 20000,
          sellingPrice: 19000,
          isGift: false,
          quantity: 1,
          seller: '1',
          imageUrl:
            'http://vtexgame1.vteximg.com.br/arquivos/ids/155648-55-55/shopping.jpg?v=636626886332270000',
          detailUrl:
            '/teste-so-delivery-copy-256--copy-257--copy-261--copy-262--copy-263--copy-264--copy-265--copy-266--copy-267--copy-268--copy-269--copy-270--copy-271--copy-272-/p',
          measurementUnit: 'un',
          unitMultiplier: 1,
        },
      ],
      shippingData: {
        address: {
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
        logisticsInfo: [
          {
            itemIndex: 0,
            shippingEstimate: null,
            shippingEstimateDate: null,
            selectedSla: 'agendada',
            deliveryChannel: null,
            slas: [
              {
                id: 'PAC',
                name: 'PAC',
                price: 500,
                shippingEstimate: '10bd',
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
              {
                id: 'Motoboy',
                name: 'Motoboy',
                price: 1000,
                shippingEstimate: '7bd',
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
              {
                id: 'Expressa',
                name: 'Expressa',
                price: 1000,
                shippingEstimate: '9bd',
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
              {
                id: 'PAC Lento',
                name: 'PAC Lento',
                price: 1000,
                shippingEstimate: '22bd',
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
              {
                id: 'agendada',
                name: 'agendada',
                price: 340,
                shippingEstimate: '0bd',
                deliveryWindow: '[object Object]',
                deliveryChannel: 'delivery',
                pickupStoreInfo: {
                  additionalInfo: null,
                  address: null,
                  dockId: null,
                  friendlyName: null,
                  isPickupStore: false,
                },
              },
              {
                id: 'agendada-top',
                name: 'agendada-top',
                price: 340,
                shippingEstimate: '0bd',
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
            transactionId: 'F95B68F528CC414588088A5419AE973C',
            payments: [
              {
                paymentSystemName: 'Mastercard',
                paymentSystem: '4',
                value: 20340,
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
