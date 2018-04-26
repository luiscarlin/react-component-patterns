import React, { Component } from 'react'
import Card from './Card.jsx'
import DefaultComponent from './DefaultComponent.jsx'
import Stateless from './Stateless.jsx'
import Stateful from './Stateful.jsx'
import Container from './Container.jsx'

export default class App extends Component {
  render() {
    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

    const title = {
      color: 'black',
      fontSize: '4em',
      textAlign: 'center'
    }

    return (
      <div>
        <h1 style={title}>React Component Patterns</h1>
        <div style={container}>
          <Card title='Component' description='This is the React default component. It is a class that extends { Component } from react.'>
            <DefaultComponent radius='16em'/>
          </Card>
          <Card title='Stateless Component' description='Also called "dumb", "presenter", "view", or "display". It is a function that returns HTML elements.'>
            <Stateless radius='16em'/>
          </Card>
          <Card title='Stateful Component' description='Also called "smart", "container", "controller", or "data". Uses APIs related to life cycle and state.'>
            <Stateful radius='16em'/>
          </Card>
          <Card title='Container Component' description='Now, you can reuse the Stateless Component in Stateful Components to create red circles, yellow circles, blue circles, setc'>
            <Container radius='16em'/>
          </Card>
          <Card title='High Order Component' description='lorem'>
            <Stateless radius='5em'/>
          </Card>
          <Card title='Component w/ Render Callbacks' description='lorem'>
            <Stateless radius='5em'/>
          </Card>
        </div>
      </div>
    )
  }
}
