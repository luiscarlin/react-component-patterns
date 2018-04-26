import React from 'react'


const Circle = props => {
  const circle = {
    width: props.radius,
    height: props.radius,
    borderRadius: '50%',
    // background: '#0d4261',
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

export default Circle
