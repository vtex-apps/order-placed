import { useEffect, FC } from 'react'
import { withPixel } from 'vtex.pixel-manager/PixelContext'
import { useRuntime } from 'vtex.render-runtime'

interface Props {
  push: (...args: any) => void
  runtime: any
  eventList: any[]
}

const Analytics: FC<Props> = ({ eventList, push }) => {
  const { route } = useRuntime()

  useEffect(() => {
    eventList.forEach((event) => push(event))
  }, [eventList, push, route.path])

  return null
}

export default withPixel(Analytics)
