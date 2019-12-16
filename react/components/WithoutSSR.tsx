import React, { ComponentType } from 'react'
import { NoSSR } from 'vtex.render-runtime'

export default function(ChildComponent: ComponentType) {
  return function WithoutSSR(props: any) {
    return (
      <NoSSR>
        <ChildComponent {...props} />
      </NoSSR>
    )
  }
}
