import React, { Component } from 'react'
import Card from './Card.jsx'
import DefaultComponent from './DefaultComponent.jsx'
import Stateless from './Stateless.jsx'
import Stateful from './Stateful.jsx'
import Container from './Container.jsx'
import HigherOrder from './HigherOrder.jsx'

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
          <Card title='Default Component' description='This is the React default component. It manages its own state and renders its own HTML. All in one package.'>
            <DefaultComponent radius='16em'/>
          </Card>
          <Card title='Stateless Component' description='Also called "dumb", "presenter", "view", or "display". It is a function that returns HTML elements. It is a subset of the Default Component. Why to extract this? Because we can now combine it with other components.'>
            <Stateless radius='16em'/>
          </Card>
          <Card title='Stateful Component' description='Also called "smart", "container", "controller", or "data". Uses APIs related to life cycle and state. It is a subset of the Default Component. Why? Because combination of components.'>
            <Stateful radius='16em'/>
          </Card>
          <Card title='Container Component' description='Now, you can reuse the SAME Stateless Component in Stateful Components to create a red circle component, yellow circle component, blue circle component, etc. Why? Because the more we reuse the less we duplicate.'>
            <Container radius='16em'/>
          </Card>
          <Card title='Higher Order Component' description='Also called "enhancer". This is a function that returns a component that wraps the passed component. Example: HigherOrder(ComponentToWrap). Why? Higher Order Components allow you to dinamically compose components on the fly.'>
            { HigherOrder(Container, { radius: '12em'}) }
          </Card>
          <Card title='Component w/ Render Callbacks' description='lorem'>
            <Stateless radius='5em'/>
          </Card>
        </div>
      </div>
    )
  }
}
