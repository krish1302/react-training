import React, { Component, createRef } from 'react'
import './Page1.css'

class Page1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        emailMsg : ""
      }
      this.emailRef = createRef()
      this.passRef = createRef()
    }

    checkUser = () => {
        this.setState({
            emailMsg : ""
        })
        if (this.emailRef.current.value === 'balakrish@gmail.com' && this.passRef.current.value === '1234'){
            // alert('user success')
            this.props.setPage('page2')
        }
        if(this.emailRef.current.value !== 'balakrish@gmail.com'){
            this.setState({
                emailMsg : "your email is wrong"
            })
        }
        else{
            alert('user wrong')
        }
    }

    render() {
        return (
            <div className='login'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" ref={this.emailRef} />
                </div>
                <small>{this.state.emailMsg}</small>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput2" placeholder=""  ref={this.passRef} />
                </div>
                <button type="button" class="btn btn-success" onClick={() => this.checkUser()}>Login</button>
            </div>
        )
    }
}

export default Page1