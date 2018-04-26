import React from 'react'


const Stateless = props => {
  const circle = {
    width: props.radius,
    height: props.radius,
    borderRadius: '50%',
    background: '#0d4261',
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
      <div style={text}>render, props, context</div>
    </div>
  )
}

export default Stateless
