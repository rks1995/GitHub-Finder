import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/layoout/Navbar'

import UserDetails from './component/users/UserDetails'
import Alert from './component/layoout/Alert'
import About from './component/pages/About'
import Home from './component/pages/Home'
import NotFound from './component/pages/NotFound'

import GithubState from './context/github/githubState'
import AlertState from './context/alert/AlertState'

import "./App.css"

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={UserDetails} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
