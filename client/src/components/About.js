import React, { useContext } from 'react'
import GetUserContext from '../context/authentication/GetUserContext'

function About() {
  const a = useContext(GetUserContext)
  return (
    <div>This is About {a.state.name}</div>
  )
}

export default About