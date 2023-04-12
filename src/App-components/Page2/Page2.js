import React, { Component } from 'react'
import './Page2.css'

class Page2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        button : ["Primary", "Secondary", "Success", "Danger", "Warning", "Info", "Light", "Dark"],
        buttons : [
            {name: "Primary", c_name:"btn btn-primary", value:"page1"},
            {name: "Secondary", c_name:"btn btn-secondary", value:"page2"},
            {name: "Success", c_name:"btn btn-success", value:"page3"},
            {name: "Danger", c_name:"btn btn-danger", value:"page4"},
            {name: "Warning", c_name:"btn btn-warning", value:"page5"},
            {name: "Info", c_name:"btn btn-info", value:"page6"},
            {name: "Light", c_name:"btn btn-light", value:"page7"},
            {name: "Dark", c_name:"btn btn-dark", value:"page8"},
        ]
      }
    }

  render() {
    return (
      <div>Welcome user
        <br></br>
        <button type="button" class="btn btn-danger" onClick={()=> this.props.setPage('page1')}>Login</button>
        <br></br>

        {/* <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button> */}

        {
            this.state.buttons.map(button => {
                return <button type='button' className={button.c_name} onClick={()=> alert(button.value)}>{button.name}</button>
            })
        }

      </div>
    )
  }
}

export default Page2