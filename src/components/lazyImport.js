import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'

const asyncComponent = importComponent => {
  const AsyncComponent = props => {
    const [component, setComponent] = useState(null)

    useEffect(() => {
      const awaitComponent = async () => {
        const { default: component } = await importComponent()
        setComponent(component)
      }
      awaitComponent()
    }, [])

    const RenderComponent = component

    return RenderComponent ? (
      <RenderComponent {...props} />
    ) : (
      <Spin />
    )
  }
  return AsyncComponent
}

export default asyncComponent

