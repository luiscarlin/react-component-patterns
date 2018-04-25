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
