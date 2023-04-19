import React, { Component, createRef } from 'react'
import { Navigate } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         navigate : false,
         user: ''
      }
      this.inputRef = createRef()
    }

    goToHome = () => {
        this.setState({
            user: '/user/'+this.inputRef.current.value,
            navigate: true
        })


    }

  render() {
    return (
      <div>
        { this.state.navigate && <Navigate to={this.state.user}/>}
        <input type='text' ref={this.inputRef} />
        <button onClick={() => this.goToHome()}>Login</button>
      </div>
    )
  }
}

export default Login