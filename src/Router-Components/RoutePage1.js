import React, { Component, createRef } from 'react'

class RoutePage1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
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
  render() {
    return (
      <div>
        <input ref={this.inputRef}/>
        <button onClick={()=> this.inputValidation()}>validate</button>
      </div>
    )
  }
}

export default RoutePage1