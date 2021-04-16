import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/layoout/Navbar'
import Users from './component/users/Users'
import UserDetails from './component/users/UserDetails'
import Search from './component/users/Search'
import Alert from './component/layoout/Alert'
import About from './component/pages/About'
import axios from 'axios'
import "./App.css"

class App extends Component {

  state = {
    users: [],
    userDetails: {},
    repos: [],
    loading: false,
    alert: null
  };

  //show initial users
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setData({loading: true})
  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     setData({ users: res.data, loading: false })
  //   }
  //   fetchData()
  // }, [])

  //search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false })

  }

  //get users repos
  getUserRepos = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc & client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ repos: res.data, loading: false })
  }

  //Get single github user
  getUser = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ userDetails: res.data, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })

    setTimeout(() => this.setState({ alert: null }), 2000)
  }

  render() {
    const { users, userDetails, loading, alert, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={(users.length) > 0 ? true : false}
                    setAlert={this.setAlert} />
                  <Users data={users} loading={loading} />
                </Fragment>
              )} />
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/user/:login' render={props => (
                <UserDetails {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  user={userDetails}
                  loading={loading} />
              )} />
              <Route></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
