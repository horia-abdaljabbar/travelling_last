import React from 'react'
//import NavBar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/header'

function Root() {
  return (
    <>
     <Outlet/>
    </>
  )
}

export default Root