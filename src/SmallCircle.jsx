import React from 'react'

const SmallCircle = props => {

  const circle = {
    width: '30vw',
    height: '30vw',
    borderRadius: '50%',
    background: props.color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1em'
  }

  const text = {
    color: 'white',
    fontSize: '4vw'
  }
  
  return (
    <div style={circle}>
      <div style={text}>Small Circle</div>
    </div>
  )  
}

export default SmallCircle
