export const orderGroupQuery = {
  'orderGroup': [
    {
      orderId: '881563518898-01',
      orderGroup: '881563518898',
      state: 'order-completed',
      isCheckedIn: false,
      sellerOrderId: '00-881563518898-01',
      storeId: null,
      checkedInPickupPointId: null,
      value: 6514,
      items: [
        {
          uniqueId: 'E95FB7D5F8FC41AD83A2D5507FFD1D5C',
          id: '15',
          productId: '4',
          refId: 'produtohomologação',
          ean: 'produtohomologação',
          name: 'Novalgina',
          skuName: 'Novalgina',
          modalType: null,
          parentItemIndex: null,
          parentAssemblyBinding: null,
          priceValidUntil: '2021-01-09T02:00:00',
          tax: 0,
          priceDefinitions: {
            listPrice: [
              {
                value: 8000,
                quantity: 1,
              },
            ],
            price: [
              {
                value: 5764,
                quantity: 1,
              },
            ],
            sellingPrice: [
              {
                value: 5764,
                quantity: 1,
              },
            ],
          },
          price: 5764,
          listPrice: 8000,
          manualPrice: null,
          sellingPrice: 5764,
          orderRewardStatus: 'invoiced',
          rewardValue: 0,
          isGift: false,
          additionalInfo: {
            brandName: 'Marca Exemplo',
            brandId: '2000000',
            offeringInfo: null,
            offeringType: null,
            offeringTypeId: null,
          },
          preSaleDate: null,
          productCategoryIds: '/4/5/',
          productCategories: {
            4: 'Departamento 2',
            5: 'Categoria 2.3 (Campo Produto)',
          },
          quantity: 1,
          seller: '1',
          sellerChain: [
            '1',
          ],
          imageUrl: 'http://qamarketplace.vteximg.com.br/arquivos/ids/155400-55-55/Novalgina.jpg?v=635985172600570000',
          detailUrl: '/novalgina/p',
          components: [ ],
          bundleItems: [ ],
          attachments: [ ],
          attachmentOfferings: [
            {
              name: 'Receita',
              required: false,
              schema: {
                Nome1: {
                  maximumNumberOfCharacters: 5,
                  domain: [ ],
                },
                Teste: {
                  maximumNumberOfCharacters: 10,
                  domain: [
                    '0987654321',
                  ],
                },
                Embalagem: {
                  maximumNumberOfCharacters: 6,
                  domain: [
                    'true',
                    ' false',
                  ],
                },
              },
            },
          ],
          offerings: [ ],
          priceTags: [ ],
          availability: 'available',
          measurementUnit: 'un',
          unitMultiplier: 1,
        },
      ],
      sellers: [
        {
          id: '1',
          name: 'qamarketplace',
          logo: '',
        },
      ],
      totals: [
        {
          id: 'Items',
          name: 'Total dos Itens',
          value: 5764,
        },
        {
          id: 'Discounts',
          name: 'Total dos Descontos',
          value: 0,
        },
        {
          id: 'Shipping',
          name: 'Total do Frete',
          value: 750,
        },
        {
          id: 'Tax',
          name: 'Total da Taxa',
          value: 0,
        },
      ],
      clientProfileData: {
        email: 'breno@mailinator.com',
        firstName: 'Bre**',
        lastName: 'Cal*****',
        document: '*1*3*5*6*1*',
        documentType: 'cpf',
        phone: '*********2222',
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
      ratesAndBenefitsData: {
        rateAndBenefitsIdentifiers: [ ],
        teaser: [ ],
      },
      shippingData: {
        address: {
          addressType: 'residential',
          receiverName: 'aut* ****',
          addressId: '-1456253174642',
          postalCode: '******030',
          city: 'Rio ** *******',
          state: 'RJ',
          country: 'BRA',
          street: 'Rua *****ção',
          number: '*',
          neighborhood: 'Bot*****',
          complement: null,
          reference: null,
          geoCoordinates: [ ],
        },
        logisticsInfo: [
          {
            itemIndex: 0,
            selectedSla: 'Sedex',
            selectedDeliveryChannel: 'delivery',
            addressId: '-1456253174642',
            slas: [
              {
                id: 'Sedex',
                deliveryChannel: 'delivery',
                name: 'Sedex',
                deliveryIds: [
                  {
                    courierId: '1d1b046',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'SEDEX',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '3h',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 750,
                listPrice: 750,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: false,
                  friendlyName: null,
                  address: null,
                  additionalInfo: null,
                  dockId: null,
                },
                pickupPointId: null,
                pickupDistance: 0,
                polygonName: null,
              },
              {
                id: 'Expresso',
                deliveryChannel: 'delivery',
                name: 'Expresso',
                deliveryIds: [
                  {
                    courierId: '1403f28',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'Transportadora Expresso',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '0bd',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 1500,
                listPrice: 1500,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: false,
                  friendlyName: null,
                  address: null,
                  additionalInfo: null,
                  dockId: null,
                },
                pickupPointId: null,
                pickupDistance: 0,
                polygonName: null,
              },
              {
                id: 'Normal',
                deliveryChannel: 'delivery',
                name: 'Normal',
                deliveryIds: [
                  {
                    courierId: '1',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'Transportadora',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '0d',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 1700,
                listPrice: 1700,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: false,
                  friendlyName: null,
                  address: null,
                  additionalInfo: null,
                  dockId: null,
                },
                pickupPointId: null,
                pickupDistance: 0,
                polygonName: null,
              },
              {
                id: 'pickupPoint (1efe51a)',
                deliveryChannel: 'pickup-in-point',
                name: 'pickupPoint (1efe51a)',
                deliveryIds: [
                  {
                    courierId: 'pickup',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'Pickup Point',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '3bd',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 1153,
                listPrice: 1153,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: true,
                  friendlyName: 'Loja Copacabana',
                  address: {
                    addressType: 'pickup',
                    receiverName: null,
                    addressId: '1efe51a',
                    postalCode: '22010000',
                    city: 'Rio de Janeiro',
                    state: 'RJ',
                    country: 'BRA',
                    street: 'Avenida Atlântica',
                    number: '300',
                    neighborhood: 'Copacabana',
                    complement: '',
                    reference: null,
                    geoCoordinates: [
                      -43.18686,
                      -22.9697781,
                    ],
                  },
                  additionalInfo: '',
                  dockId: '1',
                },
                pickupPointId: '1_1efe51a',
                pickupDistance: 2.8308863639831543,
                polygonName: null,
              },
            ],
            shipsTo: [
              'BRA',
            ],
            itemId: '15',
            deliveryChannels: [
              {
                id: 'pickup-in-point',
              },
              {
                id: 'delivery',
              },
            ],
          },
        ],
        selectedAddresses: [
          {
            addressType: 'residential',
            receiverName: 'aut* ****',
            addressId: '-1456253174642',
            postalCode: '******030',
            city: 'Rio ** *******',
            state: 'RJ',
            country: 'BRA',
            street: 'Rua *****ção',
            number: '*',
            neighborhood: 'Bot*****',
            complement: null,
            reference: null,
            geoCoordinates: [ ],
          },
        ],
        availableAddresses: [
          {
            addressType: 'residential',
            receiverName: 'aut* ****',
            addressId: '-1456253174642',
            postalCode: '******030',
            city: 'Rio ** *******',
            state: 'RJ',
            country: 'BRA',
            street: 'Rua *****ção',
            number: '*',
            neighborhood: 'Bot*****',
            complement: null,
            reference: null,
            geoCoordinates: [ ],
          },
        ],
        pickupPoints: [
          {
            friendlyName: 'Loja Copacabana',
            address: {
              addressType: 'pickup',
              receiverName: null,
              addressId: '1efe51a',
              postalCode: '22010000',
              city: 'Rio de Janeiro',
              state: 'RJ',
              country: 'BRA',
              street: 'Avenida Atlântica',
              number: '300',
              neighborhood: 'Copacabana',
              complement: '',
              reference: null,
              geoCoordinates: [
                -43.18686,
                -22.9697781,
              ],
            },
            additionalInfo: '',
            id: '1_1efe51a',
            businessHours: [ ],
          },
        ],
      },
      paymentData: {
        giftCards: [ ],
        transactions: [
          {
            isActive: true,
            transactionId: '799CC42BD04D42A8B7E183F368F63175',
            merchantName: 'QAMARKETPLACE',
            payments: [
              {
                id: '08F657F0C47B4672A0824F6C12459180',
                paymentSystem: '6',
                paymentSystemName: 'Boleto Bancário',
                value: 6514,
                installments: 1,
                connectorResponses: { },
                referenceValue: 6514,
                cardHolder: null,
                cardNumber: null,
                firstDigits: null,
                lastDigits: null,
                cvv2: null,
                expireMonth: null,
                expireYear: null,
                url: '*t*p*:*/*a*a*k*t*l*c*.*t*x*a*m*n*s*c*m*b*:*4*/*a*k*s*u*d*n*o*c*/*r*n*a*t*o*/*9*C*4*B*0*D*2*8*7*1*3*3*8*6*1*5*P*y*e*t*0*F*5*F*C*7*4*7*A*8*4*6*1*4*9*8*/*n*t*l*m*n*/*I*s*a*l*e*t*',
                koinUrl: null,
                tid: null,
                redemptionCode: null,
                giftCardId: null,
                giftCardProvider: null,
                giftCardAsDiscount: null,
                group: 'bankInvoice',
                dueDate: '2018-12-09',
                accountId: null,
                parentAccountId: null,
                bankIssuedInvoiceIdentificationNumber: null,
                bankIssuedInvoiceIdentificationNumberFormatted: null,
                bankIssuedInvoiceBarCodeNumber: null,
                bankIssuedInvoiceBarCodeType: null,
              },
            ],
            sharedTransaction: false,
          },
        ],
      },
      clientPreferencesData: {
        locale: 'pt-BR',
        optinNewsLetter: true,
      },
      commercialConditionData: null,
      giftRegistryData: null,
      marketingData: null,
      storePreferencesData: {
        countryCode: 'BRA',
        saveUserData: false,
        timeZone: 'E. South America Standard Time',
        currencyCode: 'BRL',
        currencyLocale: 1046,
        currencySymbol: 'R$',
        currencyFormatInfo: {
          currencyDecimalDigits: 2,
          currencyDecimalSeparator: ',',
          currencyGroupSeparator: '.',
          currencyGroupSize: 3,
          startsWithCurrencySymbol: true,
        },
      },
      openTextField: null,
      invoiceData: null,
      itemMetadata: {
        items: [
          {
            id: '15',
            name: 'Novalgina',
            skuName: 'Novalgina',
            productId: '4',
            refId: 'produtohomologação',
            ean: 'produtohomologação',
            imageUrl: 'http://qamarketplace.vteximg.com.br/arquivos/ids/155400-55-55/Novalgina.jpg?v=635985172600570000',
            detailUrl: '/novalgina/p',
            assemblyOptions: [
              {
                id: 'Receita',
                name: 'Receita',
                required: false,
                inputValues: {
                  Nome1: {
                    maximumNumberOfCharacters: 5,
                    domain: [ ],
                  },
                  Teste: {
                    maximumNumberOfCharacters: 10,
                    domain: [
                      '0987654321',
                    ],
                  },
                  Embalagem: {
                    maximumNumberOfCharacters: 6,
                    domain: [
                      'true',
                      ' false',
                    ],
                  },
                },
                composition: null,
              },
            ],
          },
        ],
      },
      taxData: null,
      customData: null,
      hooksData: null,
      changeData: null,
      subscriptionData: null,
      salesChannel: '1',
      followUpEmail: '20cc6ff050914a0cbd04649d70e52454@ct.vtex.com.br',
      creationDate: '2018-12-06T19:58:51.8603814Z',
      lastChange: '2018-12-06T19:58:59.3637844Z',
      timeZoneCreationDate: '2018-12-06T17:58:51.8603814',
      timeZoneLastChange: '2018-12-06T17:58:59.3637844',
      isCompleted: true,
      hostName: 'qamarketplace',
      merchantName: null,
      userType: '',
      roundingError: 0,
      allowEdition: false,
      allowCancellation: true,
      isUserDataVisible: false,
      allowChangeSeller: false,
    },
  ],
}
