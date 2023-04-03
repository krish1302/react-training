import React from 'react'

function FuncProps(props) {
  return (
    <div>FuncProps :
        <b>{props.name}</b><br></br>
        <b>{props.work}</b><br></br>
        <button onClick={() => props.func1('Functional component')}>Click Me</button>
    </div>
  )
}

export default FuncProps