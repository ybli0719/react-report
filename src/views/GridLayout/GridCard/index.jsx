import ChartsWidget from '@/components/ChartsWidget'
import { Button, Card } from 'antd'
import React, { memo, useCallback, useMemo, useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveReactGridLayot = WidthProvider(Responsive)
const defaultGridProps = {
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight: 150,
}

const GridCard = () => {
  const [layouts, setLayouts] = useState({})
  const [widgets, setWidgets] = useState([])
  const [cols, setCols] = useState()

  const addWidget = useCallback(
    () => {
      setWidgets(widgets.concat({
        x: (widgets.length * 3) % (cols || 12),
        y: Infinity, // puts it at the bottom
        w: 3,
        h: 2,
        i: new Date().getTime().toString(),
      }))
    },
    [widgets],
  )

  const removeWidget = index => () => {
    setWidgets(widgets.filter((v, i) => i !== index))
  }

  const onBreakpointChange = useCallback(
    (breakpoint, cols) => {
      setCols(cols)
    },
    [],
  )

  const onLayoutChange = useCallback(
    (currentLayout, allLayouts) => {
      setLayouts(allLayouts)
    },
    [],
  )

  const extra = useMemo(() => (
    <Button
      type='link'
      onClick={addWidget}
    >
      add
    </Button>
  ), [addWidget])

  const generateDom = useMemo(() => widgets.map((v, i) => {
    return (
      <div key={v.i} data-grid={v}>
        <span className='remove' onClick={removeWidget(i)}>x</span>
        <ChartsWidget />
      </div>
    )
  }), [widgets])

  return (
    <Card
      title='charts'
      extra={extra}
    >
      <ResponsiveReactGridLayot
        {...defaultGridProps}
        className='layout'
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        layouts={layouts}
      >
        {generateDom}
      </ResponsiveReactGridLayot>
    </Card >
  )
}

export default memo(GridCard)
