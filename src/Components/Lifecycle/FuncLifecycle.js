import React, { useEffect, useState } from 'react'
import ClassCLifecycle from './ClassCLifecycle'

const FuncLifecycle = (props) => {

    const [count, setCount] = useState(0)

    //mounting lifecycle
    useEffect(()=>{
        console.log('Mount useEffect')
    }, [])

    //updating lifecycle
    useEffect(()=>{
        console.log('Update useEffect')
    }, [count])

  return (
    <div>FuncLifecycle <br></br>
    {count}<br></br>
    <button onClick={()=> setCount(count+1)}>increase count</button>
    <ClassCLifecycle />
    </div>
  )
}

export default FuncLifecycle