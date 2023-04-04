import React, { useState } from 'react'

function FuncProps(props) {

  const [name, setName] = useState(props.name)
  const [work, setWork] = useState(props.work)
  const [input_name, setInputName] = useState('') 

  const changeListener = (event) => {
    console.log(event)
    setInputName(event.target.value)
  }

  const changeName = (input_name) => {
    console.log(input_name)
    setName(input_name)
  }

  return (
    <div>FuncProps :<br></br>
        <b>{name}</b><br></br>
        <b>{work}</b><br></br>
        <button onClick={() => props.func1('Functional component')}>Click Me</button>
        <br></br>
        <br></br>
        <input placeholder='name' value={input_name} onChange={changeListener}/><br></br>
        <button onClick={() => changeName(input_name)}>change Name</button><br></br>
        <br></br><br></br>

    </div>
  )
}

export default FuncProps