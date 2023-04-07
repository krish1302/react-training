import React, { Component } from 'react'

class ClassMountingLifeCycle extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first : this.props.first
      }
    }

    // static getDerivedStateFromProps(props, state){
    //     return {first: props.first}
    // }

    componentDidMount(){
        console.log('component mounted')
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevState)
        return null
    }

    componentDidUpdate(){
        console.log('component updated')
    }

    changeName = ()  =>{
        this.setState({first: "krish"})
    }


    componentWillUnmount(){
        console.log('component unmounted')
    }

  render() {
    return (
      <div>ClassMountingLifeCycle {this.state.first}
      
      <button onClick={() => this.changeName()}>Change First</button>

      
      </div>
    )
  }
}

export default ClassMountingLifeCycle