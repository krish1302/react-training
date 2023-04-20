import React from 'react'
import { useParams } from 'react-router-dom'

const WelcomeFunc = () => {
    const {userName} = useParams()
  return (
    <div>WelcomeFunc {userName}</div>
  )
}

export default WelcomeFunc