import React, { Component } from 'react'
import Navbar from "./Navbar"
import News from './News'

export class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <News />
      </div>
  
  ) }
}

export default App