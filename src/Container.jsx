import React from 'react'
import Stateless from './Stateless.jsx'

export default class Container extends React.Component {
  render() {
    const circle = {
      width: this.props.radius,
      height: this.props.radius,
      borderRadius: '50%',
      display: 'flex',
      flewDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: 'red'
    }

    const text = {
      color: 'black',
      fontSize: 'auto',
      textAlign: 'center',
      margin: '0.5em'
    }

    return (
      <div style={circle}>
        <div style={text}>Stateful</div>
        <div>
          <Stateless radius='8em' innerText='Stateless'/>
        </div>
      </div>
    )
  }
}