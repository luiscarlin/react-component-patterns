import React from 'react'

const card = {
  display: 'flex',
  flexDirection: 'column',
  borderStyle: 'solid',
  borderWidth: '0.3px',
  width: '25em',
  height: '35em',
  margin: '1em'
}

const description = {
  padding: '0.5em', 
  height: '20%',
  textAlign: 'center'
}

const title = {
  textAlign: 'center',
  fontSize: '1.8em',
  padding: '0.5em',
  height: '10%'
}

const anchor = {
  textDecoration: 'none',
  color: 'black'
}

const graph = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5em',
  height: '60%',
}


const Card = props => (
  <div style={card}>
    <a href={props.href || '/'} target='_blank' style={anchor}>
      <div style={title}>{props.title}</div>
    </a>
    <div style={graph}>
      {props.children}
    </div>
    <div style={description}>{props.description}</div>
  </div>
)

export default Card
