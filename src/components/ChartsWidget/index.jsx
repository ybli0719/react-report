import React, { memo } from 'react'
import ReactEcharts from 'echarts-for-react'
import './styles.less'
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
}

const ChartsWidget = () => {
  return (
    <ReactEcharts
      option={option}
      lazyUpdate={true}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default memo(ChartsWidget)
