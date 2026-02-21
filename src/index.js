import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Desktop3 from './views/desktop3'
import Desktop1 from './views/desktop1'
import Desktop2 from './views/desktop2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Desktop3} exact path="/desktop3" />
        <Route component={Desktop1} exact path="/" />
        <Route component={Desktop2} exact path="/desktop2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
