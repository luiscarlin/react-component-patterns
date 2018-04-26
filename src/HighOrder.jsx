import React from 'react'

const HighOrder = (ContainerComponent, props) => {
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

export default HighOrder

/*export default class HighOrder extends React.Component {
  render() {
    const circle = {
      width: this.props.radius,
      height: this.props.radius,
      borderRadius: '50%',
      display: 'flex',
      flewDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: 'red'
    }

    const text = {
      color: 'black',
      fontSize: 'auto',
      textAlign: 'center',
      margin: '0.5em'
    }

    return (
      <div style={circle}>
        <div style={text}>Stateful</div>
        <div>
          <Stateless radius='8em' innerText='Stateless'/>
        </div>
      </div>
    )
  }
}*/