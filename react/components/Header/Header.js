import React from 'react'
import PropTypes from 'prop-types'
import Warnings from './Warnings'
import SuccessIcon from '../../Icons/Success'
import { Button } from 'vtex.styleguide'

const Header = ({ data, profile }) => {
  return (
    <div className="pt7 sans-serif">

      <div className="flex justify-center green">
        <SuccessIcon size="50" />
      </div>

      <p className="tc c-on-base t-heading-1">
        Obrigado por sua compra!
      </p>

      {/* E-mail reminder */}
      <div className="center mt4 t-body tc c-muted-1">
        <p>
          Você receberá um e-mail no endereço <strong className="nowrap">{profile.email}</strong> com todos os detalhes do seu pedido em até 5 minutos.<br />
          Lembre-se de conferir sua caixa de lixo eletrônico.
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-center t-action">
        <p className="tr c-action-primary mr2">
          <Button variation="secondary">
            Reenviar email
          </Button>
        </p>
        <p className="tr c-action-primary ml2">
          <Button variation="secondary">
            Imprimir página
          </Button>
        </p>
      </div>

      {/* Important warnings */}
      <Warnings split={data.length} />
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
}

export default Header
