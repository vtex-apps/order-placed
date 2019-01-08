import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'vtex.styleguide'
import SuccessIcon from '../../Icons/Success'
import { profileShape } from '../../proptypes/shapes'
import Warnings from './Warnings'
import Summary from './Summary'

const Header = ({ data, profile }) => {
  return (
    <div className="pt7 sans-serif">
      <div className="flex justify-center c-success">
        <SuccessIcon size={50} />
      </div>

      <p className="tc c-on-base mt7 mb0 t-heading-4">
        Obrigado por sua compra!
      </p>

      <div className="center mt2 t-body tc c-muted-1">
        <p>
          Você receberá um e-mail no endereço <strong className="nowrap">{profile.email}</strong> com todos os detalhes do seu pedido em até 5 minutos.<br />
          Lembre-se de conferir sua caixa de lixo eletrônico.
        </p>
      </div>

      <div className="flex justify-center t-action mt7">
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
      <Warnings split={data.length} />
      <Summary data={data} />
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
  profile: profileShape.isRequired,
}

export default Header
