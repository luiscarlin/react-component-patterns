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
      width: '25em',
      height: '25em',
      padding: '1em'
    }

    return (
      <div style={container}>
        <div style={item}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={item}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={item}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={item}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={item}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={item}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={item}><SmallCircle radius='10em' color='#0d4261'/></div>
      </div>
    )
  }
}
