export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '909362218444-01',
        deliveryParcels: [
          {
            address: {
              addressType: 'residential',
              receiverName: 'Vic*** ****',
              state: 'RJ',
              street: 'Pra** ** *****ogo',
              number: '***',
              city: 'Rio ** *******',
              postalCode: '******040',
              neighborhood: 'Bot*****',
              complement: null,
              country: 'BRA',
            },
            price: 500,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '22',
                skuName: 'Sku serviço',
                name: 'Produto serviço Sku serviço',
                price: 1299,
                listPrice: 1500,
                isGift: false,
                quantity: 1,
                attachments: [],
                bundleItems: [
                  {
                    id: '2',
                    attachments: [
                      {
                        content: {
                          text: 'This is a mock message',
                        },
                        name: 'message',
                      },
                    ],
                    name: 'Gravação',
                    price: 500,
                    quantity: 1,
                    imageUrl: null,
                    measurementUnit: 'un',
                    unitMultiplier: 1,
                  },
                ],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155359-55-55/Produto-com-servico.png?v=635812252385100000',
                detailUrl: '/produto-servico/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            selectedSla: 'PAC',
            selectedSlaObj: {
              id: 'PAC',
              name: 'PAC',
              shippingEstimate: '13bd',
              deliveryWindow: null,
              price: 500,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '13bd',
            shippingEstimateDate: null,
            deliveryWindow: null,
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
        ],
        pickUpParcels: [],
        takeAwayParcels: [],
        items: [
          {
            id: '22',
            skuName: 'Sku serviço',
            name: 'Produto serviço Sku serviço',
            price: 1299,
            listPrice: 1500,
            isGift: false,
            quantity: 1,
            seller: '1',
            attachments: [],
            bundleItems: [
              {
                id: '2',
                attachments: [
                  {
                    content: {
                      text: 'This is a mock message',
                    },
                    name: 'message',
                  },
                ],
                name: 'Gravação',
                price: 500,
                quantity: 1,
                imageUrl: null,
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155359-55-55/Produto-com-servico.png?v=635812252385100000',
            detailUrl: '/produto-servico/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
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
            value: 1799,
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
        clientProfileData: {
          email: 'victorhmp@mailinator.com',
          firstName: 'Vic***',
          lastName: 'Hug*',
          document: '*8*3*9*5*0*',
          documentType: 'cpf',
          phone: '*********0909',
        },
        paymentData: {
          transactions: [
            {
              transactionId: '1483BE46F1374E0A8E7E569CECE434C4',
              payments: [
                {
                  id: 'A92767AD32D34503A0927F72F63C7D76',
                  paymentSystem: '4',
                  paymentSystemName: 'Mastercard',
                  value: 2299,
                  installments: 1,
                  lastDigits: '1234',
                  group: 'creditCard',
                  dueDate: null,
                  url: null,
                  bankIssuedInvoiceBarCodePNG: null,
                  bankIssuedInvoiceIdentificationNumber: null,
                  connectorResponses: null,
                },
              ],
            },
          ],
        },
        storePreferencesData: {
          countryCode: 'BRA',
          currencyCode: 'BRL',
        },
        creationDate: '2019-02-08T23:37:08.5811944Z',
        value: 2299,
      },
    ],
    totalPickUpParcels: [],
    totalDeliveryParcels: [
      {
        address: {
          addressType: 'residential',
          receiverName: 'Vic*** ****',
          state: 'RJ',
          street: 'Pra** ** *****ogo',
          number: '***',
          city: 'Rio ** *******',
          postalCode: '******040',
          neighborhood: 'Bot*****',
          complement: null,
          country: 'BRA',
        },
        price: 500,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '22',
            skuName: 'Sku serviço',
            name: 'Produto serviço Sku serviço',
            price: 1299,
            listPrice: 1500,
            isGift: false,
            quantity: 1,
            seller: '1',
            attachments: [],
            bundleItems: [
              {
                id: '2',
                attachments: [
                  {
                    content: {
                      text: 'This is a mock message',
                    },
                    name: 'message',
                  },
                ],
                name: 'Gravação',
                price: 500,
                quantity: 1,
                imageUrl: null,
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155359-55-55/Produto-com-servico.png?v=635812252385100000',
            detailUrl: '/produto-servico/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        selectedSla: 'PAC',
        selectedSlaObj: {
          id: 'PAC',
          name: 'PAC',
          shippingEstimate: '13bd',
          deliveryWindow: null,
          price: 500,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '13bd',
        shippingEstimateDate: null,
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
