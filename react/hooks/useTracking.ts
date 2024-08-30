/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { useEffect } from 'react'
import { useRuntime } from 'vtex.render-runtime'

import { pushPayEvent } from '../utils/events'

const useTracking = ({
  event = 'purchase',
  orderTotal,
}: {
  event?: string
  orderTotal?: number
}) => {
  const runtime = useRuntime()
  const { account } = runtime

  useEffect(() => {
    pushPayEvent(
      {
        event,
        value: orderTotal ? orderTotal / 100 : 0,
      },
      account
    )
  }, [account, orderTotal])
}

export default useTracking
