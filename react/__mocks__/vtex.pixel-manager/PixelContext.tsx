import React, { Component } from 'react'

export function withPixel(WrappedComponent: any) {
  return class Pixel extends Component {
    public render() {
      return <WrappedComponent />
    }
  }
}
