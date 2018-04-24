import React from 'react'

const SmallCircle = props => {

 const circle = {
   width: '100px',
   height: '100px',
   borderRadius: '50%',
   background: props.color,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
  }

  const text = {
    color: 'white'
  }
  
  return (
    <div style={circle}>
      <div style={text}>Small Circle</div>
    </div>
  )  
}

export default SmallCircle
