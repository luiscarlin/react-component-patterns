import React, { Component } from 'react'
import SmallCircle from './SmallCircle.jsx'
import Card from './Card.jsx'

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
        <Card title='Stateless Component' description='lorem'>
          <SmallCircle />
        </Card>
        <Card title='Stateless Component' description='lorem'>
          <SmallCircle />
        </Card>
        <Card title='Stateless Component' description='lorem'>
          <SmallCircle />
        </Card>
        <Card title='Stateless Component' description='lorem'>
          <SmallCircle />
        </Card>
        <Card title='Stateless Component' description='lorem'>
          <SmallCircle />
        </Card>
        <Card title='Stateless Component' description='lorem'>
          <SmallCircle />
        </Card>
      </div>
    )
  }
}
