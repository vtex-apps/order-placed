/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { useEffect } from 'react'
import { useRuntime } from 'vtex.render-runtime'

import { pushPayEvent } from '../utils/events'

const useTracking = () => {
  const runtime = useRuntime()

  const { account } = runtime

  useEffect(() => {
    console.info({ account, runtime })

    pushPayEvent(
      {
        event: 'puchase',
      },
      account
    )
  }, [account])
}

export default useTracking
