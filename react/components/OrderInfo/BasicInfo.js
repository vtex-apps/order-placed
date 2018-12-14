import React from 'react'
import { Button } from 'vtex.styleguide'

const BasicInfo = () => {
  return (
    <div>
      <div className="order-number-date">
        <p className="f4">
          <strong>Número do pedido: "NUMERO DO PEDIDO"</strong>
          <br />
          <small className="c-muted-2">
            Realizado em 15/12/2018 às 16:20
          </small>
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <strong>Dados pessoais</strong>
          <ul className="no-list-style">
            <li>Jane Doe</li>
            <li>jane-doe@mail-domain.com</li>
            <li>111.222.333-44</li>
            <li>(11)999887766</li>
          </ul>
        </div>
        <div>
          <strong>Endereço na nota fiscal</strong>
          <ul className="no-list-style">
            <li>Avenida Evandro Lins e Silva, 000</li>
            <li>Barra da Tijuca, CEP 22.631-470</li>
            <li>Rio de Janeiro</li>
            <li>Brasil</li>
          </ul>
        </div>
        <div>
          <strong>Forma de pagamento</strong>
          <ul className="no-list-style">
            <li>Cartão de crédito</li>
            <li>Bandeira - Final 1234</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around mv9">
        <Button className="center" variation="secondary">
          Alterar pedido
        </Button>
        <Button className="center" variation="secondary">
          Ir para seus pedidos
        </Button>
      </div>
    </div>
  )
}

export default BasicInfo
