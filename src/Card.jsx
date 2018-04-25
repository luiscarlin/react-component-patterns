import React from 'react'

const card = {
  display: 'flex',
  flexDirection: 'column',
  border: 'solid',
  width: '25em',
  height: '25em',
}

const description = {
  margin: '1em'
}

const title = {
  textAlign: 'center',
  fontSize: '2em',
  margin: '1em'
}

const graph = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1em'
}


const Card = props => (
  <div style={card}>
    <div style={title}>{props.title}</div>
    <div style={graph}>
      {props.children}
    </div>
    <div style={description}>{props.description}</div>
  </div>
)

export default Card
