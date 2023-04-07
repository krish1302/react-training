import React, { forwardRef, useImperativeHandle } from 'react'

const Func2Ref = (props, ref) =>{

  useImperativeHandle(ref, () => ({
    child2Func,
    
  }), [])

  const child2Func = () => {
    alert('THis is chil2 component')
  }

  return (
    <div>Func2Ref:<br></br>
      {props.name}<br></br>
    </div>
  )
}

export default forwardRef(Func2Ref)