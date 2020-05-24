import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import GridLayout from './layout/GridLayout'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={GridLayout} />
      </Switch>
    </HashRouter>
  )
}

export default App
