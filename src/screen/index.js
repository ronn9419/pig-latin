import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import TranslatorScreen from '@screen/Translator'
import HistoryScreen from '@screen/History'

export default () => (
  <Router basename="/pig-latin">
    <Switch>
      <Route path={'/translator'} component={TranslatorScreen} />
      <Route path={'/history'} component={HistoryScreen} />
      <Redirect to={'/translator'} />
    </Switch>
  </Router>
)
