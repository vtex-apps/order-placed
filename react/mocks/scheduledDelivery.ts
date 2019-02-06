export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '908790802616-01',
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
            price: 1340,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '299',
                skuName: 'Tipo 1',
                name:
                  'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
                price: 19000,
                listPrice: 20000,
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
            selectedSla: 'agendada-top',
            selectedSlaObj: {
              id: 'agendada-top',
              name: 'agendada-top',
              shippingEstimate: '0bd',
              deliveryWindow: {
                endDateUtc: '2019-02-07T13:30:00+00:00',
                startDateUtc: '2019-02-07T09:00:00+00:00',
              },
              price: 340,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '0bd',
            shippingEstimateDate: '2019-02-07T09:00:00',
            deliveryWindow: {
              endDateUtc: '2019-02-07T13:30:00+00:00',
              startDateUtc: '2019-02-07T09:00:00+00:00',
            },
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
        ],
        pickUpParcels: [],
        takeAwayParcels: [],
        items: [
          {
            id: '299',
            skuName: 'Tipo 1',
            name: 'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
            price: 19000,
            listPrice: 20000,
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
              transactionId: '1C655863F8F74564B5397142E347BC5A',
              payments: [
                {
                  id: '2130462CB2B8481FAA2E34F185535250',
                  paymentSystem: '6',
                  paymentSystemName: 'Boleto Bancário',
                  value: 20340,
                  installments: 1,
                  lastDigits: null,
                  group: 'bankInvoice',
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
        creationDate: '2019-02-06T15:13:29.055631Z',
        value: 20340,
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
        price: 1340,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '299',
            skuName: 'Tipo 1',
            name: 'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
            price: 19000,
            listPrice: 20000,
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
        selectedSla: 'agendada-top',
        selectedSlaObj: {
          id: 'agendada-top',
          name: 'agendada-top',
          shippingEstimate: '0bd',
          deliveryWindow: {
            endDateUtc: '2019-02-07T13:30:00+00:00',
            startDateUtc: '2019-02-07T09:00:00+00:00',
          },
          price: 340,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '0bd',
        shippingEstimateDate: '2019-02-07T09:00:00',
        deliveryWindow: {
          endDateUtc: '2019-02-07T13:30:00+00:00',
          startDateUtc: '2019-02-07T09:00:00+00:00',
        },
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
