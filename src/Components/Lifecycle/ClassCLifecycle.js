import React, { Component } from 'react'

class ClassCLifecycle extends Component {
    constructor(){
        console.log('Class create Lifecycle constructor')
    }

    getDerivedStateFromProps(props, state){
        console.log('Class create Lifecycle getDerivedStateFromProps')
    }

    componentDidMount(){
        console.log('class create lifecycle component DidMount')
    }

  render() {
    console.log('class create lifecycle render')
    return (
      <div>ClassCLifecycle</div>
    )
  }
}

export default ClassCLifecycle