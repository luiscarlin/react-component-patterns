import React from 'react'

export default class Stateful extends React.Component {
  render() {
    const circle = {
      width: this.props.radius,
      height: this.props.radius,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'solid'
    }

    const text = {
      color: 'black',
      fontSize: 'auto',
      textAlign: 'center',
      margin: '0.5em'
    }

    return (
      <div style={circle}>
        <div style={text}>state, lifecycle events, render</div>
      </div>
    )
  }
}

