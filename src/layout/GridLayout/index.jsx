import React, { memo } from 'react'
import { Layout } from 'antd'
import GridCard from '@/views/GridLayout/GridCard'

const { Header, Content } = Layout

const GridLayout = () => {
  return (
    <Layout className='layout' style={{minHeight: '100vh'}}>
      <Header>
      </Header>
      <Content style={{ padding: 20 }}>
        <GridCard />
      </Content>
    </Layout>
  )
}

export default memo(GridLayout)
