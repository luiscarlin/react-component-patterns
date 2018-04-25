import React from 'react'

export default class DefaultComponent extends React.Component {
  constructor(props) {
    super(props)
    this.radius = props.radius
  }

  render() {
    const circle = {
      width: this.radius,
      height: this.radius,
      borderRadius: '50%',
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const text = {
      color: 'white',
      fontSize: 'auto',
      textAlign: 'center',
      margin: '0.5em'
    }
    return (
      <div style={circle}>
        <div style={text}>lifecycle events, state, render, props, context</div>
      </div>
    )
  }
}
