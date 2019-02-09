export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '909370456657-01',
        deliveryParcels: [
          {
            address: {
              addressType: 'residential',
              receiverName: 'Victor Hugo',
              state: 'RJ',
              street: 'Praia de Botafogo',
              number: '300',
              city: 'Rio de Janeiro',
              postalCode: '22250-040',
              neighborhood: 'Botafogo',
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
                          text:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu',
                        },
                        name: 'message',
                      },
                    ],
                    name: '[TESTE QA]',
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
              {
                id: '26',
                skuName: 'Sku anexo obrigatorio',
                name: 'Produto com anexo obrigatorio Sku anexo obrigatorio',
                price: 820,
                listPrice: 1399,
                isGift: false,
                quantity: 1,
                attachments: [
                  {
                    content: {
                      text: null,
                      periodo: '1 semana',
                    },
                    name: 'Principa2',
                  },
                ],
                bundleItems: [],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155363-55-55/Produto-com-item-attachment-obrigatorio.png?v=635815593663570000',
                detailUrl: '/produto-com-anexo-obrigatorio/p',
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
              price: 278,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '13bd',
            shippingEstimateDate: '2019-02-28T01:08:12.0363488Z',
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
            attachments: [],
            bundleItems: [
              {
                id: '2',
                attachments: [
                  {
                    content: {
                      text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu',
                    },
                    name: 'message',
                  },
                ],
                name: '[TESTE QA]',
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
          {
            id: '26',
            skuName: 'Sku anexo obrigatorio',
            name: 'Produto com anexo obrigatorio Sku anexo obrigatorio',
            price: 820,
            listPrice: 1399,
            isGift: false,
            quantity: 1,
            attachments: [
              {
                content: {
                  text: null,
                  periodo: '1 semana',
                },
                name: 'Principa2',
              },
            ],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155363-55-55/Produto-com-item-attachment-obrigatorio.png?v=635815593663570000',
            detailUrl: '/produto-com-anexo-obrigatorio/p',
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
            value: 2619,
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
          firstName: 'Victor',
          lastName: 'Hugo',
          document: '18430995005',
          documentType: 'cpf',
          phone: '+551112340909',
        },
        paymentData: {
          transactions: [
            {
              transactionId: '08871537FD1B45B581FFEF4B0056F1B7',
              payments: [
                {
                  id: '5D85A447717D495BB1EE27467D2F3643',
                  paymentSystem: '4',
                  paymentSystemName: 'Mastercard',
                  value: 3119,
                  installments: 1,
                  lastDigits: '1234',
                  group: 'creditCard',
                  dueDate: null,
                  url: null,
                  bankIssuedInvoiceBarCodePNG: null,
                  bankIssuedInvoiceBarCodeNumber: null,
                  bankIssuedInvoiceIdentificationNumberFormatted: null,
                },
              ],
            },
          ],
        },
        storePreferencesData: {
          countryCode: 'BRA',
          currencyCode: 'BRL',
        },
        creationDate: '2019-02-09T01:07:46.2540844Z',
        value: 3119,
      },
    ],
    totalPickUpParcels: [],
    totalDeliveryParcels: [
      {
        address: {
          addressType: 'residential',
          receiverName: 'Victor Hugo',
          state: 'RJ',
          street: 'Praia de Botafogo',
          number: '300',
          city: 'Rio de Janeiro',
          postalCode: '22250-040',
          neighborhood: 'Botafogo',
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
                      text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu',
                    },
                    name: 'message',
                  },
                ],
                name: '[TESTE QA]',
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
          {
            id: '26',
            skuName: 'Sku anexo obrigatorio',
            name: 'Produto com anexo obrigatorio Sku anexo obrigatorio',
            price: 820,
            listPrice: 1399,
            isGift: false,
            quantity: 1,
            attachments: [
              {
                content: {
                  text: null,
                  periodo: '1 semana',
                },
                name: 'Principa2',
              },
            ],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155363-55-55/Produto-com-item-attachment-obrigatorio.png?v=635815593663570000',
            detailUrl: '/produto-com-anexo-obrigatorio/p',
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
          price: 278,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '13bd',
        shippingEstimateDate: '2019-02-28T01:08:12.0363488Z',
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
