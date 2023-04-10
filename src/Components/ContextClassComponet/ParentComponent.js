import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  render() {
    return (
      <div>ParentComponent
        <ChildComponent />
      </div>
    )
  }
}

export default ParentComponent