export const orderGroup = {
  buyer: {
    name: 'Jane Doe',
    email: 'jane-doe@gmail.com',
    phone: '(11)999887766',
    cpf: '111.222.333-44',
  },
  split: 1,
  status: 'Aguardando aprovação de pagamento',
  creationDate: '15/12/2018 às 16:00',
  orders: [
    {
      orderNumber: '1234567890-01',
      idx: 1,
      orderAddress: {
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'Brasil',
        street: 'Avenida Evandro Lins e Silva',
        number: '900',
        neighborhood: 'Barra da Tijuca',
        cep: '22631-w470',
      },
      shippingAddress: {
        city: '',
        state: '',
        street: '',
        number: '',
        neighborhood: '',
      },
      shippingEstimate: 4,
      shippingFee: 10.00,
      pickUpAddress: {
        city: 'Rio de Janeiro',
        state: 'RJ',
        street: 'Praia de Botafogo',
        number: '300',
        neighborhood: 'Botafogo',
        cep: '22651-470',
      },
      pickUpEstimate: 2,
      seller: '',
      payment: {
        type: '',
        flag: '',
        complement: '',
      },
      items: [
        {
          name: 'Item 1',
          value: 1.0,
          delivery: 'shipping',
        },
        {
          name: 'Item 2',
          value: 2.0,
          delivery: 'pickup',
        },
      ],
    },
  ],

}
