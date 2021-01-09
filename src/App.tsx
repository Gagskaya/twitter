import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import './App.scss'
export const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  )
}
