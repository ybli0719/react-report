import React, { memo, useState } from 'react'
import { Layout, Button } from 'antd'

const { Header } = Layout
const GridLayout = () => {
  return (
    <Layout>
      <Button type='primary'>1</Button>
    </Layout>
  )
}

export default memo(GridLayout)
