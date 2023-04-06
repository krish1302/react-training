import React, {useState, useRef, forwardRef, useImperativeHandle } from 'react'

const FuncRef = forwardRef((props, ref) => {
    const [name, setName] = useState(props.name)
    const inputRef = useRef()

    const getInput = () => {
        console.log(inputRef.current.value)
    }

    

    useImperativeHandle = (ref, () => ({
        childFunc,
    }))

    const childFunc = () => {
        console.log('This is funcref component')
    }
    

  return (
    <div>FuncRef: <br></br>
        {name} <br></br>
        <input ref={inputRef}/><br></br>
        <button onClick={()=> getInput()}>Click me to get Input Value</button>
    </div>
  )
})

export default FuncRef