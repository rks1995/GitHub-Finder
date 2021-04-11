import React, { useState } from 'react'
import Navbar from './component/layoout/Navbar'
import Users from './component/users/Users'
import Search from './component/users/Search'
import Alert from './component/layoout/Alert'
import axios from 'axios'
import "./App.css"


function App() {
  const [data, setData] = useState({
    users: [],
    loading: false,
    alert: null
  })

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
  const searchUsers = async (text) => {
    setData({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setData({ users: res.data.items, loading: false })

  }

  const clearUsers = () => setData({ users: [], loading: false })

  const setAlert = (msg, type) => {
    setData({ alert: { msg: msg, type: type } })

    setTimeout(() => setData({ alert: null }), 2000)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Alert alert={data.alert} />
        <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={(undefined !== data.users && data.users.length) > 0 ? true : false} setAlert={setAlert} />
        <Users data={data.users} loading={data.loading} />
      </div>
    </div>
  );
}

export default App;
