import React from 'react'
import Navbar from "./Component/Navbar.jsx"
import { creatbrowserRouter } from 'react-router-dom'

function App() {
  const router = creatbrowserRouter([
    {},
    {}


  ])
  return (
    <>
      <Navbar />      
    </>
  )
}

export default App