import React from 'react'
import ChildFuncContext from './ChildFuncContext'

const ParentFuncContext = () => {
  return (
    <div>ParentFuncContext
        <ChildFuncContext />
    </div>
  )
}

export default ParentFuncContext