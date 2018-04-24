import React, { Component } from 'react'
import SmallCircle from './SmallCircle.jsx'

export default class App extends Component {
  render () {

    const container = {
      display: 'flex',
      flexDirection: 'column'
      
    }

    return (
      <div style={container}>
          <SmallCircle color='#0d4261'/>
          <SmallCircle color='#0d4261'/>
          <SmallCircle color='#0d4261'/>
          <SmallCircle color='#0d4261'/>
          <SmallCircle color='#0d4261'/>
          <SmallCircle color='#0d4261'/>
      </div>
    )
  }
}
