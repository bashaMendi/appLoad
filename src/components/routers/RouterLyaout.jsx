import React from 'react'
import Navbar from '../lyaout/Navbar'
import { Outlet } from 'react-router-dom'

function RouterLyaout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RouterLyaout