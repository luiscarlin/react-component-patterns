import React from 'react'

const HigherOrder = (ContainerComponent, props) => {
  const circle = {
    width:'16em',
    height: '16em',
    borderRadius: '50%',
    display: 'flex',
    flewDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: 'black'
  }
  return (
    <div style={circle}>
      <ContainerComponent { ...props } />
    </div>
  )
}

export default HigherOrder
