import { Component } from 'react'
import { withPixel } from 'vtex.pixel-manager/PixelContext'
import { withRuntimeContext } from 'vtex.render-runtime'

interface Props {
  push: (...args: any) => void
  runtime: any
  eventList: any
}

class AnalyticsWrapper extends Component<Props> {
  public sendEvents(events: any) {
    events.forEach((event: any) => {
      this.props.push(event)
    })
  }

  public componentDidMount() {
    this.sendEvents(this.props.eventList)
  }

  public componentDidUpdate(prevProps: any) {
    if (prevProps.runtime.route.path !== this.props.runtime.route.path) {
      this.sendEvents(this.props.eventList)
    }
  }

  public render() {
    return null
  }
}

export default withPixel(withRuntimeContext(AnalyticsWrapper))
