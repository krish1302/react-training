import React, { Component } from 'react'

class ProfileClass extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : '',
            phone : '',
            email : ''
        }
    }

    changeListener = (event) => {
        const key = event.target.name
        this.setState({
            [key] : event.target.value
        })
    } 

    submit  = () => {
        alert(this.state.name +' '+ this.state.email +' '+ this.state.phone)
    }

  render() {
    return (
      <form>
        <label>Create your profile</label><br></br><br></br>
        <b>Name</b><br></br>
        <input placeholder='enter your name' name="name" value={this.state.name} onChange={this.changeListener}/><br></br>
        <b>Phone NO</b><br></br>
        <input placeholder='enter your phone' name="phone" value={this.state.phone} onChange={this.changeListener}/><br></br>
        <b>Email Address</b><br></br>
        <input placeholder='enter your Email' name="email" value={this.state.email} onChange={this.changeListener}/><br></br>
        <button onClick={this.submit}>Save my Profile</button>
      </form>
    )
  }
}

export default ProfileClass