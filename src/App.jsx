import React from 'react'
import logo from './assets/cohete.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <p className="top">Houston?, Houston?... Oops, we had a problem!</p>
      <main className="main-cont">
        <img src={logo} className="logo" alt="logo" width="120" />
      </main>
      <div className="bottom">
        <p>404</p>
        <p>Not Found</p>
      </div>
    </div>
  )
}

export default App
