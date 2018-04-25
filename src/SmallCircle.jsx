import React from 'react'

const circle = {
  width: '10em',
  height: '10em',
  borderRadius: '50%',
  background: '#0d4261',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const text = {
  color: 'white',
  fontSize: 'auto',
  textAlign: 'center'
}

const SmallCircle = props => {
  return (
    <div style={circle}>
      <div style={text}>Stateless Component render, props, context</div>
    </div>
  )
}

export default SmallCircle
