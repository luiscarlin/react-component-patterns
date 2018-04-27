import React from 'react'

export default class ComponentWRenderCallback extends React.Component {

  render() {
    const circle = {
      width: this.props.radius,
      height: this.props.radius,
      borderRadius: '50%',
      display: 'flex',
      flewDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'solid red'
    }

    const middleCircle = {
      width: '12em',
      height: '12em',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'dashed',
      color: 'black'
    }

    return (
      <div style={circle}>
        <div style={middleCircle}>
          {this.props.renderCallback()}
        </div>
      </div>
    )
  }
}
