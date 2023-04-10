import React, { useContext } from 'react'
import { NameContext, WorkContext } from '../Context/Context'

const ChildFuncContext = () => {

  const name = useContext(NameContext)
  const work = useContext(WorkContext)

  return (
    <div>ChildFuncConent {name} & {work}</div>
  )
}

export default ChildFuncContext