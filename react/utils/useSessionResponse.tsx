/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react'

export const useSessionResponse = () => {
  const [session, setSession] = useState<any>()
  const sessionPromise = useMemo(
    () =>
      ((window as any).__RENDER_8_SESSION__?.sessionPromise as Promise<any>) ??
      undefined,
    []
  )

  useEffect(() => {
    if (!sessionPromise) {
      return
    }

    sessionPromise.then((sessionResponse: any) => {
      setSession(sessionResponse?.response)
    })
  }, [sessionPromise, setSession])

  return session
}
