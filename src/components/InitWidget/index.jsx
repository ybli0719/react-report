import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import React, { memo, useCallback, useMemo, useState } from 'react'
import './style.less'

const InitWidget = props => {
  const [widgetType, setWidgetType] = useState('charts')

  const selectType = e => {
    setWidgetType(e.key)
  }
  const menu = useMemo(
    () => (
      <Menu onClick={selectType}>
        <Menu.Item key='charts'>
          <a>图表</a>
        </Menu.Item>
        <Menu.Item key='table'>
          <a>表格</a>
        </Menu.Item>
      </Menu>
    ),
    []
  )

  const getPopupContainer = useCallback(() => document.getElementById(props.id), [])

  return (
    <div className={`initWidget`} id={props.id}>
      <Space className='actionItems'>
        <Dropdown overlay={menu} trigger={['click']} getPopupContainer={getPopupContainer}>
          <MenuOutlined />
        </Dropdown>
        <CloseOutlined onClick={props.onDelet} />
      </Space>
    </div>
  )
}

export default memo(InitWidget)
