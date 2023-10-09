import React, { FC } from 'react'
import Clipboard from 'react-clipboard.js'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import { getLoginUrl } from '../../utils'

interface Props {
  barCodeNumber: string
}

const CSS_HANDLES = [
  'barCodeWrapper',
  'barCodeNumber',
  'barCodeCopyButtonWrapper',
]

const BarCode: FC<Props> = ({ barCodeNumber }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const isEncrypted = barCodeNumber.includes('*')

  return (
    <div
      data-testid="bank-invoice-barcode"
      className={`${handles.barCodeWrapper} flex-l b--muted-4 ba br3 bw1`}
    >
      <div
        className={`${handles.barCodeNumber} tc ph7 ph9-m pv4 lh-copy c-on-base`}
      >
        {barCodeNumber}
      </div>
      {isEncrypted ? (
        <div
          className={`${handles.barCodeCopyButtonWrapper} b--muted-4 bl-l bt bt-0-l bw1 flex flex-row-l flex-column`}
        >
          <Button variation="tertiary" href={getLoginUrl()} target="_blank">
            <FormattedMessage id="store/header.bankinvoice.copy" />
          </Button>
        </div>
      ) : (
        <Clipboard
          component="div"
          data-clipboard-text={barCodeNumber}
          className={`${handles.barCodeCopyButtonWrapper} b--muted-4 bl-l bt bt-0-l bw1 flex flex-row-l flex-column`}
        >
          <Button variation="tertiary">
            <FormattedMessage id="store/header.bankinvoice.copy" />
          </Button>
        </Clipboard>
      )}
    </div>
  )
}

export default BarCode
