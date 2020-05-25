import GridCard from '@/views/GridLayout/GridCard'
import { Layout } from 'antd'
import React, { memo } from 'react'

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
