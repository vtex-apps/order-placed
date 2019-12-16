import { useEffect, FC } from 'react'
import { withPixel } from 'vtex.pixel-manager/PixelContext'
import { withRuntimeContext } from 'vtex.render-runtime'

interface Props {
  push: (...args: any) => void
  runtime: any
  eventList: any[]
}

// TODO: TEST THIS
const AnalyticsWrapper: FC<Props> = ({ eventList, runtime, push }) => {
  useEffect(() => {
    eventList.forEach(event => push(event))
  }, [eventList, push, runtime.route.path])
  return null
}

export const Analytics = withPixel(withRuntimeContext(AnalyticsWrapper))
