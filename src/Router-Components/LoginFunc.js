import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginFunc = ( ) =>{

    const inputRef = useRef('')
    const navigate = useNavigate()

    const goToHome = () =>{
        let val = inputRef.current.value
        navigate('/user/'+val)
    }

  return (
    <div>

        <input ref={inputRef}/>
        <button onClick={()=> goToHome()}>Go to Home</button>

    </div>
  )
}

export default LoginFunc