export const orderGroupQuery = {
  'orderGroup': [
    {
      'allowCancellation': true,
      'orderId': '902352117656-01',
      'orderGroup': '902352117656',
      'state': 'on-order-completed',
      'salesChannel': '1',
      'creationDate': '2019-01-10T18:35:03.0583064Z',
      'timeZoneCreationDate': '2019-01-10T16:35:03.0583064',
      'value': 21625,
      'storePreferencesData': {
        'currencyCode': 'BRL',
      },
      'sellers': [
        {
          'id': '1',
          'name': 'vtexgame1',
        },
      ],
      'totals': [
        {
          'id': 'Items',
          'name': 'Total dos Itens',
          'value': 20125,
        },
        {
          'id': 'Discounts',
          'name': 'Total dos Descontos',
          'value': 0,
        },
        {
          'id': 'Shipping',
          'name': 'Total do Frete',
          'value': 1500,
        },
        {
          'id': 'Tax',
          'name': 'Total da Taxa',
          'value': 0,
        },
      ],
      'items': [
        {
          'uniqueId': 'E63DF2A0242B41E3ABA9C7169FC5CA18',
          'id': '35',
          'productId': '24',
          'name': 'Camisa America Vermelha',
          'skuName': 'Camisa America Vermelha',
          'tax': 0,
          'price': 1125,
          'listPrice': 1150,
          'sellingPrice': 1125,
          'isGift': false,
          'quantity': 1,
          'seller': '1',
          'imageUrl': 'http://vtexgame1.vteximg.com.br/arquivos/ids/155634-55-55/camisaamericavermelha.jpg?v=636517255685600000',
          'detailUrl': '/camisaamericavermelha/p',
          'measurementUnit': 'un',
          'unitMultiplier': 1,
        },
        {
          'uniqueId': '8378509710754AD19D14F93EC42FE09C',
          'id': '299',
          'productId': '272',
          'name': 'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
          'skuName': 'Tipo 1',
          'tax': 0,
          'price': 19000,
          'listPrice': 20000,
          'sellingPrice': 19000,
          'isGift': false,
          'quantity': 1,
          'seller': '1',
          'imageUrl': 'http://vtexgame1.vteximg.com.br/arquivos/ids/155648-55-55/shopping.jpg?v=636626886332270000',
          'detailUrl': '/teste-so-delivery-copy-256--copy-257--copy-261--copy-262--copy-263--copy-264--copy-265--copy-266--copy-267--copy-268--copy-269--copy-270--copy-271--copy-272-/p',
          'measurementUnit': 'un',
          'unitMultiplier': 1,
        },
      ],
      'shippingData': {
        'address': {
          'addressId': '6188580533568',
          'addressType': 'residential',
          'receiverName': 'Victor Hugo',
          'city': 'Rio de Janeiro',
          'state': 'RJ',
          'street': 'Praia de Botafogo',
          'number': '3000',
          'neighborhood': 'Botafogo',
          'complement': null,
          'postalCode': '22250-040',
        },
        'logisticsInfo': [
          {
            'itemIndex': 0,
            'shippingEstimate': null,
            'shippingEstimateDate': null,
            'selectedSla': 'Expressa',
            'deliveryChannel': null,
            'slas': [
              {
                'id': 'Expressa',
                'name': 'Expressa',
                'price': 1000,
                'shippingEstimate': '2bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'retirada na loja (141125d)',
                'name': 'retirada na loja (141125d)',
                'price': 0,
                'shippingEstimate': '2bd',
                'deliveryWindow': null,
                'deliveryChannel': 'pickup-in-point',
                'pickupStoreInfo': {
                  'additionalInfo': 'traga a vasilha\n\nnão se esqueça',
                  'address': '[object Object]',
                  'dockId': '1c38481',
                  'friendlyName': 'Loja em Copacabana no Rio de Janeiro',
                  'isPickupStore': true,
                },
              },
            ],
            'deliveryIds': null,
          },
          {
            'itemIndex': 1,
            'shippingEstimate': null,
            'shippingEstimateDate': null,
            'selectedSla': 'PAC',
            'deliveryChannel': null,
            'slas': [
              {
                'id': 'PAC',
                'name': 'PAC',
                'price': 500,
                'shippingEstimate': '10bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'Motoboy',
                'name': 'Motoboy',
                'price': 1000,
                'shippingEstimate': '7bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'Expressa',
                'name': 'Expressa',
                'price': 1000,
                'shippingEstimate': '9bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'PAC Lento',
                'name': 'PAC Lento',
                'price': 1000,
                'shippingEstimate': '22bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'agendada',
                'name': 'agendada',
                'price': 340,
                'shippingEstimate': '0bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
              {
                'id': 'agendada-top',
                'name': 'agendada-top',
                'price': 340,
                'shippingEstimate': '0bd',
                'deliveryWindow': null,
                'deliveryChannel': 'delivery',
                'pickupStoreInfo': {
                  'additionalInfo': null,
                  'address': null,
                  'dockId': null,
                  'friendlyName': null,
                  'isPickupStore': false,
                },
              },
            ],
            'deliveryIds': null,
          },
        ],
      },
      'packageAttachment': null,
      'paymentData': {
        'transactions': [
          {
            'transactionId': '90ED31CF2F954D6CAF2BFE2D6397A65C',
            'payments': [
              {
                'paymentSystemName': 'Mastercard',
                'paymentSystem': '4',
                'value': 10812,
                'lastDigits': '1234',
                'group': 'creditCard',
                'installments': 1,
              },
              {
                'paymentSystemName': 'Mastercard',
                'paymentSystem': '4',
                'value': 10813,
                'lastDigits': '0909',
                'group': 'creditCard',
                'installments': 1,
              },
            ],
          },
        ],
      },
    },
  ],
}
