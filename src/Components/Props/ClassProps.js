import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>ClassProps {this.props.name} {this.props.work} 
      <button onClick={() => this.props.func1("class component")}>Click me</button>
      </div>
    )
  }
}

export default ClassProps