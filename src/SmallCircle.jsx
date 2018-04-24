import React from 'react'

const SmallCircle = props => {

  const circle = {
    width: props.radius,
    height: props.radius,
    borderRadius: '50%',
    background: props.color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const text = {
    color: 'white',
    fontSize: '1.5em'
  }
  
  return (
    <div style={circle}>
      <div style={text}>Small Circle</div>
    </div>
  )  
}

export default SmallCircle
