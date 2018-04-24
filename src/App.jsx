import React, { Component } from 'react'
import SmallCircle from './SmallCircle.jsx'

export default class App extends Component {
  render () {

    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
    
    const card = {
      display: 'flex',
      flexDirection: 'column',
      border: 'solid',
      width: '25em',
      height: '25em',
    }
    
    const description = {
      margin: '1em'
    }

    const title = {
      textAlign: 'center',
      fontSize: '2em',
      margin: '1em'
    }
    
    const graph = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '1em'
    }

    return (
      <div style={container}>
        <div style={card}>
          <div style={title}>Stateless Component</div>
          <div style={graph}>
            <SmallCircle radius='10em' color='#0d4261'/>
          </div>
          <div style={description}>Loremipsum</div>
        </div>
        <div style={card}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={card}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={card}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={card}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={card}><SmallCircle radius='10em' color='#0d4261'/></div>
        <div style={card}><SmallCircle radius='10em' color='#0d4261'/></div>
      </div>
    )
  }
}
