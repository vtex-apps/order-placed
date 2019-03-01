import React, { Component } from 'react'

export function Pixel(WrappedComponent: any) {
  return class Pixel extends Component {
    public render() {
      return <WrappedComponent />
    }
  }
}
