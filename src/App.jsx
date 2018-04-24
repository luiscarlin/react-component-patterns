import React, { Component } from 'react'
import SmallCircle from './SmallCircle.jsx'

export default class App extends Component {
  render () {

    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
    
    const item = {
      border: 'solid',

    }

    return (
      <div style={container}>
        <div style={item}><SmallCircle color='#0d4261'/></div>
        <div style={item}><SmallCircle color='#0d4261'/></div>
        <div style={item}><SmallCircle color='#0d4261'/></div>
        <div style={item}><SmallCircle color='#0d4261'/></div>
        <div style={item}><SmallCircle color='#0d4261'/></div>
        <div style={item}><SmallCircle color='#0d4261'/></div>
        <div style={item}><SmallCircle color='#0d4261'/></div>
      </div>
    )
  }
}
