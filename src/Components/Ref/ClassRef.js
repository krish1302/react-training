import React, { Component, createRef } from 'react'

class ClassRef extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : this.props.name
      }
      this.input_ref = createRef();
    }

    checkInput = () => {
        console.log(this.input_ref.current.value)
    }

    childFunc = () => {
        alert('This is classref component')
    }

  render() {
    return (
      <div>ClassRef: <br></br>
        {this.state.name} <br></br>
        <input ref={this.input_ref} /> <br></br>
        <button onClick={() => this.checkInput()}>Click me to get Input Value</button>
      </div>
    )
  }
}

export default ClassRef