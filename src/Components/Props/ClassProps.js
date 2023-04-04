import React, { Component } from 'react'

class ClassProps extends Component {
  constructor(props){
    super(props)

    this.state = {
      name : this.props.name,
      work : this.props.work,
      func1 : this.props.func1,
      input_name : ''
    }
  }

  changeListener = (event) => {
    this.setState({
      input_name : event.target.value
    })
  }

  changeName = (input_name) => {
    this.setState({
      name : input_name
    })
  }

  render() {
    return (
      <div>ClassProps: <br></br>
        {this.state.name}<br></br>
        {this.state.work}<br></br>
        <button onClick={() => this.state.func1("class component")}>Click me</button><br></br>

        <input placeholder='enter your name' value={this.state.input_name} onChange={this.changeListener}/><br></br>
        <button onClick={() => this.changeName(this.state.input_name)}>Change state input</button><br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default ClassProps