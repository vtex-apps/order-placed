export const orderGroupQuery = {
  orderGroup: [
    {
      allowCancellation: true,
      orderId: '886811730366-01',
      orderGroup: '886811730366',
      state: 'payment-approved',
      salesChannel: '1',
      creationDate: '2018-12-28T17:29:04.3303963Z',
      timeZoneCreationDate: '2018-12-28T15:29:04.3303963',
      value: 3800,
      clientProfileData: {
        email: 'tiaraju@vtex.com',
        firstName: 'auto',
        lastName: 'auto',
        document: '12345678909',
        documentType: 'cpf',
        phone: '+552222222222',
        corporateName: null,
        tradeName: null,
        corporateDocument: null,
        stateInscription: null,
        corporatePhone: null,
        isCorporate: false,
        profileCompleteOnLoading: true,
        profileErrorOnLoading: false,
        customerClass: null,
      },
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
          value: 3800,
        },
        {
          id: 'Discounts',
          name: 'Total dos Descontos',
          value: 0,
        },
        {
          id: 'Shipping',
          name: 'Total do Frete',
          value: 0,
        },
        {
          id: 'Tax',
          name: 'Total da Taxa',
          value: 0,
        },
      ],
      items: [
        {
          uniqueId: '1BE4BFF1E1A64F76B7C6C9DAA05C9C46',
          id: '285',
          productId: '258',
          name: 'Pickup 1 SLA | 1 Tipo 1',
          skuName: 'Tipo 1',
          tax: 0,
          price: 1900,
          listPrice: 2300,
          sellingPrice: 1900,
          isGift: false,
          quantity: 2,
          seller: '1',
          imageUrl:
            'http://vtexgame1.vteximg.com.br/arquivos/ids/155642-55-55/cerva.jpg?v=636626711744730000',
          detailUrl: '/teste-so-delivery-copy-256--copy-257--copy-258-/p',
          measurementUnit: 'un',
          unitMultiplier: 1,
        },
      ],
      shippingData: {
        address: {
          addressId: '141125d',
          addressType: 'pickup',
          receiverName: 'Victor Hugo',
          city: 'Rio de Janeiro',
          state: 'RJ',
          street: 'Rua General Azevedo Pimentel',
          number: '5',
          neighborhood: 'Copacabana',
          complement: '',
          postalCode: '22011050',
        },
        logisticsInfo: [
          {
            itemIndex: 0,
            shippingEstimate: null,
            shippingEstimateDate: null,
            selectedSla: 'retirada na loja (141125d)',
            deliveryChannel: null,
            slas: [
              {
                id: 'retirada na loja (141125d)',
                name: 'retirada na loja (141125d)',
                price: 0,
                shippingEstimate: '2bd',
                deliveryWindow: null,
                deliveryChannel: 'pickup-in-point',
                pickupStoreInfo: {
                  additionalInfo: 'traga a vasilha\n\nnão se esqueça',
                  address: '[object Object]',
                  dockId: '1c38481',
                  friendlyName: 'Loja em Copacabana no Rio de Janeiro',
                  isPickupStore: true,
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
            transactionId: 'CDEAA19ECC614B99ACD5C41B45D4DDAB',
            payments: [
              {
                paymentSystemName: 'Mastercard',
                paymentSystem: '4',
                value: 3800,
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
