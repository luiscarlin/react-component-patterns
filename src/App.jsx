import React, { Component } from 'react'
import DefaultComponent from './DefaultComponent.jsx'
import SmallCircle from './SmallCircle.jsx'
import Card from './Card.jsx'

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
          <Card title='Stateless Component' description='Also called "dumb component", "presenter", or "view". It is pretty much a function that returns HTML. It imports React.'>
            <SmallCircle radius='8em'/>
          </Card>
          <Card title='Stateful Component' description='lorem'>
            <SmallCircle radius='5em'/>
          </Card>
          <Card title='Container Component' description='lorem'>
            <SmallCircle radius='5em'/>
          </Card>
          <Card title='High Order Component' description='lorem'>
            <SmallCircle radius='5em'/>
          </Card>
          <Card title='Component w/ Render Callbacks' description='lorem'>
            <SmallCircle radius='5em'/>
          </Card>
        </div>
      </div>
    )
  }
}
