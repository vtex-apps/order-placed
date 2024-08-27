import React, { FC } from 'react'
import Clipboard from 'react-clipboard.js'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { Button, withToast } from 'vtex.styleguide'

import { getLoginUrl } from '../../utils'

interface Props {
  barCodeNumber: string
  showToast?: (params: { message: string }) => void
}

const CSS_HANDLES = [
  'barCodeWrapper',
  'barCodeNumber',
  'barCodeCopyButtonWrapper',
]

const messages = defineMessages({
  copy: { id: 'store/header.bankinvoice.copy.barcode', defaultMessage: '' },
})

const BarCode: FC<Props> = ({ barCodeNumber, showToast }) => {
  const handles = useCssHandles(CSS_HANDLES)
  const isEncrypted = barCodeNumber.includes('*')
  const { formatMessage } = useIntl()

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
          <Button
            variation="tertiary"
            onClick={() => {
              showToast({
                message: formatMessage(messages.copy),
              })
            }}
          >
            <FormattedMessage id="store/header.bankinvoice.copy" />
          </Button>
        </Clipboard>
      )}
    </div>
  )
}

export default withToast(BarCode)
