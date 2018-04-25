import React from 'react'

const card = {
  display: 'flex',
  flexDirection: 'column',
  borderStyle: 'solid',
  borderWidth: '0.3px',
  width: '25em',
  height: '30em',
  margin: '1em'
}

const description = {
  padding: '0.5em', 
  height: '20%',
}

const title = {
  textAlign: 'center',
  fontSize: '1.8em',
  padding: '0.5em',
  height: '5%',
}

const graph = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5em',
  height: '65%',
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
