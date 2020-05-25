import lazy from '@/components/lazyImport'
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
const GridLayout = lazy(() => import('@/layout/GridLayout'))

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={GridLayout} />
      </Switch>
    </HashRouter>
  )
}

export default App
