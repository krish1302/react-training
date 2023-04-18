import React, { Component, createRef } from 'react'
import { Navigate, Outlet, Routes, Route, NavLink } from 'react-router-dom'
import SubRouter1 from './sub-routers/SubRouter1'
import SubRouter2 from './sub-routers/SubRouter2'

class RoutePage1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        page : ""
      }

      this.inputRef = createRef()
    }
    inputValidation = () =>{
        var value = this.inputRef.current.value

        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(value.length)
        if (value != ""){
            
        }
        if(value.length < 5){
            console.log('email needs 5 character')
        }
        if(re.test(value)){
            console.log('email success')
        }
        else{
            console.log('wrong email pattern')
        }
        
    }

    goPage2(){
      this.setState({
        page: "page2"
      })
    }

  render() {
    return (
      <div>
        { this.state.page === 'page2' && ( <Navigate to='/page2' /> )}

        <input ref={this.inputRef}/>
        <button onClick={()=> this.inputValidation()}>validate</button>
        <button onClick={()=> this.goPage2()}>go to page 2</button>

        <nav>
          <NavLink to='/page1/sub1'>SubRouter1</NavLink>
          <NavLink to='/page1/sub2'>SubRouter2</NavLink>
        </nav>

        <Outlet></Outlet>

      </div>
    )
  }
}

export default RoutePage1